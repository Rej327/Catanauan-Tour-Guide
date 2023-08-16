import React, { useContext } from "react";
import { festival_0, festival_1, festival_2 } from "../../../../../assets";
import { LangContext } from "../../../../../App";

const OtherContent = () => {
  const { language } = useContext(LangContext);
  console.log(language?.cultures);
  return (
    <div className="w-full md:w-[300px] lg:w-[400px] bg-[#FCE9CB] flex flex-col gap-4 p-6 mx-auto">
      <p className="font-bold">Boling - Boling Festival Parade</p>
      {language?.plan_page?.cultures?.festival?.festival_img
        ?.slice(0, 3)
        .map((data) => (
          <div className="w-full">
            <img
              src={data.img}
              alt="Boling-Boling Festival Image"
              className="h-[300px] w-full object-cover"
            />
          </div>
        ))}
    </div>
  );
};

export default OtherContent;
