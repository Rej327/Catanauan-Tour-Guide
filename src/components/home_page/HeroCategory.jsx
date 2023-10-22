import React, { useContext, useRef, useState } from "react";
import { LangContext } from "../../App";
import { Tooltip } from "@chakra-ui/react";
import ToolTipImg from "./ToolTipImg";
import {
  falls_tip,
  hotels_tip,
  resorts_tip,
  resto_tip,
  transpo_tip,
} from "../../assets";

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
      <div className="flex flex-wrap px-2 text-center gap-2 mx-auto h-[15rem] justify-center lg:hidden">
        <Tooltip
          hasArrow={true}
          label={<ToolTipImg tipImg={resorts_tip} />}
          padding="0"
          rounded="xl"
          bgColor="none"
          marginY={2}
          openDelay={200}
          closeDelay={200}
        >
          <div
            onClick={() => handleScrollClick("resorts")}
            className="emboss rounded-none h-14"
          >
            <p className="font-body uppercase text-black text-base font-bold tracking-widest">
              {language.category?.resorts}
            </p>
          </div>
        </Tooltip>

        <Tooltip
          hasArrow={true}
          label={<ToolTipImg tipImg={hotels_tip} />}
          padding="0"
          rounded="xl"
          bgColor="none"
          marginY={2}
          openDelay={200}
          closeDelay={200}
        >
          <div
            onClick={() => handleScrollClick("hotel")}
            className="emboss rounded-none h-14"
          >
            <p className="font-body uppercase text-black text-base font-bold tracking-widest">
              {language.category?.hotels}
            </p>
          </div>
        </Tooltip>

        <Tooltip
          hasArrow={true}
          label={<ToolTipImg tipImg={resto_tip} />}
          padding="0"
          rounded="xl"
          bgColor="none"
          marginY={2}
          openDelay={200}
          closeDelay={200}
        >
          <div
            onClick={() => handleScrollClick("resto")}
            className="emboss rounded-none h-14"
          >
            <p className="font-body uppercase text-black text-base font-bold tracking-widest">
              {language.category?.restaurants}
            </p>
          </div>
        </Tooltip>

        <Tooltip
          hasArrow={true}
          label={<ToolTipImg tipImg={falls_tip} />}
          padding="0"
          rounded="xl"
          bgColor="none"
          marginY={2}
          openDelay={200}
          closeDelay={200}
        >
          <div
            onClick={() => handleScrollClick("falls")}
            className="emboss rounded-none h-14"
          >
            <p className="font-body uppercase text-black text-base font-bold tracking-widest">
              {language.category?.falls}
            </p>
          </div>
        </Tooltip>

        <Tooltip
          hasArrow={true}
          label={<ToolTipImg tipImg={transpo_tip} />}
          padding="0"
          rounded="xl"
          bgColor="none"
          marginY={2}
          openDelay={200}
          closeDelay={200}
        >
          <div
            onClick={() => handleScrollClick("transportation")}
            className="emboss rounded-none h-14"
          >
            <p className="font-body uppercase text-black text-base font-bold tracking-widest">
              {language.category?.transportation}
            </p>
          </div>
        </Tooltip>
      </div>

      {/* MIN DESKTOP SCREEN SIZE */}
      <div className="flex text-center gap-2 w-[1200px] h-[15rem] justify-evenly max-lg:hidden">
        <Tooltip
          hasArrow={true}
          label={<ToolTipImg tipImg={resorts_tip} />}
          padding="0"
          rounded="xl"
          bgColor="none"
          marginY={2}
          openDelay={200}
          closeDelay={200}
        >
          <div
            onClick={() => handleScrollClick("resorts")}
            className="emboss mt-auto"
          >
            <p className="font-body uppercase text-black text-base font-bold tracking-widest">
              {language.category?.resorts}
            </p>
          </div>
        </Tooltip>

        <Tooltip
          hasArrow={true}
          label={<ToolTipImg tipImg={hotels_tip} />}
          padding="0"
          rounded="xl"
          bgColor="none"
          marginY={2}
          openDelay={200}
          closeDelay={200}
        >
          <div
            onClick={() => handleScrollClick("hotel")}
            className="emboss mt-10"
          >
            <p className="font-body uppercase text-black text-base font-bold tracking-widest">
              {language.category?.hotels}
            </p>
          </div>
        </Tooltip>

        <Tooltip
          hasArrow={true}
          label={<ToolTipImg tipImg={resto_tip} />}
          padding="0"
          rounded="xl"
          bgColor="none"
          marginY={2}
          openDelay={200}
          closeDelay={200}
        >
          <div onClick={() => handleScrollClick("resto")} className="emboss">
            <p className="font-body uppercase text-black text-base font-bold tracking-widest">
              {language.category?.restaurants}
            </p>
          </div>
        </Tooltip>

        <Tooltip
          hasArrow={true}
          label={<ToolTipImg tipImg={falls_tip} />}
          padding="0"
          rounded="xl"
          bgColor="none"
          marginY={2}
          openDelay={200}
          closeDelay={200}
        >
          <div
            onClick={() => handleScrollClick("falls")}
            className="emboss mt-10"
          >
            <p className="font-body uppercase text-black text-base font-bold tracking-widest">
              {language.category?.falls}
            </p>
          </div>
        </Tooltip>

        <Tooltip
          hasArrow={true}
          label={<ToolTipImg tipImg={transpo_tip} />}
          padding="0"
          rounded="xl"
          bgColor="none"
          marginY={2}
          openDelay={200}
          closeDelay={200}
        >
          <div
            onClick={() => handleScrollClick("transportation")}
            className="emboss mt-auto"
          >
            <p className="font-body uppercase text-black text-base font-bold tracking-widest">
              {language.category?.transportation}
            </p>
          </div>
        </Tooltip>
      </div>
    </>
  );
};

export default HeroCategory;
