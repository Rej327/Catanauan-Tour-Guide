import React, { useContext } from "react";
import OtherContent from "./OtherContent";
import { festival_3 } from "../../../../../assets";
import { LangContext } from "../../../../../App";

const FestivalContent = () => {
  const { language } = useContext(LangContext);
  return (
    <div className="w-full flex flex-wrap md:flex-nowrap gap-2 justify-center lg:justify-between ">
      <div className="max-w-[850px] flex flex-col gap-4 my-5">
        <p className="font-bold text-2xl">
          {language?.plan_page?.cultures?.festival?.title}
        </p>
        <p className="text-lg">
          {language?.plan_page?.cultures?.festival?.content_0}
        </p>
        <p className="text-lg">
          {language?.plan_page?.cultures?.festival?.content_1}
        </p>
        <p className="text-lg">
          {language?.plan_page?.cultures?.festival?.content_2}
        </p>
        <img
          src={festival_3}
          alt="Catanauan Image"
          className="w-full h-[18rem] object-cover"
        />
      </div>
      <div className="w-[400px]">
        <OtherContent />
      </div>
    </div>
  );
};

export default FestivalContent;
