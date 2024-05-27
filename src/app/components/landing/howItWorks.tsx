// components/HowItWorks.tsx
const HowItWorks = () => {
  return (
    <div className="rounded-lg bg-white p-8">
      <h2 className="mb-6 text-center text-4xl font-medium text-brand-orange">
        How It Works
      </h2>
      <div className="flex flex-wrap items-center justify-around gap-2 text-center">
        <div className="h-[250px] w-[300px] rounded-lg border p-3 shadow-lg">
          <div className="">
            <span className="inline-block h-10 w-10 rounded-full bg-brand-orange text-lg leading-10 text-white">
              1
            </span>
          </div>
          <p className="my-5 text-gray-600">Simply sign-up</p>
          <p>
            Register on the GoodChange platform to start your giving journey.
          </p>
        </div>
        <div className="h-[250px] w-[300px] rounded-lg border p-3 shadow-lg">
          <div>
            <span className="inline-block h-10 w-10 rounded-full bg-brand-orange text-lg leading-10 text-white">
              2
            </span>
          </div>
          <p className="my-5 text-gray-600">Select donation amount</p>
          <p>Choose how much you want to donate — every little bit helps!</p>
        </div>
        <div className="h-[250px] w-[300px] rounded-lg border p-3 shadow-lg">
          <div>
            <span className="inline-block h-10 w-10 rounded-full bg-brand-orange text-lg leading-10 text-white">
              3
            </span>
          </div>
          <p className="my-5 text-gray-600">Choose one or more charities</p>
          <p>Select one or more charities you wish to support from our list.</p>
        </div>
        <div className="h-[250px] w-[300px] rounded-lg border p-3 shadow-lg">
          <div>
            <span className="inline-block h-10 w-10 rounded-full bg-brand-orange text-lg leading-10 text-white">
              4
            </span>
          </div>
          <p className="my-5 text-gray-600">Donate!</p>
          <p>
            Complete your donation and make a real impact with your generosity.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
