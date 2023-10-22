import React from "react";

const ToolTipImg = ({ tipImg }) => {
  return (
    <div className="rounded-xl w-[400px] mx-4 shadow-2xl border-b-2 border-[#F9DBA9]">
      <img
        src={tipImg}
        className="rounded-xl w-[400px] h-[350px] shadow-2xl object-cover"
      />
    </div>
  );
};

export default ToolTipImg;
