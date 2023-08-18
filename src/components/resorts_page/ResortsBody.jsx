import React, { useContext } from "react";
import { ImLocation } from "react-icons/im";
import { LangContext } from "../../App";
import { Link } from "react-router-dom";

const ResortsBody = () => {
  const { language } = useContext(LangContext);
  return (
    <div className="max-w-[1300px] pb-10 mx-auto justify-center items-center flex flex-wrap gap-10 px-2">
      {language?.resorts_page?.map((data) => (
        <div
          key={data.id}
          className="relative max-w-[290px] h-[410px] resortItems flex flex-col gap-2 bg-white rounded-xl"
        >
          <div className="rounded-xl w-[290px] h-[250px] overflow-hidden">
            <img
              src={data.img}
              className="w-[290px] h-[250px] itemImg  object-cover rounded-xl"
            />
          </div>
          <div className="w-full mt-2 mb-4 px-2 flex flex-col gap-2">
            <p className="w-fit text-xs text-[#f1be66] font-bold">
              {data.category}
            </p>
            <p className="text-lg font-extrabold">{data.title}</p>
            <div className="w-fit flex gap-1 items-center">
              <ImLocation className="text-[#f1be66]" />
              <p className="text-sm hover:text-[#be8624] duration-200 cursor-pointer">
                {data.location}
              </p>
            </div>
            <p className="absolute bottom-5 left-[45%] text-sm hover:text-[#be8624] underline duration-200 cursor-pointer hover:no-underline underline-offset-8">
              <Link to={`/resorts/${data.id}`}>{data.btn_txt}</Link>
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ResortsBody;
