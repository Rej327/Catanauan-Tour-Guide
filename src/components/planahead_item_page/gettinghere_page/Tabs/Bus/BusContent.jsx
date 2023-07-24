import React from "react";
import { bybus } from "../../../../../assets";
import BusOtherContent from "./BusOtherContent";

const BusContent = () => {
  return (
    <div className="w-full flex flex-wrap md:flex-nowrap gap-2 justify-center lg:justify-between ">
      <div className="max-w-[850px] flex flex-col gap-4 my-5">
        <p className="font-bold text-2xl">By Bus</p>
        <p className="text-lg">
          The existence of Catanauan as a pueblo (town) was first recorded in
          the map of Father Pedro Murillo dated on 1734. The recognized
          foundation year of the Municipality was 1713 called as NABATASAN. In
          the late 18th and 19th century, there were frequent Moro raids so the
          people decided to construct two small stone forts or watch towers
          (MAGKATANAWAN) mounted with artillery. Hence, the name CATANAUAN was
          so derived.
        </p>
        <img
          src={bybus}
          alt="Catanauan Image"
          className="w-full h-[18rem] object-cover"
        />
      </div>
      <div className="w-[400px]">
        <BusOtherContent />
      </div>
    </div>
  );
};

export default BusContent;
