import React, { useContext } from "react";
import { LangContext } from "../../../../../App";

const ExcavationContent = () => {
  const { language } = useContext(LangContext);
  return (
    <div className="w-full md:flex-nowrap gap-2 justify-center lg:justify-between ">
      <p className="font-bold text-2xl">
        {language?.plan_page?.cultures?.excavation?.header}
      </p>

      {language?.plan_page?.cultures?.excavation?.body?.map((data) => (
        <div
          key={data.id}
          className="max-w-[1300px] mx-auto flex flex-col gap-4 my-5 border-b-[1px] pb-4"
        >
          <p className="font-bold text-2xl">{data.title}</p>
          <p className="text-lg">{data.content}</p>
        </div>
      ))}
    </div>
  );
};

export default ExcavationContent;
