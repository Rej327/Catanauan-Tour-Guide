import React from "react";
import { hc1 } from "../../../assets";

const AccSection_1 = ({ className }) => {
  return (
    <div
      className={`w-full flex flex-col items-center gap-10 justify-center ${className}`}
    >
      <img
        src={hc1}
        alt="Accomodation Image"
        className="w-full h-[60vh] object-cover"
      />
      <div className="max-w-[1000px] px-4 text-center flex flex-col gap-5">
        <p className="text-2xl font-bold">
          Discover the Perfect Accommodation Experience
        </p>
        <p className="text-lg">
          Welcome to our comprehensive overview of town hotels, where we
          highlight the best accommodations available in vibrant towns around
          the world. Whether you're a seasoned traveler, a business
          professional, or a curious explorer, our guide will help you find the
          perfect hotel for your stay.
        </p>
      </div>
    </div>
  );
};

export default AccSection_1;
