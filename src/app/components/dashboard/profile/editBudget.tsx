"use client";
import { useState } from "react";
import updateUserBudget from "~/app/server-actions/user/updateUserBudget";
import EditIcon from "~/assets/icons/editIcon";

interface IProps {
    currentBudget: number;
    allocatedBudget: number;
}

const EditBudget: React.FC<IProps> = ({ currentBudget, allocatedBudget }) => {

        const [showModal, setShowModal] = useState(false);

        const openModal = () => {
          setShowModal(true);
        };

        const closeModal = () => {
          setShowModal(false);
        };


    return (
      <div>
        <button
          onClick={openModal}
          className="flex items-center justify-center"
        >
          <EditIcon />
        </button>
        {showModal && (
          <div className="fixed inset-0 z-50 flex h-full w-full items-center justify-center overflow-y-auto bg-gray-600 bg-opacity-50">
            <div className="mx-auto w-full max-w-md rounded-lg bg-white p-5">
              {" "}
              {/* max-width to control modal size */}
              <h2 className="text-center text-lg font-semibold">
                Edit Your Monthly Budget
              </h2>
              <form action={updateUserBudget} className="space-y-4">
                <div className="relative">
                  <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                    <span className="text-gray-500 sm:text-sm">$</span>
                  </div>
                  <input
                    type="number"
                    placeholder="Enter new budget"
                    className="mt-2 block w-full rounded border border-gray-300 p-2 pl-8" // Ensure full width and padding for the dollar sign
                    defaultValue={Math.round(currentBudget / 100)} // Round to the nearest integer
                    min={Math.round(allocatedBudget / 100)} // Round to the nearest integer
                    autoFocus
                    name="budget"
                  />
                </div>
                <div className="flex justify-center gap-2">
                  <button
                    type="button"
                    onClick={closeModal}
                    className="rounded bg-gray-400 px-4 py-2 text-white hover:bg-gray-700"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="rounded border border-brand-orange px-6 py-2 text-brand-orange hover:bg-brand-orange hover:text-white"
                  >
                    Save
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    );
}

export default EditBudget;;