import React, { useContext } from "react";
import { hc1, laican_rooms_img_3, laican_rooms_img_5 } from "../../../assets";
import { LangContext } from "../../../App";

const AccSection_1 = ({ className }) => {
  const { language } = useContext(LangContext);
  return (
    <div
      className={`w-full flex flex-col items-center gap-10 justify-center ${className}`}
    >
      <img
        src={laican_rooms_img_3}
        alt="Accomodation Image"
        className="w-full h-[60vh] object-cover"
      />
      <div className="max-w-[1000px] px-4 text-center flex flex-col gap-5">
        <p className="text-2xl font-bold">
          {language.plan_page?.accomodation?.header}
        </p>
        <p className="text-lg">
          {language.plan_page?.accomodation?.head_content}
        </p>
      </div>
    </div>
  );
};

export default AccSection_1;
