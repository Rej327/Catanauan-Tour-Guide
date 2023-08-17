import React, { useContext } from "react";
import Carousel from "../common/Carousel";
import { LangContext } from "../../App";
import { Link } from "react-router-dom";
import { ImLocation } from "react-icons/im";

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
          <p className="font-header hashColor text-4xl mt-10">
            {language?.resorts_section?.head}
          </p>
          <p className="text-4xl font-bold tracking-wide my-5">
            {language?.resorts_section?.title}
          </p>
          <p className="text-xl">{language?.resorts_section?.content}</p>
          <Link to="/resorts">
            <p className="text-[#d4a148] my-5 hover:translate-x-2 hover:font-bold duration-300">
              {language?.resorts_section?.btn_txt}
            </p>
          </Link>
        </div>
        <div className="mb-12 ml-auto lg:mt-[10rem] md:max-w-[300px] lg:max-w-[850px] h-[250px] right-[5%] top-[15rem]">
          <Carousel>
            {language?.resorts_page?.map((data) => (
              <div
                key={data.id}
                className="max-w-[250px] h-[350px] homeItemContainer mx-12 md:mx-5 lg:mx-3 flex flex-col gap-2 bg-white rounded-xl"
              >
                <div className="rounded-xl w-[250px] h-[200px] overflow-hidden">
                  <img
                    src={data.img}
                    className="w-[250px] h-[200px] itemImg  object-cover rounded-xl"
                  />
                </div>
                <div className="relative w-full h-[130px] mt-2 mb-4 px-2 flex flex-col gap-2">
                  <p className="w-fit text-xs text-[#f1be66] font-bold">
                    {data.category}
                  </p>
                  <p className="text-lg font-extrabold">{data.title}</p>
                  <div className="w-fit flex gap-1 items-center">
                    <p>
                      <ImLocation className="text-[#f1be66]" />
                    </p>
                    <p className="text-sm hover:text-[#be8624] duration-200 cursor-pointer">
                      {data.location}
                    </p>
                  </div>
                  <p className="mt-auto ml-[6rem] text-sm hover:text-[#be8624] underline duration-200 cursor-pointer hover:no-underline underline-offset-8">
                    {data.btn_txt}
                  </p>
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
