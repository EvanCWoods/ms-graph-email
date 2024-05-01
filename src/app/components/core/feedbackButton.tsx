"use client";
import { useState } from "react";
import saveFeedback from "~/app/server-actions/saveFeedback";
import FeedbackIcon from "~/assets/icons/feedbackIcon";

const labelsClass =
  "px-4 py-2 border rounded border-brand-orange w-1/3 text-center bg-white text-brand-orange cursor-pointer transition-colors duration-200 ease-in-out hover:bg-brand-orange hover:text-white peer-checked:bg-brand-orange peer-checked:text-white";

const FeedbackButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClickAdd = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <div title="Want to give us feedback?">
        <button
          onClick={handleClickAdd}
          className="flex h-[25px] w-[25px] items-center justify-center"
          title="Want to give us feedback?"
        >
          <FeedbackIcon />
        </button>
      </div>

      {isOpen && (
        <div className=" w-full h-full fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="flex flex-wrap justify-center rounded">
            <form action={saveFeedback} onSubmit={handleClose}>
              <div className="rounded-lg bg-white p-4 text-black shadow-lg">
                <h3 className="mb-3 text-lg text-black">
                  How satisfied are you with Good Change?
                </h3>
                <div className="flex justify-between">
                  <div>
                    <input
                      type="radio"
                      id="unsatisfied"
                      name="satisfaction"
                      value="unsatisfied"
                      className="peer hidden"
                    />
                    <label htmlFor="unsatisfied" className={labelsClass}>
                      Unsatisfied
                    </label>
                  </div>
                  <div>
                    <input
                      type="radio"
                      id="indifferent"
                      name="satisfaction"
                      value="indifferent"
                      className="peer hidden"
                    />
                    <label htmlFor="indifferent" className={labelsClass}>
                      Indifferent
                    </label>
                  </div>
                  <div>
                    <input
                      type="radio"
                      id="satisfied"
                      name="satisfaction"
                      value="satisfied"
                      className="peer hidden"
                    />
                    <label htmlFor="satisfied" className={labelsClass}>
                      Satisfied
                    </label>
                  </div>
                </div>
                <h3 className="mt-3 text-lg text-black">
                  Do you wish to elaborate?
                </h3>
                <textarea
                  className="mt-2 w-full rounded border px-2 py-1 text-black"
                  name="explanation"
                ></textarea>
                <div className="mt-4 flex justify-end space-x-2">
                  <button
                    onClick={handleClose}
                    className="rounded bg-gray-200 px-4 py-2 text-black"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="rounded bg-brand-orange px-4 py-2 text-white"
                  >
                    Save
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default FeedbackButton;
