import React, { useContext } from "react";
import { rc1, rc2 } from "../../assets";
import Button from "../common/Button";
import { Link } from "react-router-dom";
import { LangContext } from "../../App";

const RestoCarouselSection = ({ className }) => {
  const { language } = useContext(LangContext);
  return (
    <div className={`h-screen flex flex-col-reverse w-[50%] ${className}`}>
      <img src={rc1} alt="Image" className="w-full h-[40%] object-cover" />
      <div className="h-[60%] flex">
        <div className="w-full md:w-[50%] text-right px-4 flex flex-col gap-5 my-auto justify-center">
          <p className="text-4xl font-bold">Restaurants</p>
          <p className="text-2xl">
            {language?.hotel_resto_section?.resto_content}
          </p>
          <Link to="/restaurants">
            <Button
              className="text-black text-xl px-6 py-2"
              label={language?.hotel_resto_section?.btn_txt}
            />
          </Link>
        </div>
        <div className="h-[100%] w-[50%] max-sm:hidden">
          <img src={rc2} alt="Image" className="h-full w-full object-cover" />
        </div>
      </div>
    </div>
  );
};

export default RestoCarouselSection;
