import React, { useContext, useEffect } from "react";
import { LangContext } from "../../App";
import { Link } from "react-router-dom";

const RestoBody = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { language } = useContext(LangContext);
  return (
    <div className="max-w-[1300px] mt-5 mb-10 mx-auto flex flex-wrap justify-center items-center gap-10">
      {language?.restaurants_page?.map((data) => (
        <div
          key={data.id}
          className="rounded-2xl relative restoItems w-fit h-fit"
        >
          <div className="absolute rounded-b-2xl z-10 bottom-0 bg-black bg-opacity-50 flex flex-col justify-center items-center w-full h-[75px]">
            <p className="text-lg text-[#fefeff]">{data.title}</p>
            <Link to={`/restaurants/${data.id}`}>
              <p className="text-[#f9dba9] text-base hover:underline underline-offset-8 hover:cursor-pointer">
                {data.btn_txt}
              </p>
            </Link>
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

export default RestoBody;
