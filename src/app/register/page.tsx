import CharityProgramFilter from "~/app/components/register/charityProgramFilter";
import AccountTypeCard from "../components/register/accountType";
import Stepper from "~/app/components/core/stepper";
import SignUpPage from "~/app/components/register/signUp";
import UpdateBudget from "~/app/components/register/updateBudget";
import {
  CHARITY_REGISTRATION_STEPS,
  COMPANY_REGISTRATION_STEPS,
  INDIVIDUAL_REGISTRATION_STEPS,
} from "~/constants/registrationSteps";
import getSignupStep from "~/app/server-actions/user/getSignupStep";
import { redirect } from "next/navigation";
import getUserAccountType from "~/app/server-actions/user/getUserAccountType";
import AddCharityDetails from "~/app/components/register/addCharityDetails";
import AddCharityBankData from "~/app/components/register/addCharityBankData";
import SaveStripePaymentMethod from "~/app/components/register/saveStripePaymentMethod";
import type { AccountType } from "~/types";

interface IProps {
  searchParams: {
    step: number;
    id: string;
    page?: number;
    parent?: string;
  };
}

/**
 * Renders the registration page based on the current step and user account type.
 *
 * @param {Object} searchParams - The search parameters from the URL.
 * @param {number} searchParams.step - The current step of the registration process.
 * @param {number} [searchParams.page] - The page number (optional).
 * @param {string} [searchParams.parent] - The parent ID (optional).
 * @returns {JSX.Element} The rendered registration page.
 */
const registrationPage: React.FC<IProps> = async ({ searchParams }) => {
  const { step, parent, id } = searchParams;
  //* Get the user's current registration step
  const signUpStep = await getSignupStep();
  const userAccountType = (await getUserAccountType()) as AccountType;

  //* If the user's current registration step is not the same as the step in the URL, redirect them to the correct step
  if (!step || !signUpStep) redirect("register?step=1");
  if (signUpStep && signUpStep !== parseInt(step.toString())) {
    redirect(`/register?step=${signUpStep}`);
  }

  // Check if the user account type is either "individual" or "company"
  const showIndividualOrCompany =
    userAccountType === "individual" || userAccountType === "company";
  const showCharity = userAccountType === "charity";

  const getRegistrationSteps = () => {
    if (userAccountType === "charity") return CHARITY_REGISTRATION_STEPS;
    if (userAccountType === "company") return COMPANY_REGISTRATION_STEPS;
    return INDIVIDUAL_REGISTRATION_STEPS;
  };

  return (
    <div>
      <Stepper steps={getRegistrationSteps()} currentStep={step} />
      {step == 1 && <AccountTypeCard />}
      {step == 2 && <SignUpPage id={id} />}
      {showIndividualOrCompany && step == 3 && <UpdateBudget />}
      {showIndividualOrCompany && step == 4 && <SaveStripePaymentMethod />}
      {showIndividualOrCompany && step == 5 && (
        <CharityProgramFilter parentId={parent} isRegistering />
      )}
      {step == 3 && showCharity && <AddCharityDetails />}
      {step == 4 && showCharity && <AddCharityBankData />}
    </div>
  );
};

export default registrationPage;
