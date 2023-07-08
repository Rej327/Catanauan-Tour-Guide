import React, { useContext, useEffect } from "react";
import SearchBar from "./common/SearchBar";
import HeroCategory from "./HeroCategory";
import { BsChevronCompactDown } from "react-icons/bs";

const Hero = () => {
  return (
    <div className="w-full">
      <div className="bg-[url(./assets/HeroSection/hero.jpg)] bg-cover bg-center h-[120vh]">
        <div className="bg-black bg-opacity-60 w-full h-[120vh] flex items-center flex-col justify-center">
          <p className="w-full mt-[10rem] text-white text-8xl text-center font-sub subBodyColor leading-[4rem] tracking-wider">
            <span className="font-body text-xl tracking-widest">
              WELCOME TO <br />
            </span>
            Catanauan, Quezon
          </p>
          <SearchBar containerStyle="mt-[5rem]" />
          <HeroCategory />
          <BsChevronCompactDown className="text-white opacity-60 text-6xl -mt-10 hover:opacity-100 duration-300 delay-75 cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
