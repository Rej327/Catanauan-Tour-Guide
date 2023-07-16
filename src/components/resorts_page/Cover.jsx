import React from "react";
import ArrowDown from "../common/ArrowDown";

const Cover = ({ className }) => {
  return (
    <div className={`w-full ${className}`}>
      <div className="bg-[url(./assets/ResortsPage/resortcover.jpg)] bg-fixed bg-cover bg-center h-screen">
        <div className="relative bg-black bg-opacity-60 w-full h-screen flex items-center flex-col justify-center ">
          <p className="text-4xl lg:text-5xl text-white font-title text-center tracking-wider">
            Place to relax and unwind
          </p>
          <ArrowDown className="absolute bottom-0" />
        </div>
      </div>
    </div>
  );
};

export default Cover;
