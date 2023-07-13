import React, { useContext } from "react";
import { LangContext } from "../../App";
import Carousel from "../common/Carousel";

const Banks = ({ className }) => {
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
        <div className="hidden md:block lg:flex items-center justify-between -mt-56 mb-12 px-2 ">
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
        <div className="mx-auto max-w-[350px] md:max-w-[350px] lg:max-w-[1300px] h-[250px] -mt-5 lg:mt-0">
          <Carousel>
            {language?.main?.resorts.map((data) => (
              <div key={data.id} className="px-5">
                <img src={data.img} alt="resorts" className="w-auto" />
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default Banks;
