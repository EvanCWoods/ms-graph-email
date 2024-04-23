"use server";

import { redirect } from "next/navigation";

/**
 * Sets the search filters for the admin search users functionality.
 *
 * @param formData - The form data containing the search filter values.
 * @returns {Promise<void>} - A promise that resolves once the search filters are set and the page is redirected.
 */
const setAdminSearchUsersFilters = async (formData: FormData) => {
  const name = (formData.get("name") as string) || "";
  const email = (formData.get("email") as string) || "";
  const accountType = (formData.get("accountType") as string) || "";

  console.log(name, email, accountType);

  // Construct the query parameters dynamically based on whether they have a value
  const queryParams = new URLSearchParams();

  if (name) queryParams.append("name", name);
  if (email) queryParams.append("email", email);
  if (accountType) queryParams.append("accountType", accountType);

  // Redirect to the same page, but with the updated filters
  // Assuming the base URL is `/admin/users`, add `page=0` by default and other parameters as needed
  queryParams.append("page", "1");

  redirect(`/admin/users?${queryParams.toString()}`);
};

export default setAdminSearchUsersFilters;
