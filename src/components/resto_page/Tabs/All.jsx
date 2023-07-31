import React, { useContext } from "react";
import { rc1 } from "../../../assets";
import { LangContext } from "../../../App";

const All = () => {
  const { language } = useContext(LangContext);
  console.log(language.restaurants_page.category_all);
  return (
    <div className="max-w-[1300px] my-10 mx-auto flex flex-wrap justify-center items-center gap-10">
      {language.restaurants_page.category_all.map((data) => (
        <div
          key={data.id}
          className="rounded-2xl relative restoItems w-fit h-fit"
        >
          <div className="absolute rounded-b-2xl z-10 bottom-0 bg-black bg-opacity-50 flex flex-col justify-center items-center w-full h-[75px]">
            <p className="text-lg text-[#fefeff]">{data.title}</p>
            <p className="text-[#f9dba9] text-base hover:underline underline-offset-8 hover:cursor-pointer">
              {data.btn_txt}
            </p>
          </div>
          <div className="rounded-2xl w-[320px] h-[320px] overflow-hidden">
            <img
              src={data.img}
              alt={`${data.title} Image`}
              className="w-full h-full object-cover itemImg"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default All;
