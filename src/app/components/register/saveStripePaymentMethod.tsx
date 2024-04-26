import setupUserStripe from "~/app/server-actions/stripe/setupUserStripe";

const saveStripePaymentMethod = async () => {
  return (
    <div className="text-center">
      <h1 className="text-3xl">
        Now for how you&apos;ll be supporting the charities you choose.
      </h1>
      <p>
        We use Stripe to process your donations. Click the button below to
        securely save your payment method.
      </p>
      <form action={setupUserStripe}>
        <button
          type="submit"
          className="rounded-lg hover:bg-brand-orange px-3 py-1 hover:text-white text-brand-orange bg-white border border-brand-orange"
        >
          Go To Stripe
        </button>
      </form>
    </div>
  );
};

export default saveStripePaymentMethod;
