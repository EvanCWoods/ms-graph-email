"use server";

import { redirect } from "next/navigation";

/**
 * Redirects to the admin featured charities page with a search term.
 *
 * @param formData - The form data containing the search input.
 * @returns {Promise<void>} - A promise that resolves when the redirect is complete.
 */
const redirectForCharitySearch = async (formData: FormData) => {
  const searchInput = formData.get("search-input") as string;
  redirect(`/admin/featured-charities?searchTerm=${searchInput}`);
};

export default redirectForCharitySearch;
