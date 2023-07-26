import React from "react";
import { festival_0, festival_1, festival_2 } from "../../../../../assets";

const OtherContent = () => {
  return (
    <div className="w-full md:w-[300px] lg:w-[400px] bg-[#FCE9CB] flex flex-col gap-4 p-6 mx-auto">
      <p className="font-bold">Boling - Boling Festival Parade</p>
      <img
        src={festival_0}
        alt="Boling-Boling Festival Image"
        className="h-[300px] object-cover"
      />
      <img
        src={festival_1}
        alt="Boling-Boling Festival Image"
        className="h-[300px] object-cover"
      />
      <img
        src={festival_2}
        alt="Boling-Boling Festival Image"
        className="h-[300px] object-cover"
      />
    </div>
  );
};

export default OtherContent;
