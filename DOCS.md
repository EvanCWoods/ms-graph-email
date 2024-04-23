# Project Documentation

## Documentation Statistics
- Total Files: 133
- Files with Documentation: 84
- Documentation Coverage: 63.16%

## Folder: .next/types/app/charity-search/advanced-search

### [layout.ts](.next/types/app/charity-search/advanced-search/layout.ts)

`No documentation available.`

### [page.ts](.next/types/app/charity-search/advanced-search/page.ts)

`No documentation available.`

## Folder: .next/types/app/charity-search/filter-search

### [page.ts](.next/types/app/charity-search/filter-search/page.ts)

`No documentation available.`

## Folder: .next/types/app/charity-search

### [page.ts](.next/types/app/charity-search/page.ts)

`No documentation available.`

## Folder: .next/types/app/dashboard

### [page.ts](.next/types/app/dashboard/page.ts)

`No documentation available.`

## Folder: .next/types/app

### [layout.ts](.next/types/app/layout.ts)

`No documentation available.`

### [page.ts](.next/types/app/page.ts)

`No documentation available.`

## Folder: .next/types/app/register

### [page.ts](.next/types/app/register/page.ts)

`No documentation available.`

## Folder: .next/types/app/test

### [page.ts](.next/types/app/test/page.ts)

`No documentation available.`

## Folder: src/app/admin/featured-charities

### [page.tsx](src/app/admin/featured-charities/page.tsx)

`No documentation available.`

## Folder: src/app/admin

### [page.tsx](src/app/admin/page.tsx)

Renders the admin page with account banner, website stats, and unverified charities.

## Folder: src/app/admin/users

### [page.tsx](src/app/admin/users/page.tsx)

Renders the admin users page.

## Folder: src/app/api/clerk

### [route.ts](src/app/api/clerk/route.ts)

Validates the request payload and headers for a webhook event.

Handles the POST request for webhook events.

## Folder: src/app/api/stripe

### [route.ts](src/app/api/stripe/route.ts)

Handles the POST request for the webhook endpoint.

## Folder: src/app/api/utils

### [createUserAccount.ts](src/app/api/utils/createUserAccount.ts)

Creates a user in the database and Stripe.

## Folder: src/app/charity/[charityId]

### [page.tsx](src/app/charity/[charityId]/page.tsx)

Renders the CharityPage component.

## Folder: src/app/charity-search/advanced-search

### [layout.tsx](src/app/charity-search/advanced-search/layout.tsx)

`No documentation available.`

### [page.tsx](src/app/charity-search/advanced-search/page.tsx)

`No documentation available.`

## Folder: src/app/charity-search/filter-search

### [page.tsx](src/app/charity-search/filter-search/page.tsx)

`No documentation available.`

## Folder: src/app/charity-search

### [page.tsx](src/app/charity-search/page.tsx)

`No documentation available.`

## Folder: src/app/components/account

### [user.tsx](src/app/components/account/user.tsx)

`No documentation available.`

## Folder: src/app/components/admin/featuredCharities

### [featureCharityButton.tsx](src/app/components/admin/featuredCharities/featureCharityButton.tsx)

FeatureCharityButton component.

This component renders a button that, when clicked, opens a form to add a description for a charity.

Props:
- id: string - The ID of the charity.

State:
- isOpen: boolean - Indicates whether the form is open or not.

Handlers:
- handleClickAdd: () => void - Handles the click event of the "Feature Charity" button and opens the form.
- handleClose: () => void - Handles the click event of the "Cancel" button and closes the form.

### [form.tsx](src/app/components/admin/featuredCharities/form.tsx)

Renders a form for searching charities to feature.

## Folder: src/app/components/admin

### [table.tsx](src/app/components/admin/table.tsx)

Renders a table component displaying a list of users based on the provided filters.

### [tableFilters.tsx](src/app/components/admin/tableFilters.tsx)

Renders a component for filtering table data.

### [unVerifiedCharities.tsx](src/app/components/admin/unVerifiedCharities.tsx)

