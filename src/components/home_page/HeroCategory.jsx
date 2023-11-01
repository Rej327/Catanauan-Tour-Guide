import React, { useContext, useRef, useState } from "react";
import { LangContext } from "../../App";
import { Tooltip } from "@chakra-ui/react";
import ToolTipImg from "./ToolTipImg";
import {
  amandos_place_img_14,
  antonios_place_img_2,
  apple_place_img_4,
  busay,
  busstop_2,
  butag,
  capatoda,
  casa_place_img_11,
  eyns_rooms_img_4,
  falls_tip,
  hotels_tip,
  laican_rooms_img_5,
  lopezcat,
  matalahan,
  presko_place_img_5,
  raki_room_img_6,
  vv_place_img_5,
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
        <div
          onClick={() => handleScrollClick("resorts")}
          className="emboss rounded-none h-14"
        >
          <p className="font-body uppercase text-black text-base font-bold tracking-widest">
            {language.category?.resorts}
          </p>
        </div>
        <div
          onClick={() => handleScrollClick("hotel")}
          className="emboss rounded-none h-14"
        >
          <p className="font-body uppercase text-black text-base font-bold tracking-widest">
            {language.category?.hotels}
          </p>
        </div>
        <div
          onClick={() => handleScrollClick("resto")}
          className="emboss rounded-none h-14"
        >
          <p className="font-body uppercase text-black text-base font-bold tracking-widest">
            {language.category?.restaurants}
          </p>
        </div>
        <div
          onClick={() => handleScrollClick("falls")}
          className="emboss rounded-none h-14"
        >
          <p className="font-body uppercase text-black text-base font-bold tracking-widest">
            {language.category?.falls}
          </p>
        </div>
        <div
          onClick={() => handleScrollClick("transportation")}
          className="emboss rounded-none h-14"
        >
          <p className="font-body uppercase text-black text-base font-bold tracking-widest">
            {language.category?.transportation}
          </p>
        </div>
      </div>

      {/* MIN DESKTOP SCREEN SIZE */}
      <div className="flex text-center gap-2 w-[1200px] h-[15rem] justify-evenly max-lg:hidden">
        <Tooltip
          hasArrow={true}
          label={
            <ToolTipImg
              tipImg_0={amandos_place_img_14}
              tipImg_1={casa_place_img_11}
              tipImg_2={apple_place_img_4}
            />
          }
          padding="0"
          rounded="xl"
          bgColor="none"
          openDelay={200}
          closeDelay={200}
          placement="top-start"
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
          label={
            <ToolTipImg
              tipImg_0={laican_rooms_img_5}
              tipImg_1={eyns_rooms_img_4}
              tipImg_2={raki_room_img_6}
            />
          }
          padding="0"
          rounded="xl"
          bgColor="none"
          openDelay={200}
          closeDelay={200}
          placement="top-start"
          width={500}
          right={160}
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
          label={
            <ToolTipImg
              tipImg_0={antonios_place_img_2}
              tipImg_1={vv_place_img_5}
              tipImg_2={presko_place_img_5}
            />
          }
          padding="0"
          rounded="xl"
          bgColor="none"
          openDelay={200}
          closeDelay={200}
          placement="top-start"
          width={500}
          right={160}
        >
          <div onClick={() => handleScrollClick("resto")} className="emboss">
            <p className="font-body uppercase text-black text-base font-bold tracking-widest">
              {language.category?.restaurants}
            </p>
          </div>
        </Tooltip>

        <Tooltip
          hasArrow={true}
          label={
            <ToolTipImg
              tipImg_0={butag}
              tipImg_1={matalahan}
              tipImg_2={busay}
            />
          }
          padding="0"
          rounded="xl"
          bgColor="none"
          openDelay={200}
          closeDelay={200}
          placement="top-start"
          width={500}
          right={155}
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
          label={
            <ToolTipImg
              tipImg_0={capatoda}
              tipImg_1={lopezcat}
              tipImg_2={busstop_2}
            />
          }
          padding="0"
          rounded="xl"
          bgColor="none"
          openDelay={200}
          closeDelay={200}
          placement="auto-start"
          width={500}
          bottom={130}
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
