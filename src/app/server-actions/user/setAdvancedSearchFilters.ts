"use server";

import { redirect } from "next/navigation";
const setAdvancedSearchFilters = async (formData: FormData) => {
  const searchText = (formData.get("search-text") as string) || "";
  const postcode = (formData.get("postcode") as string) || "";
  const beneficiaries = (formData.get("beneficiaries") as string) || "";
  const countries = (formData.get("countries") as string) || "";
  const state = (formData.get("state") as string) || "";
  const size = (formData.get("size") as string) || "";

  console.log(searchText, postcode, beneficiaries);

  const queryParams = new URLSearchParams();

  if (searchText) queryParams.append("search", searchText);
  if (postcode) queryParams.append("location", postcode);
  if (beneficiaries)
    queryParams.append("f[]", `beneficiaries:${beneficiaries}`);
  if (countries) queryParams.append("f[]", `countries:${countries}`);
  if (state) queryParams.append("f[]", `operating_state:${state}`);
  if (size) queryParams.append("f[]", `size:${size}`);
  const url = `/charity-search/advanced-search?${queryParams.toString()}`;
  redirect(url);
};

export default setAdvancedSearchFilters;
