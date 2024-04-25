import React from "react";
import Button from "../core/button";

interface IProps {
  title: string;
  text: string;
}

/**
 * Renders a home content card component.
 *
 * @component
 * @param {Object} props - The component props.
 * @param {string} props.title - The title of the card.
 * @param {string} props.text - The text content of the card.
 * @returns {JSX.Element} - The rendered home content card.
 */
const HomeContentCard: React.FC<IProps> = ({ title, text }) => {
  return (
    <div className="my-6 flex flex-col items-center justify-center gap-6 md:my-0">
      <div className="flex w-[80%] flex-col gap-6">
        <h1 className="text-center text-4xl font-medium text-brand-orange xl:text-6xl">
          {title}
        </h1>
        <p className="text-center">{text}</p>
      </div>
      <div>
        <Button
          text="Get Started"
          size="lg"
          variant="secondary"
          redirectUrl="/register?step=1"
        />
      </div>
    </div>
  );
};

export default HomeContentCard;
