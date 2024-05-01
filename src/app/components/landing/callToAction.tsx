import Button from "../core/button";

const CallToAction = () => {
    return (
      <div className="flex h-[250px] w-full flex-col items-center justify-between bg-brand-lightOrange px-5 py-4 md:flex-row md:px-20">
        <div className="md:w-7/10 mb-6 text-center md:mb-0 md:text-left">
          <h1 className="text-3xl font-bold text-black md:text-4xl">
            Ready to dive in?
          </h1>
          <p className="text-xl font-bold text-brand-orange md:text-4xl">
            Get started today and make a difference!
          </p>
        </div>
        <Button
          text="Get Started"
          variant="secondary"
          redirectUrl="/register?step=1"
          size="lg"
        />
      </div>
    );
}

export default CallToAction;