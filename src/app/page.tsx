// import HomeContentCard from "~/app/components/landing/homeContentCard";
// import HeroImage from "~/assets/landing-stacked.png";
// import Image from "next/image";
import bannerImage from "~/assets/HeroBackground.jpeg";
import WhatWeDo from "~/app/components/landing/whatWeDo";
import FeaturedCharities from "~/app/components/landing/featuredCharities";
import getFeaturedCharities from "~/app/server-actions/charity/getFeaturedCharities";
import Button from "./components/core/button";
import CallToAction from "./components/landing/callToAction";
import HowItWorks from "./components/landing/howItWorks";
import CustodianRespect from "./components/landing/custodianRespect";

/**
 * Renders the home page of the application.
 *
 * @returns {JSX.Element} The rendered home page.
 */
export default async function HomePage() {
  const featuredCharities = await getFeaturedCharities();

  return (
    <main className="flex flex-col gap-10">
      <div
        className="relative flex h-[500px] w-full items-center justify-start bg-cover bg-center p-2 text-white"
        style={{
          backgroundImage: `url(${bannerImage.src})`,
        }}
      >
        {/* Overlay with black color and 10% opacity */}
        <div className="absolute left-0 top-0 h-full w-full bg-black bg-opacity-25"></div>

        <div className="relative z-10 w-full p-2 text-center sm:text-left lg:pl-20">
          <h1 className="mb-3 text-6xl font-semibold text-white">
            Affordable donations made easy
          </h1>
          <p className="text-xl text-white">
            Loose Change. Tight Communities
          </p>
        
          <div className="mt-5">
            <Button
              variant="secondary"
              size="lg"
              text="Get Started"
              redirectUrl="/register?step=1"
            />
          </div>
        </div>
      </div>

      <div className="mx-3 lg:mx-20">
        <WhatWeDo />
      </div>
      <HowItWorks />
        <FeaturedCharities featuredCharities={featuredCharities} />
        <CallToAction />
        <CustodianRespect />
    </main>
  );
}
