import React from "react";
import Slider from "react-slick";
import SlideArrow from "../common/SlideArrow";
import HotelCarouselSection from "./HotelCarouselSection";
import RestoCarouselSection from "./RestoCarouselSection";

const HotelAndRestoMobile = ({ className, id }) => {
  const settings = {
    infinite: true,
    speed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    pauseOnHover: true,
  };

  return (
    <Slider className={`overflow-hidden ${className}`} {...settings}>
      <div
        id={id}
        className="bg-[url(./assets/HotelAndResto/hotelandresto.jpg)] w-auto bg-cover bg-center h-screen"
      >
        <div className="relative bg-black bg-opacity-60 w-full h-screen flex items-center flex-col justify-center">
          <p className="font-title max-w-[700px] px-2 text-center text-[#ececec] text-xl md:text-3xl text-4xl tracking-wide">
            Looking for a place to stay or eat during your next trip?
          </p>
          <div className="absolute bottom-[5rem] flex max-w-[300px] opacity-50 items-center justify-center gap-10">
            <SlideArrow />
            <p className="text-[#ececec] text-sm tracking-wider ">
              SLIDE TO VIEW
            </p>
            <SlideArrow className="-mt-[.4rem] -rotate-90" />
          </div>
        </div>
      </div>
      <div>
        <HotelCarouselSection className="w-full" />
      </div>
      <div>
        <RestoCarouselSection className="w-full" />
      </div>
    </Slider>
  );
};

export default HotelAndRestoMobile;
