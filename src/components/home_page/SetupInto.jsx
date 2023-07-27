import React, { useContext } from "react";
import Button from "../common/Button";
import { Link } from "react-router-dom";
import { LangContext } from "../../App";

const SetupInto = ({ className }) => {
  const { language } = useContext(LangContext);
  return (
    <div className={`w-full ${className}`}>
      <div className="bg-[url(./assets/StepInto/stepinto.jpg)] bg-fixed bg-cover  h-[450px]">
        <div className="bg-black bg-opacity-50 w-full h-[450px] flex items-center flex-col justify-center">
          <div className="max-w-[1300px] px-2">
            <div className="w-fit max-md:mx-2 max-lg:mx-10 mx-auto text-center md:px-0 lg:ml-[50%] md:text-right">
              <p className="w-fit max-sm:mx-auto ml-auto text-white text-2xl md:text-4xl tracking-widest font-bold">
                {language?.whats_on_section?.title}
              </p>
              <p className="text-white text-lg my-5 max-w-[1500px]">
                {language?.whats_on_section?.content}
              </p>
              <Link to="/whats-on">
                <Button
                  className="globalButton font-bold hover:text-black pt-4 pb-2 px-4 tracking-wider"
                  label={language?.whats_on_section?.btn_txt}
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SetupInto;
