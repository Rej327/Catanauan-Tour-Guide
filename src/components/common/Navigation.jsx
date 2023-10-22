import React from "react";
import { logo } from "../../assets";
import LangToggle from "./LangToggle";
import NavigationToogle from "./NavigationToogle";

const Navigation = () => {
  return (
    <div className="relative mx-auto max-w-[1300px]">
      <div className="absolute p-4 w-full flex top-0 justify-between items-center">
        <img
          src={logo}
          alt="Catanauan Quezon Logo"
          className="w-24 h-24 md:w-32 md:h-32"
        />
        <div className="flex gap-5">
          <div className="flex gap-1">
            <LangToggle />
            <p className="text-body text-xl text-[#FFFBF3]">en/fil</p>
          </div>
          <NavigationToogle iconColor="border-[#FFFBF3]" />
        </div>
      </div>
    </div>
  );
};

export default Navigation;
