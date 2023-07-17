import React from "react";
import { history2 } from "../../../../assets";

const OtherContent = () => {
  return (
    <div className="w-full md:w-[300px] lg:w-[400px] bg-[#FCE9CB] flex flex-col gap-4 p-6 mx-auto">
      <p className="font-bold text-lg">Lorem ipsum dolor sit amet.</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
      <img src={history2} alt="History Image" />
      <p className="font-bold text-lg">Lorem ipsum dolor sit amet.</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
      <img src={history2} alt="History Image" className="" />
    </div>
  );
};

export default OtherContent;
