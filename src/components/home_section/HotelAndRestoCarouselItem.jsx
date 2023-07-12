import React from "react";
import RestoCarouselSection from "./RestoCarouselSection";
import HotelCarouselSection from "./HotelCarouselSection";

const HotelAndRestoCarouselItem = () => {
  return (
    <div className="w-full h-screen">
      <div className="w-full flex ">
        <HotelCarouselSection />
        <RestoCarouselSection />
      </div>
    </div>
  );
};

export default HotelAndRestoCarouselItem;
