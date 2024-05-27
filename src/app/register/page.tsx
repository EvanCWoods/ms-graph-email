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
import SaveStripePaymentMethod from "~/app/components/register/saveStripePaymentMethod";
import type { AccountType } from "~/types";
import DonationTypeSelect from "../components/register/donationTypeSelect";
import AddCompanyDetails from "../components/register/addCompanyDetails";
import BecomePayee from "../components/register/becomePayee";

interface IProps {
  searchParams: {
    step: number;
    id?: string;
    page?: number;
    parent?: string;
    schedule?: string;
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
  const { step, parent, id, schedule } = searchParams;
  //* Get the user's current registration step
  const signUpStep = await getSignupStep();
  console.log(signUpStep);
  const userAccountType = (await getUserAccountType(id)) as AccountType;

  //* If the user's current registration step is not the same as the step in the URL, redirect them to the correct step
  if (!step) redirect("register?step=1");
  if (signUpStep && signUpStep !== parseInt(step.toString())) {
    const url = `/register?step=${signUpStep}`;
    redirect(url);
  }

  // Check if the user account type is either "individual" or "company"
  const showIndividual = userAccountType === "individual";
  const showCompany = userAccountType === "company";
  const showCharity = userAccountType === "charity";

  const getRegistrationSteps = () => {
    if (userAccountType === "charity") return CHARITY_REGISTRATION_STEPS;
    if (userAccountType === "company") return COMPANY_REGISTRATION_STEPS;
    return INDIVIDUAL_REGISTRATION_STEPS;
  };

  return (
    <div>
      {userAccountType && (
        <Stepper steps={getRegistrationSteps()} currentStep={step} />
      )}
      {/* Individual */}
      {step == 1 && !id && <AccountTypeCard />}
      {step == 1 && id && !showCharity && <DonationTypeSelect id={id} />}
      {step == 2 && id && showIndividual && (
        <SignUpPage id={id} schedule={schedule ?? "single"} step={3}/>
      )}
      {showIndividual && step == 3 && <UpdateBudget />}
      {showIndividual && step == 4 && <SaveStripePaymentMethod />}
      {showIndividual && step == 5 && (
        <CharityProgramFilter parentId={parent} isRegistering />
      )}
      {/* Company */}
      {showCompany && step == 2 && id && schedule && <AddCompanyDetails id={id} schedule={schedule}/>}
      {showCompany && step == 3 && id && <SignUpPage id={id} schedule={schedule ?? "single"} step={4} />}
      {showCompany && step == 4 && <SaveStripePaymentMethod />}
      {showCompany && step == 5 && <UpdateBudget />}
      {showCompany && step == 6 && (
        <CharityProgramFilter parentId={parent} isRegistering />
      )}
      {/* Charity */}
      {step == 2 && showCharity && id && <AddCharityDetails id={id} />}
      {step == 3 && showCharity && id && <SignUpPage id={id} schedule={schedule ?? "single"} step={4} />}
      {step == 4 && showCharity && <BecomePayee />}
    </div>
  );
};

export default registrationPage;
