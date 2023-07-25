import React from "react";

const NavigationIcon = ({ iconColor, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="flex flex-col gap-2 hover:scale-75 duration-200 cursor-pointer"
    >
      <div
        className={`w-[40px] h-[1px] border-[#012854] border-[1px] ${iconColor}`}
      ></div>
      <div
        className={`w-[20px] mx-auto h-[1px] border-[#012854] border-[1px] ${iconColor}`}
      ></div>
      <div
        className={`w-[40px] h-[1px] border-[#012854] border-[1px] ${iconColor}`}
      ></div>
    </div>
  );
};

export default NavigationIcon;
