type Pagination = {
  skip: number;
  limit: number;
};

/**
 * Returns a Pagination object based on the given page and perPage values.
 *
 * @param {number} page - The current page number.
 * @param {number} perPage - The number of items per page.
 * @returns {Pagination} - The Pagination object with skip and limit properties.
 */
export const getPagination = (page: number, perPage: number): Pagination => {
  // Ensure the skip count starts at 0 for the first page (page 1)
  // Pages are assumed to be 1-indexed
  const skip = (page - 1) * perPage;
  const limit = perPage;
  return {
    skip,
    limit,
  };
};
