import React from "react";
import { hc1, hc2 } from "../../assets";
import Button from "../common/Button";

const HotelCarouselSection = ({ className }) => {
  return (
    <div className={`h-screen w-[50%] ${className} `}>
      <img src={hc1} alt="Image" className="w-full h-[40%] object-cover" />
      <div className="h-[60%] flex">
        <div className="w-full md:w-[50%] px-4 flex flex-col gap-5 my-auto justify-center">
          <p className="text-4xl font-bold">Hotels</p>
          <p className="text-2xl">
            Wether you're looking for a place to relax and unwind or a place to
            host a business meeting, we have the perfect hotel for you.
          </p>
          <Button className="text-black text-xl px-6 py-2" label="View" />
        </div>
        <div className="h-[100%] w-[50%] max-sm:hidden">
          <img src={hc2} alt="Image" className="h-full w-full object-cover" />
        </div>
      </div>
    </div>
  );
};

export default HotelCarouselSection;