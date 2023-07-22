import React from "react";
import { rc1 } from "../../assets";
import { ImLocation } from "react-icons/im";

const HotelBody = () => {
  return (
    <div className="max-w-[1300px] mx-auto border-b-[1px] py-10">
      <div className="flex flex-wrap justify-center gap-5">
        <div className="max-w-[400px] overflow-hidden">
          <img
            src={rc1}
            alt="Hotel Image"
            className="object-cover hover:scale-125 duration-700 delay-75 ease-in-out"
          />
        </div>
        <div className="max-w-[800px] px-4 h-fit my-auto items-center flex flex-col gap-5">
          <div className="flex flex-col gap-4">
            <p className=" w-fit text-xs p-2 rounded-2xl bg-[#FCE9CB] text-[#f1be66] font-bold">
              Hotel and Restaurant
            </p>
            <p className="text-2xl font-bold">Alfredos Hotel and Restaurant</p>
            <p className="text-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem,
              cum dicta repellendus voluptates mollitia laborum ea provident,
              dignissimos ducimus soluta maxime. Illum laudantium in quod. Autem
              impedit iusto quam ex.
            </p>
          </div>
          <div className="w-full flex flex-wrap justify-between">
            <div className="w-fit flex gap-1 items-center">
              <ImLocation className="text-[#f1be66]" />
              <p className="text-sm hover:underline underline-offset-8 cursor-pointer">
                Location
              </p>
            </div>
            <div className="w-fit flex gap-4">
              <p className="w-fit flex items-center px-4 py-2 rounded-xl border-[1px] text-[#f1be66] border-[#f1be66] hover:scale-110 duration-200 ease-in cursor-pointer">
                Visit Page
              </p>
              <p className="w-fit flex items-center px-4 py-2 rounded-xl bg-[#f1be66] text-white hover:scale-110 duration-200 ease-in cursor-pointer">
                Check Prices
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotelBody;
