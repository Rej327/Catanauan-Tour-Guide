import React, { useContext, useRef, useState } from "react";
import { LangContext } from "../../App";

const HeroCategory = () => {
  const { language } = useContext(LangContext);

  const sectionRef = useRef(null);

  const handleScrollClick = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView();
    }
  };

  return (
    <>
      {/* MAX MOBILE PHONE SIZE */}
      <div className="flex flex-wrap px-2 text-center gap-2 mx-auto h-[15rem] justify-center sm:hidden">
        <div
          onClick={() => handleScrollClick("resorts")}
          className="w-[7rem] h-[4rem] bg-white bg-opacity-60 rounded-md flex items-center justify-center hover:bg-opacity-80 duration-300 delay-75 cursor-pointer"
        >
          <p className="font-body uppercase text-black w-[100px] text-base font-bold tracking-widest">
            {language.category?.resorts}
          </p>
        </div>
        <div
          onClick={() => handleScrollClick("hotelandrestomobile")}
          className="w-[7rem] h-[4rem] bg-white bg-opacity-60 rounded-md flex items-center justify-center hover:bg-opacity-80 duration-300 delay-75 cursor-pointer"
        >
          <p className="font-body uppercase text-black w-[100px] text-base font-bold tracking-widest">
            {language.category?.hotels}
          </p>
        </div>
        <div
          onClick={() => handleScrollClick("hotelandrestomobile")}
          className="w-[7rem] h-[4rem] bg-white bg-opacity-60 rounded-md flex items-center justify-center hover:bg-opacity-80 duration-300 delay-75 cursor-pointer"
        >
          <p className="font-body uppercase text-black w-[100px] text-base font-bold tracking-widest">
            {language.category?.restaurants}
          </p>
        </div>
        <div
          onClick={() => handleScrollClick("falls")}
          className="w-[7rem] h-[4rem] bg-white bg-opacity-60 rounded-md flex items-center justify-center hover:bg-opacity-80 duration-300 delay-75 cursor-pointer"
        >
          <p className="font-body uppercase text-black w-[100px] text-base font-bold tracking-widest">
            {language.category?.falls}
          </p>
        </div>
        <div
          onClick={() => handleScrollClick("transportation")}
          className="w-[7rem] h-[4rem] bg-white bg-opacity-60 rounded-md flex items-center justify-center hover:bg-opacity-80 duration-300 delay-75 cursor-pointer"
        >
          <p className="font-body uppercase text-black w-[100px] text-base font-bold tracking-widest">
            {language.category?.transportation}
          </p>
        </div>
      </div>
      {/* MAX LAPTOP SCREEN SIZE */}
      <div className="flex text-center gap-2 mx-auto h-[15rem] justify-evenly lg:hidden max-sm:hidden">
        <div
          onClick={() => handleScrollClick("resorts")}
          className="w-[7rem] h-[7rem] bg-white bg-opacity-60 rounded-full flex items-center justify-center hover:bg-opacity-80 duration-300 delay-75 cursor-pointer mt-auto"
        >
          <p className="font-body uppercase text-black w-[100px] text-base font-bold tracking-widest">
            {language.category?.resorts}
          </p>
        </div>
        <div
          onClick={() => handleScrollClick("hotelandresto")}
          className="w-[7rem] h-[7rem] bg-white bg-opacity-60 rounded-full flex items-center justify-center hover:bg-opacity-80 duration-300 delay-75 cursor-pointer mt-[3.8rem]"
        >
          <p className="font-body uppercase text-black w-[100px] text-base font-bold tracking-widest">
            {language.category?.hotels}
          </p>
        </div>
        <div
          onClick={() => handleScrollClick("hotelandresto")}
          className="w-[7rem] h-[7rem] bg-white bg-opacity-60 rounded-full flex items-center justify-center hover:bg-opacity-80 duration-300 delay-75 cursor-pointer"
        >
          <p className="font-body uppercase text-black w-[100px] text-base font-bold tracking-widest">
            {language.category?.restaurants}
          </p>
        </div>
        <div
          onClick={() => handleScrollClick("falls")}
          className="w-[7rem] h-[7rem] bg-white bg-opacity-60 rounded-full flex items-center justify-center hover:bg-opacity-80 duration-300 delay-75 cursor-pointer mt-[3.8rem]"
        >
          <p className="font-body uppercase text-black w-[100px] text-base font-bold tracking-widest">
            {language.category?.falls}
          </p>
        </div>
        <div
          onClick={() => handleScrollClick("transportation")}
          className="w-[7rem] h-[7rem] bg-white bg-opacity-60 rounded-full flex items-center justify-center hover:bg-opacity-80 duration-300 delay-75 cursor-pointer mt-auto"
        >
          <p className="font-body uppercase text-black w-[100px] text-base font-bold tracking-widest">
            {language.category?.transportation}
          </p>
        </div>
      </div>
      {/* MIN DESKTOP SCREEN SIZE */}
      <div className="flex text-center gap-2 w-[1200px] h-[15rem] justify-evenly max-lg:hidden">
        <div
          onClick={() => handleScrollClick("resorts")}
          className="w-[8rem] h-[8rem] bg-white bg-opacity-60 rounded-full flex items-center justify-center hover:bg-opacity-80 duration-300 delay-75 cursor-pointer mt-auto"
        >
          <p className="font-body uppercase text-black w-[100px] text-base font-bold tracking-widest">
            {language.category?.resorts}
          </p>
        </div>

        <div
          onClick={() => handleScrollClick("hotelandresto")}
          className="w-[8rem] h-[8rem] bg-white bg-opacity-60 rounded-full flex items-center justify-center hover:bg-opacity-80 duration-300 delay-75 cursor-pointer mt-10"
        >
          <p className="font-body uppercase text-black w-[100px] text-base font-bold tracking-widest">
            {language.category?.hotels}
          </p>
        </div>
        <div
          onClick={() => handleScrollClick("hotelandresto")}
          className="w-[8rem] h-[8rem] bg-white bg-opacity-60 rounded-full flex items-center justify-center hover:bg-opacity-80 duration-300 delay-75 cursor-pointer"
        >
          <p className="font-body uppercase text-black w-[100px] text-base font-bold tracking-widest">
            {language.category?.restaurants}
          </p>
        </div>
        <div
          onClick={() => handleScrollClick("falls")}
          className="w-[8rem] h-[8rem] bg-white bg-opacity-60 rounded-full flex items-center justify-center hover:bg-opacity-80 duration-300 delay-75 cursor-pointer mt-10"
        >
          <p className="font-body uppercase text-black w-[100px] text-base font-bold tracking-widest">
            {language.category?.falls}
          </p>
        </div>
        <div
          onClick={() => handleScrollClick("transportation")}
          className="w-[8rem] h-[8rem] bg-white bg-opacity-60 rounded-full flex items-center justify-center hover:bg-opacity-80 duration-300 delay-75 cursor-pointer mt-auto"
        >
          <p className="font-body uppercase text-black w-[100px] text-base font-bold tracking-widest">
            {language.category?.transportation}
          </p>
        </div>
      </div>
    </>
  );
};

export default HeroCategory;
