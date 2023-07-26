import React, { useContext } from "react";
import OtherContent from "./OtherContent";
import { LangContext } from "../../../../../App";
import { history_3, history_4 } from "../../../../../assets";

const HistoryContent = () => {
  const { language } = useContext(LangContext);
  return (
    <div className="w-full flex flex-wrap md:flex-nowrap gap-2 justify-center lg:justify-between ">
      <div className="max-w-[850px] flex flex-col gap-4 my-5">
        <p className="font-bold text-2xl">
          {language?.plan_page?.traveler_guides?.title}
        </p>
        <p className="text-lg">
          {language?.plan_page?.traveler_guides?.content}
        </p>
        <p className="text-lg">
          {language?.plan_page?.traveler_guides?.content_1}
        </p>
        <img
          src={history_3}
          alt="Catanauan Image"
          className="w-full h-auto object-cover"
        />
      </div>
      <div className="w-[400px]">
        <OtherContent />
      </div>
    </div>
  );
};

export default HistoryContent;
