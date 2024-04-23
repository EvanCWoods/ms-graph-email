import CheckAnimation from "~/app/components/core/checkAnimations";

/**
 * Renders the SuccessPage component.
 *
 * This component displays a success message and a button to redirect the user to the dashboard.
 *
 * @returns {JSX.Element} The rendered SuccessPage component.
 */
const SuccessPage = () => {
  return (
    <div className="mb-20 flex h-full w-full flex-wrap items-center justify-center">
      <div className="mt-20 w-[250px]">
        <CheckAnimation redirectUrl="/dashboard" />
      </div>
      <h1 className="mt-10 w-full text-center text-5xl text-brand-orange">
        Your Donation Was Successful!
      </h1>
    </div>
  );
};

export default SuccessPage;
