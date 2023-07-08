import React from "react";
import { logo } from "../assets";
import LangToggle from "./common/LangToggle";
import NavigationToggle from "./common/NavigationToogle";

const Navigation = () => {
  return (
    <div className="absolute p-4 w-full flex top-0 justify-between items-center">
      <img
        src={logo}
        alt="Catanauan Quezon Logo"
        className="w-[6rem] h-[6rem]"
      />
      <div className="flex gap-5">
        <div className="flex gap-1">
          <LangToggle />
          <p className="text-body text-xl bodyColor">en/fil</p>
        </div>
        <NavigationToggle />
      </div>
    </div>
  );
};

export default Navigation;
