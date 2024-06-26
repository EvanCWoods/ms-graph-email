import MenuIcon from "~/assets/icons/menu";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../../components/ui/dropdown-menu";
import Link from "next/link";
import { UserButton } from "@clerk/nextjs";
import FeedbackButton from "./feedbackButton";

export default function BurgerMenu() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <MenuIcon />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="mx-2 w-32">
        <DropdownMenuGroup>
          <DropdownMenuItem className="flex justify-center">
            <UserButton />
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <Link href={"/charity-search"}>Charity Search</Link>
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <Link href={"/dashboard"}>Dashboard</Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link href={"/about"}>About Us</Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <FeedbackButton />
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
