import React, { useContext } from "react";
import { LangContext } from "../../App";
import Carousel from "../common/Carousel";
import Button from "../common/Button";
import { Link } from "react-router-dom";

const Transportations = ({ className, id }) => {
  const { language } = useContext(LangContext);
  return (
    <div id={id} className={`w-full ${className}`}>
      <div className="w-full flex">
        <div className="w-full lg:w-[60%] max-sm:h-[350px] h-[300px] bg-[#FCE9CB] flex flex-col justify-center">
          {/* MOBILE & TABLET */}
          <div className="lg:hidden flex flex-col my-12 px-2 md:px-10">
            <div className="w-fit">
              <div className="w-fit">
                <p className="font-header hashColor text-4xl">
                  {language?.transportation_section?.head}
                </p>
              </div>
              <p className="text-4xl font-bold tracking-wide my-5">
                {language?.transportation_section?.title}
              </p>
              <p className="text-xl">
                {language?.transportation_section?.content}
              </p>
              <Link to="/transportations">
                <p className="text-[#d4a148] mt-5 hover:translate-x-2 hover:font-bold duration-300">
                  {language?.transportation_section?.btn_txt}
                </p>
              </Link>
            </div>
          </div>
        </div>
        <div className="max-sm:hidden hidden lg:block w-[40%] h-[300px]"></div>
      </div>
      {/* ITEM */}
      <div className="relative max-w-[1300px] mx-auto">
        {/* DESKTOP & LAPTOP */}
        <div className="hidden lg:flex items-center -mt-56 mb-12 px-2 lg:px-12 ">
          <div className="w-fit">
            <p className="text-4xl font-bold tracking-wide my-5">
              {language?.transportation_section?.title}
            </p>
            <p className="text-xl">
              {language?.transportation_section?.content}
            </p>
            <Link to="/transportations">
              <p className="text-[#d4a148] mt-5 hover:translate-x-2 hover:font-bold duration-300">
                {language?.transportation_section?.btn_txt}
              </p>
            </Link>
          </div>
          <div className="w-fit ml-auto pr-24">
            <p className="font-header hashColor text-4xl">
              {language?.transportation_section?.head}
            </p>
          </div>
        </div>
        <div className="mx-auto max-w-[450px] lg:max-w-[1300px] -mt-5 lg:mt-0">
          <div className="mx-auto">
            <Carousel>
              {language?.main?.resorts.slice(0, 3).map((data) => (
                <div
                  key={data.id}
                  className="rounded-lg homeItemContainer max-w-[300px] md:max-w-[350px] lg:max-w-[350px] mx-auto"
                >
                  <div className="overflow-hidden rounded-lg">
                    <img
                      src={data.img}
                      alt="resorts"
                      className=" rounded-lg "
                    />
                  </div>
                  <p className="text-lg px-4 py-2">Vehicle Name</p>
                </div>
              ))}
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Transportations;
