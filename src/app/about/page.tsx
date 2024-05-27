"use client"
import bannerImage from "../../assets/HeroBackground.jpeg";
import Button from "../components/core/button";

export default function AboutUs() {
  return (
    <div className="flex flex-col items-center justify-center space-y-8">
      <div
        className="relative flex w-full items-center justify-start bg-cover bg-center p-2 text-white"
        style={{
          backgroundImage: `url(${bannerImage.src})`,
          minHeight: "350px",
        }}
      >
        <div className="absolute left-0 top-0 h-full w-full bg-black bg-opacity-25"></div>

      <div className="relative flex w-full flex-wrap justify-center px-5 mx-10 md:w-3/4 md:ml-[10%]">
        <h2 className="w-full text-center md:text-left text-6xl font-bold text-white">
          Welcome to Good Change
        </h2>
        <p className="w-full text-center md:text-left text-xl">
          Where every act of kindness has a meaningful impact.
        </p>
        <p className=" my-5 w-full text-center md:text-left text-lg">
          We’re a not-for-profit (NFP) organisation with a clear mission to make
          it effortless for you to donate to the communities that matter most to
          them. We are making affordable donations easy.
        </p>
        <div className="flex w-full">
          <Button
            text="Get Started"
            size="lg"
            variant="secondary"
            redirectUrl="/register?step=1"
          />
        </div>
      </div>  
      </div>

      
      <div className="mx-auto w-full px-5 py-8 md:w-4/5">
        <div className="grid grid-cols-1 gap-6 text-center lg:grid-cols-1 lg:gap-8">
          <div className="hover-border-effect relative w-full overflow-hidden rounded-sm border bg-white p-6 shadow">
            <div className="left"></div>
            <div className="right"></div>
            <h2 className="text-center text-2xl font-bold text-brand-orange mb-3">
              The Power of Loose Change
            </h2>
            <p className="text-lg">
              Even the smallest contributions have a profound impact. For
              example, 50 cents a day (equivalent to rounding-up a daily coffee
              purchase to the nearest dollar) adds up to $10 a month. Your loose
              change can create tighter communities, turning individual acts of
              generosity into a collective force of good. Join us on a journey
              of positive impact where every contribution, big or small, fosters
              stronger, more vibrant communities.
            </p>
          </div>

          <div className="hover-border-effect relative  w-full overflow-hidden rounded-sm border bg-white p-6 shadow">
            <div className="left"></div>
            <div className="right"></div>
            <h2 className="text-center text-2xl font-bold text-brand-orange mb-3">
              What are communities?
            </h2>
            <p className="text-lg">
              At Good Change we talk a lot about creating thriving communities.
              Communities provide a sense of belonging and connection, weaving
              individuals together through shared interests and common goals.
              Being part of communities allows us to contribute to something
              bigger than ourselves. We need them and they need us to thrive.
            </p>
            <p className="text-lg">
              Good Change is here to make it easy for you to actively contribute
              to the communities meaningful to you.
            </p>
          </div>

          <div className="hover-border-effect relative w-full overflow-hidden rounded-sm border bg-white p-6 shadow">
            <div className="left"></div>
            <div className="right"></div>
            <h2 className="text-center text-2xl font-bold text-brand-orange mb-3">
              Affordability
            </h2>
            <p className="text-lg">
              We recognise that financial circumstances vary. Good Change
              empowers you to be in control of your giving, allowing you to
              choose when, where, and how much you give. Your support,
              regardless of the amount, plays a crucial role in fostering
              thriving communities.
            </p>
          </div>
        </div>

        <div className="hover-border-effect relative mt-12 overflow-hidden rounded-lg border bg-white p-6 shadow-md">
          <div className="left"></div>
          <div className="right"></div>
          <h2 className="text-center text-2xl font-bold text-brand-orange">
            Our Guiding Principles
          </h2>
          <p className="mb-6 text-center text-lg">
            Good Change stands firm on five guiding principles that define our
            approach:
          </p>
          <ul className="list-none space-y-4">
            <li className="flex flex-col gap-2 text-lg">
              <strong className="font-semibold">Trust and Transparency:</strong>
              <span>
                We earn and maintain your trust through transparency and
                accountability.
              </span>
            </li>
            <li className="flex flex-col gap-2 text-lg">
              <strong className="font-semibold">Safe and Secure:</strong>
              <span>
                Your privacy and security are our top priorities. That&apos;s
                why we&apos;ve partnered with Stripe and Clerk
              </span>
            </li>
            <li className="flex flex-col gap-2 text-lg">
              <strong className="font-semibold">
                Effortless and Impactful:
              </strong>
              <span>
                We&apos;ve streamlined the donation process to make supporting
                your communities hassle-free, ensuring your contributions have a
                real impact.
              </span>
            </li>
            <li className="flex flex-col gap-2 text-lg">
              <strong className="font-semibold">Affordable:</strong>
              <span>
                No minimum or limit to how much you contribute. We believe in
                financial accessibility, empowering you to contribute regardless
                of your circumstances.
              </span>
            </li>
            <li className="flex flex-col gap-2 text-lg">
              <strong className="font-semibold">Donor-led:</strong>
              <span>
                Your preferences matter. You&apos;re in control of how, when,
                and where your contributions make a difference.
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
