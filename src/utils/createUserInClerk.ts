"use server";
import { clerkClient } from "@clerk/nextjs";

/**
 * Creates a new user in Clerk.
 *
 * @param {string} firstName - The first name of the user.
 * @param {string} lastName - The last name of the user.
 * @param {string} email - The email address of the user.
 * @param {string} password - The password for the user.
 * @returns {Promise<string>} - The ID of the newly created user.
 */
const createUserInClerk = async (
  firstName: string,
  lastName: string,
  email: string,
  password: string,
): Promise<string> => {
  console.log({ firstName, lastName, email, password });
  const clerkUser = await clerkClient.users.createUser({
    firstName,
    lastName,
    emailAddress: [email],
    password,
  });
  return clerkUser.id;
};

export default createUserInClerk;
