import React, { useContext } from "react";
import { adv, adv1 } from "../../assets";
import { LangContext } from "../../App";

const Adventure = ({ className }) => {
  const { language } = useContext(LangContext);

  return (
    <div className={`w-full ${className}`}>
      <div className="max-w-[1240px] mx-auto px-5">
        <div className="w-auto">
          <p className="font-bold text-2xl md:text-3xl lg:text-4xl tracking-wider">
            {language.home_adv_section?.header}
          </p>
          <p className="text-xl my-4 text-justify md:text-left">
            {language.home_adv_section?.content}
          </p>
        </div>
        <div className="w-auto flex flex-wrap max-lg:flex-col-reverse justify-between items-center">
          <div className="max-w-[660px] mx-auto flex flex-wrap gap-4 items-center justify-center max-sm:my-14">
            <div className="w-[300px]">
              <img src={adv} alt="img" className="w-[320px] h-[300px]" />
              <p className="text-lg px-2 text-center my-2 font-semibold hover:underline underline-offset-4 cursor-pointer">
                Celebrate your occation in Catanauan, Quezon
              </p>
            </div>
            {/* NEXT ITEM */}
            <div className="w-[300px]">
              <img src={adv} alt="img" className="w-[300px] h-[300px]" />
              <p className="text-lg px-2 text-center my-2 font-semibold hover:underline underline-offset-4 cursor-pointer">
                Celebrate your occation in Catanauan, Quezon
              </p>
            </div>
            {/* NEXT ITEM */}
            <div className="w-[300px]">
              <img src={adv} alt="img" className="w-[300px] h-[300px]" />
              <p className="text-lg px-2 text-center my-2 font-semibold hover:underline underline-offset-4 cursor-pointer">
                Celebrate your occation in Catanauan, Quezon
              </p>
            </div>
            {/* NEXT ITEM */}
            <div className="w-[300px]">
              <img src={adv} alt="img" className="w-[300px] h-[300px]" />
              <p className="text-lg px-2 text-center my-2 font-semibold hover:underline underline-offset-4 cursor-pointer">
                Celebrate your occation in Catanauan, Quezon
              </p>
            </div>
          </div>

          {/* PHONE SIZE */}
          <div className="w-[300px] h-[300px] mx-auto md:hidden">
            <div className="mx-auto absolute bg-[url(./assets/AdventureSection/adv1.jpg)] w-[300px] h-[300px] bg-cover bg-center advShadow">
              <div className="relative bg-black bg-opacity-60 w-[300px] h-[300px] flex items-center justify-center">
                <p className="w-fit text-white font-header text-3xl text-center ">
                  # Keep <br /> Discovering
                </p>
              </div>
            </div>
          </div>

          {/* DESKTOP SIZE */}
          <div className="relative my-5">
            <div className="relative w-[500px] h-[500px] mx-auto max-sm:hidden">
              <div className="mx-auto absolute bg-[url(./assets/AdventureSection/adv1.jpg)] w-[500px] h-[500px] bg-cover bg-center advShadow">
                <div className="relative bg-black bg-opacity-60 w-[500px] h-[500px]">
                  <p className="absolute bottom-24 right-12 w-fit text-white font-header text-6xl leading-[5rem] -rotate-45">
                    # Keep <br /> Discovering
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Adventure;
