"use client";
import React from "react";
import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel";
import FeaturedCharityCard from "./featuredCharityCard";
import AutoPlay from "embla-carousel-autoplay";
import { type ICharity } from "~/models/Charity";

/**
 * Retrieves a list of featured charities and renders them as FeaturedCharityCard components.
 *
 * @returns {React.ReactNode} The rendered FeaturedCharities component.
 */

interface IProps {
  featuredCharities: ICharity[];
}
const FeaturedCharities = ({ featuredCharities }: IProps) => {
  const renderFeaturedCharities = () => {
    if (!featuredCharities || featuredCharities.length === 0) return null;

    return featuredCharities.map((charity, i) => (
      <CarouselItem key={i}>
        <div className="flex w-full justify-center">
          <FeaturedCharityCard
            name={charity.charityName}
            description={charity.featureDescription}
          />
        </div>
      </CarouselItem>
    ));
  };

  return (
    <Carousel
      className="mb-10 w-full"
      plugins={[
        AutoPlay({
          delay: 10000,
          stopOnInteraction: false,
        }),
      ]}
    >
      <CarouselContent>{renderFeaturedCharities()}</CarouselContent>
    </Carousel>
  );
};

export default FeaturedCharities;
