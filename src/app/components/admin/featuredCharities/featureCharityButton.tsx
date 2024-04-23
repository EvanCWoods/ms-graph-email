"use client";
import React, { useState } from "react";
import saveFeaturedCharity from "~/app/server-actions/admin/saveFeaturedCharity";

interface IProps {
  id: string;
}

/**
 * FeatureCharityButton component.
 *
 * This component renders a button that, when clicked, opens a form to add a description for a charity.
 *
 * Props:
 * - id: string - The ID of the charity.
 *
 * State:
 * - isOpen: boolean - Indicates whether the form is open or not.
 *
 * Handlers:
 * - handleClickAdd: () => void - Handles the click event of the "Feature Charity" button and opens the form.
 * - handleClose: () => void - Handles the click event of the "Cancel" button and closes the form.
 *
 * @returns JSX.Element - The rendered component.
 */
const FeatureCharityButton: React.FC<IProps> = ({ id }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClickAdd = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <button
        onClick={handleClickAdd}
        className="rounded bg-brand-orange px-4 py-2 font-bold text-white"
      >
        Feature Charity
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <form action={saveFeaturedCharity}>
            <div className="rounded-lg bg-white p-4 shadow-lg">
              <h3 className="text-lg font-bold">Add Charity Description</h3>
              <textarea
                className="mt-2 w-full rounded border px-2 py-1"
                placeholder="Enter description"
                name="description"
              ></textarea>
              <input type="hidden" name="id" value={id} />
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
      )}
    </div>
  );
};

export default FeatureCharityButton;
