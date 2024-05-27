/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
import type { WebhookEvent } from "@clerk/nextjs/server";
import { headers } from "next/headers";
import { Webhook } from "svix";
import { createUserInDb } from "../utils/createUserAccount";
import { NextResponse } from "next/server";

const webhookSecret = process.env.CLERK_WEBHOOK_SECRET ?? ``;

interface IWebhookEventData {
  id: string;
  first_name: string;
  last_name: string;
  email_addresses: { email_address: string }[];
}

/**
 * Validates the request payload and headers for a webhook event.
 *
 * @param {Request} request - The request object containing the webhook payload and headers.
 * @returns {Promise<WebhookEvent>} - A promise that resolves to the validated webhook event.
 */
async function validateRequest(request: Request) {
  const payloadString = await request.text();
  const headerPayload = headers();

  const svixHeaders = {
    "svix-id": headerPayload.get("svix-id")!,
    "svix-timestamp": headerPayload.get("svix-timestamp")!,
    "svix-signature": headerPayload.get("svix-signature")!,
  };
  const wh = new Webhook(webhookSecret);
  return wh.verify(payloadString, svixHeaders) as WebhookEvent;
}

/**
 * Handles the POST request for webhook events.
 *
 * @param {Request} request - The incoming request object.
 * @returns {Promise<NextResponse>} - The response object.
 */
export async function POST(request: Request) {
  const payload = await validateRequest(request);
  const data: any = payload.data;
  console.log(data);
  const type = payload.type;
  const { id, first_name, last_name, email_addresses } =
    data as IWebhookEventData;

  const unsafe_metadata: any = data.unsafe_metadata;
  const email = email_addresses[0]!.email_address;

  if (type === "user.created" && id) {
    await createUserInDb(
      id,
      first_name,
      last_name,
      email,
      unsafe_metadata.userId as string,
      unsafe_metadata.schedule as string,
      unsafe_metadata.step as number,
    );
  }
  if (type === "user.deleted" && id) {
    // Delete the user from the database;
    return;
  }
  return NextResponse.json({ success: true });
}
