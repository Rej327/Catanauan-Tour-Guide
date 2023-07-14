import React, { useContext } from "react";
import Carousel from "../common/Carousel";
import { LangContext } from "../../App";

const Transportation = ({ className, id }) => {
  const { language } = useContext(LangContext);

  return (
    <div id={id} className={`w-full ${className}`}>
      {/* DESKTOP SIZE */}
      <div className="w-full flex">
        <div className="max-sm:hidden w-full h-[400px]"></div>
        <div className="w-full flex flex-col justify-center h-[400px] bg-[#FCE9CB]">
          <div className="max-w-[600px]">
            <div className="md:max-w-[350px] h-full ml-auto px-2 md:px-10">
              <p className="font-header hashColor text-4xl my-10">
                # Transportation
              </p>
              <p className="text-4xl font-bold tracking-wide my-5">
                Your ride to anywhere.
              </p>
              <p className="text-xl">
                Get where you need to go, affordably and easily.
              </p>
              <p className="text-[#d4a148] mt-5">— See all Transportation</p>
            </div>
          </div>
        </div>
      </div>
      <div className="relative max-w-[1300px] mx-auto px-2 md:px-[2rem] lg:px-[3rem] -mt-[23rem]">
        <div className="max-sm:mt-[25rem] mt-10 md:max-w-[300px] lg:max-w-[850px] h-[250px]">
          <Carousel>
            {language?.main?.resorts.map((data) => (
              <div key={data.id} className="px-5">
                <img src={data.img} alt="resorts" className="w-auto" />
                <div className="w-full bg-white">
                  <p>{data.title}</p>
                  <p>{data.desc}</p>
                </div>
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default Transportation;
