/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import User from "~/models/User";
import createUserStripeAccount from "~/app/server-actions/stripe/createUserStripeAccount";
import dbConnect from "~/utils/dbConnect";

/**
 * Creates a user in the database and Stripe.
 *
 * @param {string} id - The ID of the user.
 * @param {string} firstName - The first name of the user.
 * @param {string} lastName - The last name of the user.
 * @param {string} email - The email of the user.
 * @returns {Promise<void>} - A promise that resolves when the user is created in the database and Stripe.
 */
export const createUserInDb = async (
  id: string,
  firstName: string,
  lastName: string,
  email: string,
  userId: string,
) => {
  //* Create the user in Stripe
  const stripeCustomerId: string = await createUserStripeAccount(
    firstName,
    lastName,
    email,
  );

  //* Create the user in the database
  await dbConnect();
  const user = await User.findOneAndUpdate(
    { _id: userId },
    {
      clerkUserId: id,
      stripeCustomerId: stripeCustomerId,
      name: `${firstName} ${lastName}`,
      email: email,
    },
  );
  console.log({ user });
};
