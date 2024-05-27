import { SignUp } from "@clerk/nextjs";

interface IProps {
  id: string;
  schedule: string;
  step: number;
}

/**
 * Renders the sign-up page.
 *
 * @returns {JSX.Element} The sign-up page component.
 */
const SignUpPage: React.FC<IProps> = ({ id, schedule, step }) => {
  console.log(id);
  return (
    <div className="my-10 flex w-screen justify-center">
      <SignUp
        redirectUrl={`/register?step=${step}`}
        unsafeMetadata={{ userId: id, schedule, step }}
      />
    </div>
  );
};

export default SignUpPage;
