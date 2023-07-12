import React from "react";
import { hc1, hc2, rc1, rc2 } from "../../assets";
import Button from "../common/Button";

const HotelAndRestoCarouselItem = () => {
  return (
    <div className="w-full h-screen">
      <div className="w-full flex">
        <div className="h-screen w-[50%]">
          <img src={hc1} alt="Image" className="w-full h-[40%] object-cover" />
          <div className="h-[60%] flex">
            <div className="w-[50%] px-4 flex flex-col gap-5 my-auto justify-center">
              <p className="text-4xl font-bold">Hotels</p>
              <p className="text-2xl">
                Wether you're looking for a place to relax and unwind or a place
                to host a business meeting, we have the perfect hotel for you.
              </p>
              <Button className="text-black text-xl px-6 py-2" label="View" />
            </div>
            <div className="h-[100%] w-[50%]">
              <img
                src={hc2}
                alt="Image"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* NEXT ITEM */}

        <div className="h-screen flex flex-col-reverse w-[50%]">
          <img src={rc1} alt="Image" className="w-full h-[40%] object-cover" />
          <div className="h-[60%] flex">
            <div className="w-[50%] text-right px-4 flex flex-col gap-5 my-auto justify-center">
              <p className="text-4xl font-bold">Restaurants</p>
              <p className="text-2xl">
                Wether you're in the mood for fine dining or casual fare, we
                have a restaurant that will satisfy your cravings.
              </p>
              <Button className="text-black text-xl px-6 py-2" label="View" />
            </div>
            <div className="h-[100%] w-[50%]">
              <img
                src={rc2}
                alt="Image"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotelAndRestoCarouselItem;
