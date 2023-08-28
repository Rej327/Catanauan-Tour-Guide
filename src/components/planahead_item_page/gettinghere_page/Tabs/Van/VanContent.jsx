import React, { useContext } from "react";
import { bybus } from "../../../../../assets";
import { LangContext } from "../../../../../App";
import VanOtherContent from "./VanOtherContent";

const VanContent = () => {
  const { language } = useContext(LangContext);

  return (
    <div className="w-full flex flex-wrap md:flex-nowrap gap-2 justify-center lg:justify-between ">
      <div className="max-w-[850px] flex flex-col gap-5 my-5">
        <p className="text-2xl font-bold">
          {language?.plan_page?.getting_here?.by_van?.head}
        </p>
        {language?.plan_page?.getting_here?.by_van?.context?.map((data) => (
          <div>
            {data.title && (
              <div>
                <p className="text-lg font-bold">{data.title}</p>
                <p className="text-lg">{data.content}</p>
              </div>
            )}
          </div>
        ))}
      </div>
      <div className="w-[400px]">
        <VanOtherContent />
      </div>
    </div>
  );
};

export default VanContent;
