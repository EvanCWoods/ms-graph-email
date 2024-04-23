import React from "react";
import OutlineCard from "./outlineCard";
import UploadIcon from "~/assets/icons/uploadIcon";
import LockIcon from "~/assets/icons/lockIcon";
import CycleIcon from "~/assets/icons/cycleIcon";
import ShieldIcon from "~/assets/icons/sheildIcon";

/**
 * Renders the "What We Do" section of the landing page.
 *
 * @returns {JSX.Element} The rendered component.
 */
const WhatWeDo = () => {
  return (
    <div>
      <h1 className="mt-32 text-center text-4xl font-medium text-brand-orange xl:text-5xl">
        What We Do
      </h1>
      <p className="mt-4 text-center text-base xl:text-xl">
        We make it easy for you to support communities you&apos;re passionate
        about, and by doing so create a more connected world.
      </p>
      <div className="mt-5 grid grid-cols-1 gap-5 p-4 md:grid-cols-2">
        <OutlineCard
          icon={<UploadIcon color="white" />}
          title="Automate, capped roundups of daily transactions"
          text="This is the card text, providing detailed information."
        />
        <OutlineCard
          icon={<LockIcon color="white" />}
          title="You decide and control everything"
          text="Another card text, offering more insights."
        />
        <OutlineCard
          icon={<CycleIcon color="white" />}
          title="No dilution, 100% goes to communities"
          text="This is the card text, providing detailed information."
        />
        <OutlineCard
          icon={<ShieldIcon color="white" />}
          title="Insights on community use and impacts"
          text="Another card text, offering more insights."
        />
      </div>
    </div>
  );
};

export default WhatWeDo;
