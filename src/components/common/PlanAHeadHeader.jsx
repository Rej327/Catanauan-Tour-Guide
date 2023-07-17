import React from "react";
import { Link } from "react-router-dom";

const PlanAHeadHeader = ({ className, selectedPage, icon }) => {
  return (
    <div
      className={`max-w-[1300px] mx-auto flex flex-col justify-center ${className}`}
    >
      <div className="flex gap-2 my-10 text-sm">
        <Link to="/">
          <p className="hover:font-bold hover:underline underline-offset-8 cursor-pointer">
            Home
          </p>
        </Link>
        <p> | </p>
        <p className="font-bold underline underline-offset-8">{selectedPage}</p>
      </div>
      <div className="flex gap-4 mb-10 items-center">
        <img src={icon} alt="icon" className="w-[5rem]" />
        <p className="font-bold text-3xl md:text-4xl">{selectedPage}</p>
      </div>
    </div>
  );
};

export default PlanAHeadHeader;