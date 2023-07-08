import React, { useContext, useEffect } from "react";
import SearchBar from "./common/SearchBar";
import LangToggle from "./common/LangToggle";
import { LangContext } from "../App";

const Hero = () => {
  const { language } = useContext(LangContext);

  return (
    <div className="w-full">
      <div className="bg-[url(./assets/HeroSection/hero.jpg)] bg-cover bg-center h-screen">
        <div className="bg-black bg-opacity-40 w-full h-screen flex items-center flex-col justify-center">
          <LangToggle />
          <p className="w-full text-white text-8xl text-center font-sub subBodyColor leading-[4rem] tracking-wider">
            <span className="font-body text-xl tracking-widest">
              WELCOME TO <br />
            </span>
            Catanauan, Quezon
          </p>

          <SearchBar containerStyle="mt-10" />

          <div className="mb-4 text-2xl text-white">
            <p className="">{language.category?.beaches}</p>
            <p>{language.category?.hotels}</p>
          </div>

          {/* <p>hfjshdfkjshdfkhdsfk</p> */}
        </div>
      </div>
    </div>
  );
};

export default Hero;
