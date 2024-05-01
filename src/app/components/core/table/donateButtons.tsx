import SelectCharityForDonation from "../../register/selectCharityForDonation";
import OneTimeDonationButton from "../oneTimeDonationButton";

interface IColumnProps {
    params: string;
    charityId: string;
    remainingBudget: number; 
    charityName: string;
  }

const ButtonPair : React.FC<IColumnProps> = ({ params, charityId, remainingBudget, charityName }) => {
      if (params === "monthly") {
        return (
            <div className="block">
              <OneTimeDonationButton charityName={charityName} charityId={charityId}/>
              <SelectCharityForDonation charityId={charityId} remainingBudget={remainingBudget}/>
            </div>
          );
      }
      else {
        return (
          <OneTimeDonationButton charityName={charityName} charityId={charityId} />
        );
      }
  };

export default ButtonPair;