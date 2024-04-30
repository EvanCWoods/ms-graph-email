import Logo from "~/assets/GoodChangeLogo.png";
import Button from "./button";
import Image from "next/image";
import Link from "next/link";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import BurgerMenu from "./menu";

const Header = () => {
  const renderSignedInNav = () => (
    <>
      <div className="sm:hidden">
        <BurgerMenu />
      </div>
      <div className="hidden items-center gap-4 sm:flex">
        <Link href="/about">About Us</Link>
        <Link href="/charity-search">Charity Search</Link>
        <Link href="/dashboard">Dashboard</Link>
        <UserButton />
      </div>
    </>
  );

  const renderSignedOutNav = () => (
    <>
      <div className="sm:hidden">
        <BurgerMenu />
      </div>
      <div className="hidden items-center gap-3 sm:flex">
        <Link href="/about">About Us</Link>
        <Button text="Sign In" size="md" redirectUrl="/login" />
        <Button
          text="Get Started"
          size="md"
          variant="tertiary"
          redirectUrl="/register?step=1"
        />
      </div>
    </>
  );

  return (
    <header className="flex w-full items-center justify-between bg-brand-orange p-4 text-white">
      <Link href="/">
          <Image
            src={Logo.src}
            alt="GoodChange Logo"
            width={60}
            height={40}
            layout="fixed"
          />
      </Link>
      <SignedOut>{renderSignedOutNav()}</SignedOut>
      <SignedIn>{renderSignedInNav()}</SignedIn>
    </header>
  );
};

export default Header;
