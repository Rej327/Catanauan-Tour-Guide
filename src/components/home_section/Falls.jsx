import React, { useContext } from "react";
import { LangContext } from "../../App";
import Carousel from "../common/Carousel";
import Button from "../common/Button";

const Falls = ({ className }) => {
  const { language } = useContext(LangContext);
  return (
    <div className={`w-full ${className}`}>
      <div className="w-full flex">
        <div className="hidden lg:block w-[40%] h-[300px]"></div>
        <div className="w-full lg:w-[60%] max-sm:h-[350px] h-[300px] bg-[#FCE9CB] flex flex-col justify-center">
          <div className="md:hidden items-center justify-between px-2 ">
            <div className="w-fit lg:ml-[7%]">
              <p className="font-header hashColor text-4xl"># Falls</p>
            </div>
            <div className="w-fit ml-auto">
              <p className="text-4xl font-bold tracking-wide my-5">
                Embrace Nature's Majesty!
              </p>
              <p className="text-xl">
                Discover the enchanting beauty of Falls, where nature's majesty
                unfolds before your eyes.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* ITEM */}
      <div className="relative max-w-[1300px] mx-auto">
        <div className="hidden md:block lg:flex items-center justify-between -mt-56 mb-12 px-2 md:pl-10">
          <div className="w-fit lg:ml-[7%]">
            <p className="font-header hashColor text-4xl md:pr-10"># Falls</p>
          </div>
          <div className="w-fit ml-auto">
            <p className="text-4xl font-bold tracking-wide my-5">
              Embrace Nature's Majesty!
            </p>
            <p className="text-xl">
              Discover the enchanting beauty of Falls, where nature's majesty
              unfolds before your eyes.
            </p>
          </div>
        </div>
        <div className="flex flex-wrap justify-center bg-[#FCE9CB gap-5 mx-auto -mt-5">
          {language?.main?.resorts.slice(0, 3).map((data) => (
            <div
              key={data.id}
              className="px-5 max-w-[400px] md:max-w-[300px] lg:max-w-[400px] mx-auto"
            >
              <img src={data.img} alt="resorts" className="w-auto" />
            </div>
          ))}
        </div>
        <div className="w-fit mx-auto ">
          <Button
            className="my-10 mx-auto text-black px-4 pt-2 text-lg bg-[#FCE9CB]"
            label="MORE"
          />
        </div>
      </div>
    </div>
  );
};

export default Falls;
