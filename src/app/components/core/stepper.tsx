interface IStepperProps {
  steps: string[];
  currentStep: number; // Note: Assuming currentStep is 1-indexed
}

const Stepper: React.FC<IStepperProps> = ({ steps, currentStep }) => {
  return (
    <div className="m-2 flex justify-between rounded-lg border-2 border-gray-200 px-1 py-2  md:m-5 md:items-center md:px-4">
      {steps.map((step, index) => {
        const stepNumber = index + 1;
        const isCompleted = stepNumber < currentStep;
        const isCurrent = stepNumber == currentStep;

        return (
          <div key={step} className=" flex flex-col items-center">
            <div
              className={`flex h-8 w-8 items-center justify-center rounded-full border-2 text-sm font-semibold ${
                isCompleted
                  ? "border-brand-orange bg-brand-orange text-white"
                  : isCurrent
                    ? "border-brand-orange text-brand-orange"
                    : "border-gray-400 text-gray-400"
              }`}
            >
              {stepNumber}
            </div>
            <span
              className={`mt-2 text-center text-xs ${
                isCompleted || isCurrent ? "text-brand-orange" : "text-gray-400"
              }`}
            >
              {step}
            </span>
          </div>
        );
      })}
    </div>
  );
};

export default Stepper;
