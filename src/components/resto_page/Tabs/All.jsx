import React from "react";
import { rc1 } from "../../../assets";

const All = () => {
  return (
    <div className="max-w-[1300px] my-10 mx-auto flex flex-wrap justify-center items-center gap-10">
      {/* FIRST ITEM */}
      <div className="relative restoItems w-fit h-fit">
        <div className="absolute z-10 bottom-0 bg-black bg-opacity-50 flex flex-col justify-center items-center w-full h-[75px]">
          <p className="text-lg text-[#fefeff]">Alfredos Restaurant</p>
          <p className="text-[#f9dba9] text-base hover:underline underline-offset-8 hover:cursor-pointer">
            View here
          </p>
        </div>
        <div className="max-w-[350px] h-[350px] overflow-hidden">
          <img
            src={rc1}
            alt="Restaurant Image"
            className="w-full h-full object-cover itemImg"
          />
        </div>
      </div>
      {/* NEXT ITEM */}
      <div className="relative restoItems w-fit h-fit">
        <div className="absolute z-10 bottom-0 bg-black bg-opacity-50 flex flex-col justify-center items-center w-full h-[75px]">
          <p className="text-lg text-[#fefeff]">Alfredos Restaurant</p>
          <p className="text-[#f9dba9] text-base hover:underline underline-offset-8 hover:cursor-pointer">
            View here
          </p>
        </div>
        <div className="max-w-[350px] h-[350px] overflow-hidden">
          <img
            src={rc1}
            alt="Restaurant Image"
            className="w-full h-full object-cover itemImg"
          />
        </div>
      </div>
      {/* NEXT ITEM */}
      <div className="relative restoItems w-fit h-fit">
        <div className="absolute z-10 bottom-0 bg-black bg-opacity-50 flex flex-col justify-center items-center w-full h-[75px]">
          <p className="text-lg text-[#fefeff]">Alfredos Restaurant</p>
          <p className="text-[#f9dba9] text-base hover:underline underline-offset-8 hover:cursor-pointer">
            View here
          </p>
        </div>
        <div className="max-w-[350px] h-[350px] overflow-hidden">
          <img
            src={rc1}
            alt="Restaurant Image"
            className="w-full h-full object-cover itemImg"
          />
        </div>
      </div>
      {/* NEXT ITEM */}
      <div className="relative restoItems w-fit h-fit">
        <div className="absolute z-10 bottom-0 bg-black bg-opacity-50 flex flex-col justify-center items-center w-full h-[75px]">
          <p className="text-lg text-[#fefeff]">Alfredos Restaurant</p>
          <p className="text-[#f9dba9] text-base hover:underline underline-offset-8 hover:cursor-pointer">
            View here
          </p>
        </div>
        <div className="max-w-[350px] h-[350px] overflow-hidden">
          <img
            src={rc1}
            alt="Restaurant Image"
            className="w-full h-full object-cover itemImg"
          />
        </div>
      </div>
      {/* NEXT ITEM */}
      <div className="relative restoItems w-fit h-fit">
        <div className="absolute z-10 bottom-0 bg-black bg-opacity-50 flex flex-col justify-center items-center w-full h-[75px]">
          <p className="text-lg text-[#fefeff]">Alfredos Restaurant</p>
          <p className="text-[#f9dba9] text-base hover:underline underline-offset-8 hover:cursor-pointer">
            View here
          </p>
        </div>
        <div className="max-w-[350px] h-[350px] overflow-hidden">
          <img
            src={rc1}
            alt="Restaurant Image"
            className="w-full h-full object-cover itemImg"
          />
        </div>
      </div>
    </div>
  );
};

export default All;
