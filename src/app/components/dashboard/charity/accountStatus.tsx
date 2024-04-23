/**
 * Renders the AccountStatus component.
 *
 * This component displays the account status information.
 *
 * @returns {JSX.Element} The rendered AccountStatus component.
 */
const AccountStatus = () => {
  return (
    <div className="m-3 flex h-[160px] w-[200px] flex-wrap justify-center rounded-lg p-5 shadow-lg">
      <h1 className="w-full text-center">Account Status</h1>
      <p className="text-2xl">Pending</p>
    </div>
  );
};

export default AccountStatus;
