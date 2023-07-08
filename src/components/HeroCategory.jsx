import React, { useContext } from "react";
import { LangContext } from "../App";

const HeroCategory = () => {
  const { language } = useContext(LangContext);

  return (
    <div className="flex text-center gap-2 w-[1300px] h-[15rem] mt-auto justify-evenly">
      <div className="w-[8rem] h-[8rem] bg-white bg-opacity-40 rounded-full flex items-center justify-center hover:bg-opacity-80 duration-300 delay-75 cursor-pointer mt-auto">
        <p className="font-body text-xs font-bold tracking-widest">
          {language.category?.resorts}
        </p>
      </div>
      <div className="w-[8rem] h-[8rem] bg-white bg-opacity-40 rounded-full flex items-center justify-center hover:bg-opacity-80 duration-300 delay-75 cursor-pointer mt-10">
        <p className="font-body text-xs font-bold tracking-widest">
          {language.category?.hotels}
        </p>
      </div>
      <div className="w-[8rem] h-[8rem] bg-white bg-opacity-40 rounded-full flex items-center justify-center hover:bg-opacity-80 duration-300 delay-75 cursor-pointer">
        <p className="font-body text-xs font-bold tracking-widest">
          {language.category?.restaurants}
        </p>
      </div>
      <div className="w-[8rem] h-[8rem] bg-white bg-opacity-40 rounded-full flex items-center justify-center hover:bg-opacity-80 duration-300 delay-75 cursor-pointer">
        <p className="font-body text-xs font-bold tracking-widest">
          {language.category?.banks}
        </p>
      </div>
      <div className="w-[8rem] h-[8rem] bg-white bg-opacity-40 rounded-full flex items-center justify-center hover:bg-opacity-80 duration-300 delay-75 cursor-pointer mt-10">
        <p className="font-body text-xs font-bold tracking-widest">
          {language.category?.falls}
        </p>
      </div>
      <div className="w-[8rem] h-[8rem] bg-white bg-opacity-40 rounded-full flex items-center justify-center hover:bg-opacity-80 duration-300 delay-75 cursor-pointer mt-auto">
        <p className="font-body text-xs font-bold tracking-wide">
          {language.category?.transportation}
        </p>
      </div>
    </div>
  );
};

export default HeroCategory;
