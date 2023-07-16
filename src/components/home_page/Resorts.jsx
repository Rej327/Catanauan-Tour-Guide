import React, { useContext } from "react";
import Carousel from "../common/Carousel";
import { LangContext } from "../../App";

const Resorts = ({ className, id }) => {
  const { language } = useContext(LangContext);

  return (
    <div id={id} className={`w-full ${className}`}>
      {/* DESKTOP SIZE */}
      <div className="w-full flex">
        <div className="w-full h-[400px] bg-[#FCE9CB]"></div>
        <div className="max-sm:hidden w-full h-[400px]"></div>
      </div>
      <div className="relative max-w-[1300px] mx-auto px-2 md:px-[2rem] lg:px-[3rem] -mt-[23rem]">
        <div className="md:absolute lg:-mt-[10rem] max-w-[300px]">
          <p className="font-header hashColor text-4xl mt-10"># Beaches</p>
          <p className="text-4xl font-bold tracking-wide my-5">
            Unmissable <br />
            Experience
          </p>
          <p className="text-xl">
            See our endless beach and resorts, perfect for swimming, sunbathing,
            and surfing.
          </p>
          <p className="text-[#d4a148] my-5">— See all beach</p>
        </div>
        <div className="mb-12 ml-auto lg:mt-[10rem] md:max-w-[300px] lg:max-w-[850px] h-[250px] right-[5%] top-[15rem]">
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

export default Resorts;
