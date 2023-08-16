import React, { useContext } from "react";
import OtherContent from "./OtherContent";
import { LangContext } from "../../../../../App";

const FiestaContent = () => {
  const { language } = useContext(LangContext);
  return (
    <div className="w-full flex flex-wrap md:flex-nowrap gap-2 justify-center lg:justify-between ">
      <div className="max-w-[850px] flex flex-col gap-4 my-5">
        <p className="font-bold text-2xl">
          {language?.plan_page?.cultures?.fiesta?.title}
        </p>
        <p className="text-lg">
          {language?.plan_page?.cultures?.fiesta?.content_0}
        </p>
        <p className="text-lg">
          {language?.plan_page?.cultures?.fiesta?.content_1}
        </p>
        <p className="text-lg">
          {language?.plan_page?.cultures?.fiesta?.content_2}
        </p>
      </div>
      <div className="w-[400px]">
        <OtherContent />
      </div>
    </div>
  );
};

export default FiestaContent;