Renders a list of unverified charities.

### [websiteStatCard.tsx](src/app/components/admin/websiteStatCard.tsx)

Renders a website stat card component.

### [websiteStats.tsx](src/app/components/admin/websiteStats.tsx)

Retrieves website statistics and renders them as WebsiteStatCard components.

## Folder: src/app/components/charitySearch/advanced

### [filters.tsx](src/app/components/charitySearch/advanced/filters.tsx)

`No documentation available.`

### [table.tsx](src/app/components/charitySearch/advanced/table.tsx)

`No documentation available.`

## Folder: src/app/components/charitySearch

### [charityProgramFilter.tsx](src/app/components/charitySearch/charityProgramFilter.tsx)

Renders a filter component for charity programs.

### [searchTypeTile.tsx](src/app/components/charitySearch/searchTypeTile.tsx)

Renders a search tile component.

## Folder: src/app/components/core

### [accountBanner.tsx](src/app/components/core/accountBanner.tsx)

`No documentation available.`

### [button.tsx](src/app/components/core/button.tsx)

`No documentation available.`

### [checkAnimations.tsx](src/app/components/core/checkAnimations.tsx)

CheckAnimation component.

### [footer.tsx](src/app/components/core/footer.tsx)

`No documentation available.`

### [header.tsx](src/app/components/core/header.tsx)

`No documentation available.`

### [oneTimeDonationButton.tsx](src/app/components/core/oneTimeDonationButton.tsx)

`No documentation available.`

### [stepper.tsx](src/app/components/core/stepper.tsx)

`No documentation available.`

## Folder: src/app/components/core/table

### [table.tsx](src/app/components/core/table/table.tsx)

`No documentation available.`

### [tableHead.tsx](src/app/components/core/table/tableHead.tsx)

`No documentation available.`

## Folder: src/app/components/dashboard/charity

### [MonthlyDonations.tsx](src/app/components/dashboard/charity/MonthlyDonations.tsx)

Renders a component displaying the number of monthly donors.

### [accountStatus.tsx](src/app/components/dashboard/charity/accountStatus.tsx)

Renders the AccountStatus component.

This component displays the account status information.

### [charityDashboard.tsx](src/app/components/dashboard/charity/charityDashboard.tsx)

Renders the Charity Dashboard component.

This component displays the account status, total donors, monthly donations, and total donations received.
It is responsible for rendering the main dashboard layout and organizing the different components.

### [totalDonationsRecieved.tsx](src/app/components/dashboard/charity/totalDonationsRecieved.tsx)

Renders a component displaying the total donations received.

### [totalDonors.tsx](src/app/components/dashboard/charity/totalDonors.tsx)

Renders a component displaying the total number of donors.

## Folder: src/app/components/dashboard/profile

### [budget.tsx](src/app/components/dashboard/profile/budget.tsx)

Renders the budget component.

This component displays the total budget, used budget, remaining budget, and the percentage of budget used.
It fetches the budget data using the 'getAccountBudgetData' function and renders the data in an input form and a progress bar.

### [currentCharities.tsx](src/app/components/dashboard/profile/currentCharities.tsx)

Renders the current charities component.

This component retrieves the current charities from the server and renders them in a list format.
Each charity is displayed with its name and the amount donated.
The component also includes a button to make a one-time donation to a specific charity.

### [profile.tsx](src/app/components/dashboard/profile/profile.tsx)

Renders the profile page.

### [reports.tsx](src/app/components/dashboard/profile/reports.tsx)

Renders the Reports component.

### [transactions.tsx](src/app/components/dashboard/profile/transactions.tsx)

Renders a list of transactions for a user.

## Folder: src/app/components/landing

### [featuredCharities.tsx](src/app/components/landing/featuredCharities.tsx)

`No documentation available.`

### [featuredCharityCard.tsx](src/app/components/landing/featuredCharityCard.tsx)

Renders a featured charity card component.

### [homeContentCard.tsx](src/app/components/landing/homeContentCard.tsx)

