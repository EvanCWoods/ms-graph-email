import type { ReactNode } from "react";

interface IProps {
  title: string;
  text: string;
  icon: ReactNode;
}

/**
 * Renders an outline card component.
 *
 * @param {string} title - The title of the card.
 * @param {string} text - The text content of the card.
 * @param {ReactNode} icon - The icon component to be displayed on the dscard.
 * @returns {ReactNode} - The rendered outline card component.
 */
const OutlineCard: React.FC<IProps> = ({ title, text, icon }) => {
  return (
    <div className="mt-8 flex h-[150px] w-full flex-col items-center justify-center gap-2 rounded-lg border p-4 shadow">
      <span className="absolute translate-y-[-80px] rounded-lg bg-brand-orange p-2 xl:translate-y-[-70px]">
        {icon}
      </span>
      <h3 className="text-center text-lg font-medium leading-6 text-gray-900 xl:text-xl">
        {title}
      </h3>
      <p className="text-center text-sm text-gray-600 xl:text-base">{text}</p>
    </div>
  );
};

export default OutlineCard;
