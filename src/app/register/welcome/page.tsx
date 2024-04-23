import Image from "next/image";
import HeroImage from "~/assets/GoodChangeLogo.png";
import Button from "~/app/components/core/button";

/**
 * Renders the welcome page component.
 *
 * This component displays a hero image, a welcome message, and a button to redirect to the dashboard.
 *
 * @returns {JSX.Element} The rendered welcome page component.
 */
const welcomePage = () => {
  return (
    <div>
      <div className="flex w-full justify-center">
        <div className="h-[300px] w-[300px]">
          <Image
            src={HeroImage.src}
            alt="hero image"
            className="h-full w-full object-contain"
            width={1000}
            height={1000}
          />
        </div>
      </div>
      <div>
        <h1 className="text-center text-6xl font-bold text-brand-orange">
          Welcome to GoodChange!
        </h1>
        <p className="text-center text-2xl text-gray-600">
          Where your pocket change is doing good.
        </p>
        <div className="my-10 flex w-full justify-center">
          <Button
            text="Go to your Dashboard"
            size="lg"
            variant="secondary"
            redirectUrl="/dashboard"
          />
        </div>
      </div>
    </div>
  );
};

export default welcomePage;
