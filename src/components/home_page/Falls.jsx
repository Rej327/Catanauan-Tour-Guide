import React, { useContext } from "react";
import { LangContext } from "../../App";
import Carousel from "../common/Carousel";
import Button from "../common/Button";
import { Link } from "react-router-dom";

const Falls = ({ className, id }) => {
  const { language } = useContext(LangContext);
  return (
    <div id={id} className={`w-full ${className}`}>
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
              className="rounded-lg fallsContainer max-w-[300px] md:max-w-[350px] lg:max-w-[350px] mx-auto"
            >
              <div className="overflow-hidden rounded-lg">
                <img src={data.img} alt="resorts" className=" rounded-lg " />
              </div>
              <p className="text-lg px-4 py-2">Talisay Falls</p>
            </div>
          ))}
        </div>

        <div className="w-fit mt-10 h-fit mx-auto ">
          <Link to="/falls">
            <Button
              className="mx-auto w-fit text-black px-4 pt-2 text-lg bg-[#FCE9CB]"
              label="MORE"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Falls;
