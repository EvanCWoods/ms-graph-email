import SelectCharityForDonation from "../../register/selectCharityForDonation";
import OneTimeDonationButton from "../oneTimeDonationButton";

interface IColumnProps {
    params: string;
    charityId: string;
    remainingBudget: number; 
  }

const ButtonPair : React.FC<IColumnProps> = ({ params, charityId, remainingBudget }) => {
      if (params === "monthly") {
        return (
            <div className="flex">
              <OneTimeDonationButton charityName="test" charityId={charityId}/>
              <SelectCharityForDonation charityId={charityId} remainingBudget={remainingBudget}/>
            </div>
          );
      }
      else {
        return (
          <OneTimeDonationButton charityName="test" charityId="123"/>
        );
      }
  };

export default ButtonPair;