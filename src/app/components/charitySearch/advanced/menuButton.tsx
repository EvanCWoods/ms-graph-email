import MenuIcon from "~/assets/icons/menuIcon";
import ButtonPair from "../../core/table/donateButtons";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "../../ui/dropdown-menu";

interface IMenuButton {
  params: string;
  charityId: string;
  remainingBudget: number;
  charityName: string;
}

const MenuButton: React.FC<IMenuButton> = ({
  params,
  charityId,
  remainingBudget,
  charityName,
}) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="h-[25px] w-[25px]">
          <MenuIcon />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="px-5 py-2">
        <ButtonPair
          params={params}
          remainingBudget={remainingBudget}
          charityId={charityId}
          charityName={charityName}
        />
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default MenuButton;
