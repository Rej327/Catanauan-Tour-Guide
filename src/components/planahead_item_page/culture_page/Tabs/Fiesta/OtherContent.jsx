import React, { useContext } from "react";
import { LangContext } from "../../../../../App";

const OtherContent = () => {
  const { language } = useContext(LangContext);
  return (
    <div className="w-full md:w-[300px] lg:w-[400px] bg-[#FCE9CB] flex flex-col gap-4 p-6 mx-auto">
      <p className="font-bold">Immaculate Conception Church Town Fiesta</p>
      {language?.plan_page?.cultures?.fiesta?.fiesta_img?.map((data) => (
        <div className="w-full">
          <img
            src={data.img}
            alt="Fiesta Image"
            className="h-[300px] w-full object-cover"
          />
        </div>
      ))}
    </div>
  );
};

export default OtherContent;
