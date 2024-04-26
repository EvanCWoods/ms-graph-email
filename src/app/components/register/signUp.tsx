import { SignUp } from "@clerk/nextjs";

interface IProps {
  id: string;
  schedule: string;
}

/**
 * Renders the sign-up page.
 *
 * @returns {JSX.Element} The sign-up page component.
 */
const SignUpPage: React.FC<IProps> = ({ id, schedule }) => {
  console.log(id);
  return (
    <div className="my-10 flex w-screen justify-center">
      <SignUp
        redirectUrl={"/register?step=3"}
        unsafeMetadata={{ userId: id, schedule }}
      />
    </div>
  );
};

export default SignUpPage;
