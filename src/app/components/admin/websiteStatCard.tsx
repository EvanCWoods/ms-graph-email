"use client";

interface IProps {
  name: string;
  count: string;
  redirectUrl: string;
}

/**
 * Renders a website stat card component.
 *
 * @param name - The name of the website.
 * @param count - The count associated with the website.
 * @param redirectUrl - The URL to redirect to when the card is clicked.
 * @returns The rendered website stat card component.
 */
const WebsiteStatCard: React.FC<IProps> = ({ name, count, redirectUrl }) => {
  return (
    <button
      onClick={() => window.location.replace(redirectUrl)}
      key={name + count}
      className="m-3 flex h-[160px] w-[160px] cursor-pointer flex-wrap justify-center rounded-lg p-5 shadow-lg"
    >
      <h1 className="w-full">{name}</h1>
      <p className="text-2xl">{count}</p>
    </button>
  );
};

export default WebsiteStatCard;