Renders a home content card component.

### [outlineCard.tsx](src/app/components/landing/outlineCard.tsx)

Renders an outline card component.

### [whatWeDo.tsx](src/app/components/landing/whatWeDo.tsx)

Renders the "What We Do" section of the landing page.

## Folder: src/app/components/register

### [DonationTile.tsx](src/app/components/register/DonationTile.tsx)

Renders a donation tile component.

### [accountType.tsx](src/app/components/register/accountType.tsx)

AccountTypeCard component.

This component renders a form with buttons for selecting the account type (individual, company, charity).
When the form is submitted, it calls the saveUserAccountType function to save the selected account type.

### [addCharityBankData.tsx](src/app/components/register/addCharityBankData.tsx)

Renders a form for adding charity bank details.

### [addCharityDetails.tsx](src/app/components/register/addCharityDetails.tsx)

Renders a component for adding charity details.

This component allows the user to search for charities using a search term and displays the search results in a table. The user can select a charity from the search results and submit the selected charity's ABN (Australian Business Number) using a form.

### [charityListByProgram.tsx](src/app/components/register/charityListByProgram.tsx)

Renders a list of charities by program.

### [charityProgramFilter.tsx](src/app/components/register/charityProgramFilter.tsx)

Renders a filter component for charity programs.

### [charitySearch.tsx](src/app/components/register/charitySearch.tsx)

`No documentation available.`

### [charityTile.tsx](src/app/components/register/charityTile.tsx)

Renders a CharityButton component.

### [customDonationAmount.tsx](src/app/components/register/customDonationAmount.tsx)

Renders a form for the user to enter their donation amount.

### [saveStripePaymentMethod.tsx](src/app/components/register/saveStripePaymentMethod.tsx)

`No documentation available.`

### [selectCharityForDonation.tsx](src/app/components/register/selectCharityForDonation.tsx)

Renders a button to select a charity for donation and displays a modal for entering the donation amount.

### [signUp.tsx](src/app/components/register/signUp.tsx)

Renders the sign-up page.

### [updateBudget.tsx](src/app/components/register/updateBudget.tsx)

Renders the UpdateBudget component.

This component displays a form for updating the budget. It includes a list of popular donation amounts and a custom donation amount input field.

## Folder: src/app/components/ui

### [carousel.tsx](src/app/components/ui/carousel.tsx)

`No documentation available.`

## Folder: src/app/dashboard

### [page.tsx](src/app/dashboard/page.tsx)

Renders the dashboard page based on the user's account type.

## Folder: src/app

### [layout.tsx](src/app/layout.tsx)

Renders the root layout of the application.

### [loading.tsx](src/app/loading.tsx)

`No documentation available.`

### [page.tsx](src/app/page.tsx)

Renders the home page of the application.

## Folder: src/app/register

### [page.tsx](src/app/register/page.tsx)

Renders the registration page based on the current step and user account type.

## Folder: src/app/register/welcome

### [page.tsx](src/app/register/welcome/page.tsx)

Renders the welcome page component.

This component displays a hero image, a welcome message, and a button to redirect to the dashboard.

## Folder: src/app/server-actions/admin

### [getWebsiteStats.ts](src/app/server-actions/admin/getWebsiteStats.ts)

Retrieves website statistics including the number of users, individuals, companies, and charities.

### [redirectForCharitySearch.ts](src/app/server-actions/admin/redirectForCharitySearch.ts)

Redirects to the admin featured charities page with a search term.

### [saveFeaturedCharity.ts](src/app/server-actions/admin/saveFeaturedCharity.ts)

Saves a featured charity by updating its featured status and feature description.

### [searchCharitiesOnAcnc.ts](src/app/server-actions/admin/searchCharitiesOnAcnc.ts)

Searches for charities on the ACNC API based on a search term.

### [setAdminSearchUsersFilters.ts](src/app/server-actions/admin/setAdminSearchUsersFilters.ts)

Sets the search filters for the admin search users functionality.

