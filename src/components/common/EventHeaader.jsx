import React from "react";
import { Link, useNavigate } from "react-router-dom";

const EventHeader = ({
  className,
  selectedPage,
  textStyle,
  imgCover,
  category,
}) => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };
  return (
    <div
      className={`max-w-[1300px] px-4 mx-auto flex flex-col justify-center ${className}`}
    >
      <div className="flex gap-2 my-10 text-sm">
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
          {category}
        </p>
        <p> | </p>
        <p className={`font-bold underline underline-offset-8 ${textStyle}`}>
          {selectedPage}
        </p>
      </div>
      <div className="mb-10 flex flex-wrap gap-4 lg:gap-[9rem]">
        <p
          className={`font-bold text-3xl md:text-5xl max-w-[500px] ${textStyle}`}
        >
          {selectedPage}
        </p>
        <div className="max-w-[600px] mx-auto lg:mx-0">
          <img src={imgCover} className="w-full object-cover borderShadow" />
        </div>
      </div>
    </div>
  );
};

export default EventHeader;
