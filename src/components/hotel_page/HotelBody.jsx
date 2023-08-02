import React, { useContext } from "react";
import { rc1 } from "../../assets";
import { ImLocation } from "react-icons/im";
import { LangContext } from "../../App";
import { Link } from "react-router-dom";

const HotelBody = () => {
  const { language } = useContext(LangContext);
  return (
    <div className="max-w-[1300px] mx-auto">
      {language.hotels_page.map((data) => (
        <div
          key={data.id}
          className="flex flex-wrap py-10 border-b-[1px] justify-center gap-5"
        >
          <div className="max-w-[400px] overflow-hidden">
            <img
              src={data.img}
              alt="Hotel Image"
              className="object-cover hover:scale-125 duration-700 delay-75 ease-in-out"
            />
          </div>
          <div className="max-w-[800px] px-4 h-fit my-auto items-center flex flex-col gap-5">
            <div className="flex flex-col mr-auto gap-4">
              <p className=" w-fit text-xs p-2 rounded-2xl bg-[#FCE9CB] text-[#f1be66] font-bold">
                {data.category}
              </p>
              <p className="text-2xl font-bold">{data.title}</p>
              <p className="text-sm hover:underline underline-offset-8 cursor-pointer">
                {data.btn_more_txt}
              </p>
            </div>
            <div className="w-full flex flex-wrap justify-between gap-10">
              <div className="w-fit flex gap-1 items-center">
                <ImLocation className="text-[#f1be66]" />
                <Link to={data.loc_link} target="_blank">
                  <p className="text-sm hover:underline underline-offset-8 cursor-pointer">
                    {data.location}
                  </p>
                </Link>
              </div>
              <div className="w-fit flex gap-4">
                <Link to={data.btn_visit_link}>
                  <p className="w-fit flex items-center px-4 py-2 rounded-xl border-[1px] text-[#f1be66] border-[#f1be66] hover:scale-110 duration-200 ease-in cursor-pointer">
                    {data.btn_visit_txt}
                  </p>
                </Link>
                <p className="w-fit flex items-center px-4 py-2 rounded-xl bg-[#f1be66] text-white hover:scale-110 duration-200 ease-in cursor-pointer">
                  {data.btn_prices_txt}
                </p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HotelBody;
