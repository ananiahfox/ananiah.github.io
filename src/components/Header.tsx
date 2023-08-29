import Night from "../assets/icon/night.svg";
import { Logo } from "@Components/Logo";

export const Header = () => {
  return (
    <div class="w-full border-b-2 border-dotted">
      <div class="container mx-auto h-10 flex justify-between items-center">
        <Logo />
        <div class="w-5 h-5 flex cursor-pointer">
          <img src={Night} />
        </div>
      </div>
    </div>
  );
};