### [verifyCharity.ts](src/app/server-actions/admin/verifyCharity.ts)

Updates the verification status of a charity.

## Folder: src/app/server-actions/charity

### [getAllCharitiesFromDb.ts](src/app/server-actions/charity/getAllCharitiesFromDb.ts)

Retrieves all charities from the database.

### [getCharitiesByCatagory.ts](src/app/server-actions/charity/getCharitiesByCatagory.ts)

Retrieves a list of charities based on the specified category.

### [getCharityPrograms.ts](src/app/server-actions/charity/getCharityPrograms.ts)

Retrieves charity programs from the ACNC API.

### [getFeaturedCharities.ts](src/app/server-actions/charity/getFeaturedCharities.ts)

Retrieves a list of featured charities.

This function connects to the database using the 'dbConnect' utility function.
It then queries the 'Charity' model to find all charities that are marked as featured.
The returned list of charities includes only the '_id', 'charityName', and 'featureDescription' fields.

### [getOneCharity.ts](src/app/server-actions/charity/getOneCharity.ts)

Retrieves a single charity by its ID.

### [getUnverifiedCharities.ts](src/app/server-actions/charity/getUnverifiedCharities.ts)

Retrieves a list of unverified charities.

This function connects to the database using the dbConnect function and retrieves all charities
that have not been verified. It returns a list of unverified charities.

### [saveCharityBankDetails.ts](src/app/server-actions/charity/saveCharityBankDetails.ts)

Saves the bank details of a charity.

### [searchCharities.ts](src/app/server-actions/charity/searchCharities.ts)

`No documentation available.`

### [updateCharityAbn.ts](src/app/server-actions/charity/updateCharityAbn.ts)

Updates the ABN (Australian Business Number) for a charity.

## Folder: src/app/server-actions/stripe

### [createStripeCheckout.ts](src/app/server-actions/stripe/createStripeCheckout.ts)

Creates a checkout session for a one-time donation to a charity.

### [createUserStripeAccount.ts](src/app/server-actions/stripe/createUserStripeAccount.ts)

Creates a new Stripe customer account for a user.

### [setupUserStripe.ts](src/app/server-actions/stripe/setupUserStripe.ts)

Creates a checkout session for a one-time donation to a charity.

## Folder: src/app/server-actions/user

### [checkIsUserCreated.ts](src/app/server-actions/user/checkIsUserCreated.ts)

`No documentation available.`

### [createSubscriptionInStripe.ts](src/app/server-actions/user/createSubscriptionInStripe.ts)

`No documentation available.`

### [getAccountBudgetData.ts](src/app/server-actions/user/getAccountBudgetData.ts)

Retrieves the account budget data for the user.

This function connects to the database, retrieves the user's account type, and based on the account type, calculates the budget, allocated budget, and remaining budget.

### [getAdvancedSearchContent.ts](src/app/server-actions/user/getAdvancedSearchContent.ts)

`No documentation available.`

### [getAllFilteredUsers.ts](src/app/server-actions/user/getAllFilteredUsers.ts)

Retrieves filtered users based on the provided parameters.

### [getAllTransactions.ts](src/app/server-actions/user/getAllTransactions.ts)

`No documentation available.`

### [getAllUsers.ts](src/app/server-actions/user/getAllUsers.ts)

Retrieves all users from the database.

### [getCharityFilters.ts](src/app/server-actions/user/getCharityFilters.ts)

This code snippet represents an asynchronous function called getCharityFilters.
It makes a GET request to the specified URL and retrieves data from the response.
The function returns a Promise that resolves to an object containing various filters related to charities.
These filters include beneficiaries, countries, charity size, and operating state in Australia.

This code snippet assigns values to variables representing different filters related to charities.
The variables beneficiaries, countries, charitySize, and ausState are assigned the corresponding items from the data object.
These filters are then combined into an object called filters.
The filters object is returned by the code snippet.

### [getSignupStep.ts](src/app/server-actions/user/getSignupStep.ts)

