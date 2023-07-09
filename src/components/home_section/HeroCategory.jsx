import React, { useContext } from "react";
import { LangContext } from "../../App";

const HeroCategory = () => {
  const { language } = useContext(LangContext);

  return (
    <>
      {/* MAX MOBILE PHONE SIZE */}
      <div className="flex flex-wrap px-2 text-center gap-2 mx-auto h-[15rem] justify-center lg:hidden md:hidden">
        <div className="w-[7rem] h-[3rem] bg-white bg-opacity-40 rounded-md flex items-center justify-center hover:bg-opacity-80 duration-300 delay-75 cursor-pointer">
          <p className="font-body text-[#2f3935] text-xs font-bold tracking-widest">
            {language.category?.resorts}
          </p>
        </div>
        <div className="w-[7rem] h-[3rem] bg-white bg-opacity-40 rounded-md flex items-center justify-center hover:bg-opacity-80 duration-300 delay-75 cursor-pointer">
          <p className="font-body text-[#2f3935] text-xs font-bold tracking-widest">
            {language.category?.hotels}
          </p>
        </div>
        <div className="w-[7rem] h-[3rem] bg-white bg-opacity-40 rounded-md flex items-center justify-center hover:bg-opacity-80 duration-300 delay-75 cursor-pointer">
          <p className="font-body text-[#2f3935] text-xs font-bold tracking-widest">
            {language.category?.restaurants}
          </p>
        </div>
        <div className="w-[7rem] h-[3rem] bg-white bg-opacity-40 rounded-md flex items-center justify-center hover:bg-opacity-80 duration-300 delay-75 cursor-pointer">
          <p className="font-body text-[#2f3935] text-xs font-bold tracking-widest">
            {language.category?.banks}
          </p>
        </div>
        <div className="w-[7rem] h-[3rem] bg-white bg-opacity-40 rounded-md flex items-center justify-center hover:bg-opacity-80 duration-300 delay-75 cursor-pointer">
          <p className="font-body text-[#2f3935] text-xs font-bold tracking-widest">
            {language.category?.falls}
          </p>
        </div>
        <div className="w-[7rem] h-[3rem] bg-white bg-opacity-40 rounded-md flex items-center justify-center hover:bg-opacity-80 duration-300 delay-75 cursor-pointer">
          <p className="font-body text-[#2f3935] text-xs font-bold tracking-widest">
            {language.category?.transportation}
          </p>
        </div>
      </div>

      {/* MAX LAPTOP SCREEN SIZE */}
      <div className="flex text-center gap-2 mx-auto h-[15rem] justify-evenly lg:hidden max-sm:hidden">
        <div className="w-[7rem] h-[7rem] bg-white bg-opacity-40 rounded-full flex items-center justify-center hover:bg-opacity-80 duration-300 delay-75 cursor-pointer mt-auto">
          <p className="font-body text-[#2f3935] text-xs font-bold tracking-widest">
            {language.category?.resorts}
          </p>
        </div>
        <div className="w-[7rem] h-[7rem] bg-white bg-opacity-40 rounded-full flex items-center justify-center hover:bg-opacity-80 duration-300 delay-75 cursor-pointer mt-10">
          <p className="font-body text-[#2f3935] text-xs font-bold tracking-widest">
            {language.category?.hotels}
          </p>
        </div>
        <div className="w-[7rem] h-[7rem] bg-white bg-opacity-40 rounded-full flex items-center justify-center hover:bg-opacity-80 duration-300 delay-75 cursor-pointer">
          <p className="font-body text-[#2f3935] text-xs font-bold tracking-widest">
            {language.category?.restaurants}
          </p>
        </div>
        <div className="w-[7rem] h-[7rem] bg-white bg-opacity-40 rounded-full flex items-center justify-center hover:bg-opacity-80 duration-300 delay-75 cursor-pointer">
          <p className="font-body text-[#2f3935] text-xs font-bold tracking-widest">
            {language.category?.banks}
          </p>
        </div>
        <div className="w-[7rem] h-[7rem] bg-white bg-opacity-40 rounded-full flex items-center justify-center hover:bg-opacity-80 duration-300 delay-75 cursor-pointer mt-10">
          <p className="font-body text-[#2f3935] text-xs font-bold tracking-widest">
            {language.category?.falls}
          </p>
        </div>
        <div className="w-[7rem] h-[7rem] bg-white bg-opacity-40 rounded-full flex items-center justify-center hover:bg-opacity-80 duration-300 delay-75 cursor-pointer mt-auto">
          <p className="font-body text-[#2f3935] text-xs font-bold tracking-wide">
            {language.category?.transportation}
          </p>
        </div>
      </div>

      {/* MIN DESKTOP SCREEN SIZE */}
      <div className="flex text-center gap-2 w-[1320px] h-[15rem] justify-evenly max-lg:hidden">
        <div className="w-[8rem] h-[8rem] bg-white bg-opacity-40 rounded-full flex items-center justify-center hover:bg-opacity-80 duration-300 delay-75 cursor-pointer mt-auto">
          <p className="font-body text-[#2f3935] text-xs font-bold tracking-widest">
            {language.category?.resorts}
          </p>
        </div>
        <div className="w-[8rem] h-[8rem] bg-white bg-opacity-40 rounded-full flex items-center justify-center hover:bg-opacity-80 duration-300 delay-75 cursor-pointer mt-10">
          <p className="font-body text-[#2f3935] text-xs font-bold tracking-widest">
            {language.category?.hotels}
          </p>
        </div>
        <div className="w-[8rem] h-[8rem] bg-white bg-opacity-40 rounded-full flex items-center justify-center hover:bg-opacity-80 duration-300 delay-75 cursor-pointer">
          <p className="font-body text-[#2f3935] text-xs font-bold tracking-widest">
            {language.category?.restaurants}
          </p>
        </div>
        <div className="w-[8rem] h-[8rem] bg-white bg-opacity-40 rounded-full flex items-center justify-center hover:bg-opacity-80 duration-300 delay-75 cursor-pointer">
          <p className="font-body text-[#2f3935] text-xs font-bold tracking-widest">
            {language.category?.banks}
          </p>
        </div>
        <div className="w-[8rem] h-[8rem] bg-white bg-opacity-40 rounded-full flex items-center justify-center hover:bg-opacity-80 duration-300 delay-75 cursor-pointer mt-10">
          <p className="font-body text-[#2f3935] text-xs font-bold tracking-widest">
            {language.category?.falls}
          </p>
        </div>
        <div className="w-[8rem] h-[8rem] bg-white bg-opacity-40 rounded-full flex items-center justify-center hover:bg-opacity-80 duration-300 delay-75 cursor-pointer mt-auto">
          <p className="font-body text-[#2f3935] text-xs font-bold tracking-wide">
            {language.category?.transportation}
          </p>
        </div>
      </div>
    </>
  );
};

export default HeroCategory;
