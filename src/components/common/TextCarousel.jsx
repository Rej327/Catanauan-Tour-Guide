import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import CarouselButton from "./CarouselButton";

function NextArrow(props) {
  const { onClick } = props;
  return (
    <CarouselButton
      className="hover:bg-[#f1be66] duration-300 active:bg-[#d4a758] absolute z-10 right-0 top-[44%]"
      onClick={onClick}
    />
  );
}

function PrevArrow(props) {
  const { onClick } = props;
  return (
    <CarouselButton
      className="rotate-180 hover:bg-[#f1be66] duration-300 active:bg-[#d4a758] absolute z-10 left-0 bottom-[42.5%]"
      onClick={onClick}
    />
  );
}

const TextCarousel = ({ className, children }) => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1500,
    autoplaySpeed: 5000,
  };

  return (
    <div className={`max-w-[1200px] mx-auto ${className}`}>
      <div>
        <Slider {...settings}>{children}</Slider>
      </div>
    </div>
  );
};

export default TextCarousel;
