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
      className="hover:bg-[#f1be66] duration-300 active:bg-[#d4a758] absolute z-10 right-0 top-[40%]"
      onClick={onClick}
    />
  );
}

function PrevArrow(props) {
  const { onClick } = props;
  return (
    <CarouselButton
      className="rotate-180 hover:bg-[#f1be66] duration-300 active:bg-[#d4a758] absolute z-10 left-0 bottom-[51.5%]"
      onClick={onClick}
    />
  );
}

const Carousel = ({ className }) => {
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
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
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
    <div className={`max-w-[1200px] mx-auto ${className}`}>
      <div>
        <Slider {...settings}>
          {language?.main?.resorts.map((data) => (
            <div key={data.id} className="px-5">
              <img src={data.img} alt="resorts" className="w-auto" />
              <div className="w-full bg-white">
                <p>{data.title}</p>
                <p>{data.desc}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Carousel;
