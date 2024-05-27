/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React, { useState } from 'react';
import saveFeedback from "~/app/server-actions/saveFeedback";
import FeedbackIcon from "~/assets/icons/feedbackIcon";
import FrownOrange from "~/assets/icons/frownOrange";
import FrownWhite from "~/assets/icons/frownWhite";
import NeutralOrange from "~/assets/icons/neutralOrange";
import NeutralWhite from "~/assets/icons/neutralWhite";
import SmileOrange from "~/assets/icons/smileOrange";
import SmileWhite from "~/assets/icons/smileWhite";


const labelClass = "w-[40px] h-[40px] block cursor-pointer hover:border-brand-orange hover:border-4 rounded-full"
const FeedbackButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const handleClickAdd = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
    handleOptionChange("");
  };

  const handleOptionChange = (option:any) => {
    setSelectedOption(option);
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
                    <input
                      type="radio"
                      id="unsatisfied"
                      name="satisfaction"
                      value="unsatisfied"
                      className="hidden"
                      checked={selectedOption === 'unsatisfied'}
                      onChange={() => handleOptionChange('unsatisfied')}
                      required
                    />
                    <label htmlFor="unsatisfied" className={`${labelClass} ml-10`}>
                      {selectedOption === 'unsatisfied' ? <FrownWhite /> : <FrownOrange />}
                    </label>
                    <input
                      type="radio"
                      id="indifferent"
                      name="satisfaction"
                      value="indifferent"
                      className="hidden"
                      checked={selectedOption === 'indifferent'}
                      onChange={() => handleOptionChange('indifferent')}
                      required
                    />
                    <label htmlFor="indifferent" className={`${labelClass}`}>
                      {selectedOption === 'indifferent' ? <NeutralWhite /> : <NeutralOrange />}
                    </label>
                    <input
                      type="radio"
                      id="satisfied"
                      name="satisfaction"
                      value="satisfied"
                      className="hidden"
                      checked={selectedOption === 'satisfied'}
                      onChange={() => handleOptionChange('satisfied')}
                      required
                    />
                    <label htmlFor="satisfied" className={`${labelClass} mr-10`}>
                      {selectedOption === 'satisfied' ? <SmileWhite /> : <SmileOrange />}
                    </label>
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
