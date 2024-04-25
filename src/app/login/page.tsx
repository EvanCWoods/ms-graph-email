import { SignIn } from "@clerk/nextjs";

const LoginPage = async () => {
    return (
        <div className="w-full flex justify-center items-center my-32">
            <SignIn afterSignInUrl={"/dashboard"}/>
        </div>
    )
}

export default LoginPage;