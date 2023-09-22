import React from "react";
import { Link, useNavigate } from "react-router-dom";

const PlanHeader = ({ className, selectedPage, icon, category }) => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };
  return (
    <div
      className={`max-w-[1300px] px-4 mx-auto flex flex-col justify-center ${className}`}
    >
      <div className="flex gap-2 my-10 text-base">
        <Link to="/">
          <p className="hover:font-bold hover:underline underline-offset-8 cursor-pointer">
            Home
          </p>
        </Link>
        <p> | </p>
        <p
          onClick={handleGoBack}
          className="hover:font-bold hover:underline underline-offset-8 cursor-pointer"
        >
          Plan A Head
        </p>
        <p> | </p>
        <p className="font-bold underline underline-offset-8">{selectedPage}</p>
      </div>
      <div className="flex gap-4 mb-10 items-center">
        <img src={icon} alt="icon" className="w-20" />
        <p className="font-bold text-3xl md:text-4xl">{selectedPage}</p>
      </div>
    </div>
  );
};

export default PlanHeader;
