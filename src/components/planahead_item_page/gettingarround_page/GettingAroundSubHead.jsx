import React, { useContext } from "react";
import { LangContext } from "../../../App";
import { gettingAroundCover } from "../../../assets";

const GettingAroundSubHead = ({ className }) => {
  const { language } = useContext(LangContext);
  return (
    <div
      className={`w-full flex flex-col items-center gap-10 justify-center ${className}`}
    >
      <img
        src={gettingAroundCover}
        alt="Accomodation Image"
        className="w-full h-[60vh] object-cover"
      />
      <div className="max-w-[1000px] px-4 mb-10 text-center flex flex-col gap-5">
        <p className="text-2xl font-bold">
          {language.plan_page?.getting_around?.header}
        </p>
        <p className="text-lg">
          {language.plan_page?.getting_around?.head_content}
        </p>
      </div>
    </div>
  );
};

export default GettingAroundSubHead;
