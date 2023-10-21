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
          className="emboss rounded-none h-10"
        >
          <p className="font-body uppercase text-black text-base font-bold tracking-widest">
            {language.category?.resorts}
          </p>
        </div>
        <div
          onClick={() => handleScrollClick("hotel")}
          className="emboss rounded-none h-10"
        >
          <p className="font-body uppercase text-black text-base font-bold tracking-widest">
            {language.category?.hotels}
          </p>
        </div>
        <div
          onClick={() => handleScrollClick("resto")}
          className="emboss rounded-none h-10"
        >
          <p className="font-body uppercase text-black text-base font-bold tracking-widest">
            {language.category?.restaurants}
          </p>
        </div>
        <div
          onClick={() => handleScrollClick("falls")}
          className="emboss rounded-none h-10"
        >
          <p className="font-body uppercase text-black text-base font-bold tracking-widest">
            {language.category?.falls}
          </p>
        </div>
        <div
          onClick={() => handleScrollClick("transportation")}
          className="emboss rounded-none h-10"
        >
          <p className="font-body uppercase text-black text-base font-bold tracking-widest">
            {language.category?.transportation}
          </p>
        </div>
      </div>

      {/* MIN DESKTOP SCREEN SIZE */}
      <div className="flex text-center gap-2 w-[1200px] h-[15rem] justify-evenly max-lg:hidden">
        <div
          onClick={() => handleScrollClick("resorts")}
          className="emboss mt-auto"
        >
          <p className="font-body uppercase text-black text-base font-bold tracking-widest">
            {language.category?.resorts}
          </p>
        </div>

        <div
          onClick={() => handleScrollClick("hotel")}
          className="emboss mt-10"
        >
          <p className="font-body uppercase text-black text-base font-bold tracking-widest">
            {language.category?.hotels}
          </p>
        </div>
        <div onClick={() => handleScrollClick("resto")} className="emboss">
          <p className="font-body uppercase text-black text-base font-bold tracking-widest">
            {language.category?.restaurants}
          </p>
        </div>
        <div
          onClick={() => handleScrollClick("falls")}
          className="emboss mt-10"
        >
          <p className="font-body uppercase text-black text-base font-bold tracking-widest">
            {language.category?.falls}
          </p>
        </div>
        <div
          onClick={() => handleScrollClick("transportation")}
          className="emboss mt-auto"
        >
          <p className="font-body uppercase text-black text-base font-bold tracking-widest">
            {language.category?.transportation}
          </p>
        </div>
      </div>
    </>
  );
};

export default HeroCategory;
