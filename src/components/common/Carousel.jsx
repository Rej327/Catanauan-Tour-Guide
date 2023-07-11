import React, { useContext } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import ArrowButton from "./ArrowButton";
import CarouselButton from "./CarouselButton";
import { LangContext } from "../../App";

function NextArrow(props) {
  const { onClick } = props;
  return (
    <CarouselButton
      className="hover:bg-[#f1be66] duration-300 active:bg-[#d4a758] absolute z-10 right-0"
      onClick={onClick}
    />
  );
}

function PrevArrow(props) {
  const { onClick } = props;
  return (
    <CarouselButton
      className="rotate-180 hover:bg-[#f1be66] duration-300 active:bg-[#d4a758]"
      onClick={onClick}
    />
  );
}

const Carousel = () => {
  const { language } = useContext(LangContext);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="max-w-[1200px] mx-auto border-2">
      <div>
        <Slider {...settings}>
          {language?.main?.resorts.map((data) => (
            <div
              key={data.id}
              className="py-2 flex flex-col justify-center items-center border-2"
            >
              <img
                src={data.img}
                alt="resorts"
                className="w-[300px] h-[300px]"
              />
              <p>{data.title}</p>
              <p>{data.desc}</p>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Carousel;
