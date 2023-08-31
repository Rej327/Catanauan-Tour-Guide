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
      className="rotate-180 hover:bg-[#f1be66] duration-300 active:bg-[#d4a758] absolute z-10 left-0 bottom-[44.5%]"
      onClick={onClick}
    />
  );
}

const Carousel = ({ className, children }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerPadding: "-9px", // Customize the space around centered slides
    centerMode: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,

    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          centerPadding: "-8px", // Customize the space around centered slides
          centerMode: true,
        },
      },
      {
        breakpoint: 884,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
          centerPadding: "65px", // Customize the space around centered slides
          centerMode: true,
        },
      },
      {
        breakpoint: 424,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
          centerPadding: "25px", // Customize the space around centered slides
          centerMode: true,
        },
      },
      {
        breakpoint: 413,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerPadding: "40px", // Customize the space around centered slides
          centerMode: true,
        },
      },
    ],
  };

  return (
    <div className={`max-w-[1200px] mx-auto ${className}`}>
      <div>
        <Slider {...settings}>{children}</Slider>
      </div>
    </div>
  );
};

export default Carousel;
