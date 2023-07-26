import React from "react";
import {
  history_0,
  history_1,
  history_2,
  history_4,
} from "../../../../../assets";

const OtherContent = () => {
  return (
    <div className="w-full md:w-[300px] lg:w-[400px] bg-[#FCE9CB] flex flex-col gap-4 p-6 mx-auto">
      <p className="font-bold text-lg">Where History Comes Alive!</p>
      <p className="text-lg">Something In 18th Century</p>
      <img src={history_4} alt="History Image" />
      <p className="text-lg">Catanauan Quezon Now!</p>
      <img src={history_0} alt="History Image" />
      <img src={history_1} alt="History Image" />
      <img src={history_2} alt="History Image" />
    </div>
  );
};

export default OtherContent;
