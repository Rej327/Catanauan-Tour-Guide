import React, { useContext } from "react";
import { LangContext } from "../../App";
import Carousel from "../common/Carousel";
import Button from "../common/Button";

const Banks = ({ className }) => {
  const { language } = useContext(LangContext);
  return (
    <div className={`w-full ${className}`}>
      <div className="w-full flex">
        <div className="w-full lg:w-[60%] max-sm:h-[350px] h-[300px] bg-[#FCE9CB] flex flex-col justify-center">
          {/* MOBILE & TABLET */}
          <div className="lg:hidden flex flex-col my-12 px-2 md:px-10">
            <div className="w-fit">
              <div className="w-fit">
                <p className="font-header hashColor text-4xl"># Banks</p>
              </div>
              <p className="text-4xl font-bold tracking-wide my-5">
                Banking that's convinient and easy
              </p>
              <p className="text-xl">
                Your one-stop shop for banking need, even when you're on
                vacation.
              </p>
              <p className="text-[#d4a148] mt-5">— See all bank</p>
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
              Banking that's convinient and easy
            </p>
            <p className="text-xl">
              Your one-stop shop for banking need, even when you're on vacation.
            </p>
            <p className="text-[#d4a148] mt-5">— See all bank</p>
          </div>
          <div className="w-fit ml-auto pr-24">
            <p className="font-header hashColor text-4xl"># Banks</p>
          </div>
        </div>
        <div className="mx-auto max-w-[450px] lg:max-w-[1300px] -mt-5 lg:mt-0">
          <div className="mx-auto">
            <Carousel>
              {language?.main?.resorts.map((data) => (
                <div key={data.id} className="px-5">
                  <img src={data.img} alt="resorts" className="w-auto" />
                  <p>{data.title}</p>
                  <p>{data.desc}</p>
                </div>
              ))}
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banks;
