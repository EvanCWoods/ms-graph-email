/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/non-nullable-type-assertion-style */
import Stripe from "stripe";
import { NextResponse } from "next/server";
import Transaction from "~/models/Transaction";
import dbConnect from "~/utils/dbConnect";
import Individual from "~/models/Individual";
import User from "~/models/User";
import Company from "~/models/Company";

const stripe = new Stripe(process.env.STRIPE_PRIVATE_KEY!);
const secret = process.env.STRIPE_WEBHOOK_SECRET ?? "";

/**
 * Handles the POST request for the webhook endpoint.
 *
 * @param req - The request object containing the webhook data.
 * @returns A JSON response indicating the success or failure of processing the webhook.
 * @throws If an error occurs during webhook processing.
 */
export async function POST(req: Request) {
  try {
    const body = await req.text();
    const signature = req.headers.get("stripe-signature");

    await dbConnect();

    const event = stripe.webhooks.constructEvent(body, signature!, secret);

    // Process the event
    switch (event.type) {
      case "payment_intent.succeeded":
        const paymentIntent = event.data.object;
        console.log("PaymentIntent was successful!", paymentIntent);
        break;
      case "payment_intent.payment_failed":
        const paymentIntentFailed = event.data.object;
        console.log("PaymentIntent was not successful!", paymentIntentFailed);
        // Log the failure and update the transaction
        //   await db.updateTransaction(paymentIntentFailed.id, { status: 'failed', failureMessage: paymentIntentFailed.last_payment_error?.message });
        break;
      case "charge.succeeded":
        const charge = event.data.object;
        console.log("Charge was successful!", charge);
        // Update or confirm the charge status
        //   await db.updateCharge(charge.id, { status: 'succeeded' });
        break;
      case "charge.failed":
        const failedCharge = event.data.object;
        console.log("Charge failed!", failedCharge);
        // Update the charge status and record the error
        //   await db.updateCharge(failedCharge.id, { status: 'failed', failureMessage: failedCharge.failure_message });
        break;
      case "checkout.session.completed":
        const payment = event.data.object;
        console.log("Checkout session completed!", payment);
        // Update your database to mark the transaction as successful
        const transaction = new Transaction({
          stripeCustomerId: payment.customer,
          paymentId: payment.id,
          createdAt: Date.now(),
          updatedAt: Date.now(),
          status: payment.status,
          amount: payment.amount_total,
          subscriptionId: payment.subscription,
          charityName: payment.metadata?.charityName,
          charityId: payment.metadata?.charityId,
        });

        await transaction.save();

        const newAllocation = {
          charityId: payment.metadata?.charityId ?? "",
          amount: payment.amount_total ?? 0,
          charityName: payment.metadata?.charityName ?? "",
        };

        const user = await User.findOne({
          stripeCustomerId: payment.customer as string,
        });

        if (!user) return;

        switch (user.accountType) {
          case "individual":
            const individual = await Individual.findOne({
              userId: user._id as string,
            });

            if (!individual) return;

            if (payment.mode === "subscription") {
              individual.currentCharities.push(newAllocation);
              await individual.save();
            }
            break;
          case "company":
            const company = await Company.findOne({
              userId: user._id as string,
            });

            if (!company) return;

            if (payment.mode === "subscription") {
              company.currentCharities.push(newAllocation);
              await company.save();
            }
            break;

          default:
            console.log(`Unhandled account type ${user.accountType}`);
        }

      default:
        console.log(`Unhandled event type ${event.type}`);
    }

    return NextResponse.json({
      result: "Webhook received and processed successfully",
      ok: true,
    });
  } catch (error: any) {
    console.error(`Webhook Error: ${error.message}`);
    return NextResponse.json(
      {
        message: "Something went wrong",
        ok: false,
      },
      { status: 500 },
    );
  }
}
