import Logo from "~/assets/GoodChangeLogo.png";
import Button from "./button";
import Image from "next/image";
import Link from "next/link";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import BurgerMenu from "./menu";

const Header = () => {
  const renderSignedInNav = () => {
    return (
      <>
        <div className="sm:hidden">
          <BurgerMenu />
        </div>
        <div className="hidden sm:block">
          <div className="flex items-center gap-4">
            <Link href="/charity-search">Charity Search</Link>
            <Link href="/dashboard">Dashboard</Link>
            <UserButton />
          </div>
        </div>
      </>
    );
  };
  return (
    <header className="flex max-w-full items-center justify-between bg-brand-orange p-4 text-white">
      <div className="flex items-center">
        <Link legacyBehavior href="/">
          <a className="mx-1 my-0 flex cursor-pointer items-center justify-center border-none bg-transparent p-0 focus:outline-none">
            <Image
              src={Logo.src}
              alt="GoodChange Logo"
              width={60} // Maintain the image's width
              height={40} // Adjust height to match a proper aspect ratio
              layout="fixed" // Ensure Image component doesn't resize dynamically
            />
          </a>
        </Link>
      </div>
      <div className="flex gap-2">
        <SignedOut>
          <Button text="Sign In" size="md" redirectUrl="/sign-in" />
          <Button
            text="Get Started"
            size="md"
            variant="tertiary"
            redirectUrl="/register?step=1"
          />
        </SignedOut>
        <SignedIn>{renderSignedInNav()}</SignedIn>
      </div>
    </header>
  );
};

export default Header;
