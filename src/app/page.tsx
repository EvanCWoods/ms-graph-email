import HomeContentCard from "~/app/components/landing/homeContentCard";
import HeroImage from "~/assets/landing-stacked.png";
import Image from "next/image";
import WhatWeDo from "~/app/components/landing/whatWeDo";
import FeaturedCharities from "~/app/components/landing/featuredCharities";
import getFeaturedCharities from "~/app/server-actions/charity/getFeaturedCharities";

/**
 * Renders the home page of the application.
 *
 * @returns {JSX.Element} The rendered home page.
 */
export default async function HomePage() {
  const featuredCharities = await getFeaturedCharities();

  return (
    <main className="flex flex-col gap-10">
      <div className="grid grid-cols-1 md:grid-cols-2">
        <HomeContentCard
          title="Affordable donations made easy"
          text="We make it easy for you to support communities you're passionate about, and by doing so create a more connected world."
        />
        <Image
          src={HeroImage.src}
          alt="hero image"
          className="h-full w-full"
          width={1000}
          height={1000}
        />
      </div>
      <FeaturedCharities featuredCharities={featuredCharities} />
      <WhatWeDo />
    </main>
  );
}
