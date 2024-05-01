"use server";

import { redirect } from "next/navigation";
const setAdvancedSearchFilters = async (formData: FormData) => {
  const searchText = (formData.get("search-text") as string) || "";
  const location = (formData.get("postcode") as string) || "";
  const beneficiaries = (formData.get("beneficiaries") as string) || "";
  const countries = (formData.get("countries") as string) || "";
  const state = (formData.get("state") as string) || "";
  const size = (formData.get("size") as string) || "";

  //console.log(searchText, location, beneficiaries, state, countries);

  const queryParams = new URLSearchParams();

  if (searchText) queryParams.append("search", searchText);
  if (location) queryParams.append("location", location);
  if (beneficiaries) queryParams.append("beneficiaries", beneficiaries);
  if (countries) queryParams.append("countries", countries);
  if (state) queryParams.append("state", state);
  if (size) queryParams.append("size", size);
  const url = `/charity-search/advanced-search?${queryParams.toString()}`;
  redirect(url);
};

export default setAdvancedSearchFilters;
