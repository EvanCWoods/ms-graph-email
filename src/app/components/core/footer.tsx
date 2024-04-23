import Link from "next/link";

const Footer = () => {
  return (
    <div className="mt-auto w-full bg-white py-5">
      {" "}
      {/* Ensure mt-auto is added to push to bottom */}
      <div className="text-center">
        <Link href="/about" className="mx-2">
          About
        </Link>
        <Link href="/press" className="mx-2">
          Press
        </Link>
        <Link href="/accessibility" className="mx-2">
          Accessibility
        </Link>
        <Link href="/partners" className="mx-2">
          Partners
        </Link>
      </div>
      <div className="text-center">
        <Link href="https://www.blocksoftware.com.au" className="underline">
          © 2024 Block Software Group. All rights reserved.
        </Link>
      </div>
    </div>
  );
};

export default Footer;