Retrieves the signup step for the current user.

### [getUserAccountType.ts](src/app/server-actions/user/getUserAccountType.ts)

Retrieves the account type of the user.

### [getUserCurrentCharities.ts](src/app/server-actions/user/getUserCurrentCharities.ts)

Retrieves the current charities associated with the user.

### [getUserTransactions.ts](src/app/server-actions/user/getUserTransactions.ts)

Retrieves the transactions associated with the authenticated user.

### [saveCharitySelection.ts](src/app/server-actions/user/saveCharitySelection.ts)

Saves the selected charity and donation amount for the user.

### [saveUserAccountType.ts](src/app/server-actions/user/saveUserAccountType.ts)

Saves the user account type and creates the corresponding individual, company, or charity.

### [setAdvancedSearchFilters.ts](src/app/server-actions/user/setAdvancedSearchFilters.ts)

`No documentation available.`

### [updateDonationAmount.ts](src/app/server-actions/user/updateDonationAmount.ts)

Updates the donation amount for a user based on the provided form data.

### [updateSignupStep.ts](src/app/server-actions/user/updateSignupStep.ts)

Updates the signup step for a user.

This function connects to the database, retrieves the user's ID from the authentication token,
finds the user in the database based on the clerkUserId, increments the signUpStep property by 1,
and saves the updated user object back to the database.

## Folder: src/app/success

### [page.tsx](src/app/success/page.tsx)

Renders the SuccessPage component.

This component displays a success message and a button to redirect the user to the dashboard.

## Folder: src/app/test

### [checkoutForm.tsx](src/app/test/checkoutForm.tsx)

`No documentation available.`

### [page.tsx](src/app/test/page.tsx)

`No documentation available.`

## Folder: src/assets/icons

### [cycleIcon.tsx](src/assets/icons/cycleIcon.tsx)

`No documentation available.`

### [lockIcon.tsx](src/assets/icons/lockIcon.tsx)

`No documentation available.`

### [sheildIcon.tsx](src/assets/icons/sheildIcon.tsx)

`No documentation available.`

### [uploadIcon.tsx](src/assets/icons/uploadIcon.tsx)

`No documentation available.`

## Folder: src/assets

### [successIcon.tsx](src/assets/successIcon.tsx)

`No documentation available.`

## Folder: src/constants

### [popularDonationAmounts.ts](src/constants/popularDonationAmounts.ts)

`No documentation available.`

### [registrationSteps.ts](src/constants/registrationSteps.ts)

`No documentation available.`

## Folder: src

### [middleware.ts](src/middleware.ts)

`No documentation available.`

## Folder: src/models

### [Charity.ts](src/models/Charity.ts)

Creates a new mongoose schema for the charity model.

### [Company.ts](src/models/Company.ts)

Defines the monthly allocation schema for a charity.

Defines a mongoose schema for a company.

### [Individual.ts](src/models/Individual.ts)

Defines the monthly allocation schema for a charity.

### [Transaction.ts](src/models/Transaction.ts)

Creates a new mongoose schema for transactions.

### [User.ts](src/models/User.ts)

Creates a new mongoose schema for the user model.

## Folder: src/types

### [interfaces.ts](src/types/interfaces.ts)

`No documentation available.`

## Folder: src/utils

### [cn.ts](src/utils/cn.ts)

`No documentation available.`

### [createUserInClerk.ts](src/utils/createUserInClerk.ts)

Creates a new user in Clerk.

### [dbConnect.ts](src/utils/dbConnect.ts)

Global is used here to maintain a cached connection across hot reloads
in development. This prevents connections from growing exponentially
during API Route usage.

Connects to the MongoDB database using the provided MONGODB_URI.
If a connection already exists, returns the existing connection.
If a connection does not exist, creates a new connection and returns it.

### [getPagination.ts](src/utils/getPagination.ts)

Returns a Pagination object based on the given page and perPage values.

## Folder: .

### [tailwind.config.ts](tailwind.config.ts)

`No documentation available.`

