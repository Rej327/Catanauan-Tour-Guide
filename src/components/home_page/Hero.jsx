import React, { useContext, useEffect } from "react";
import SearchBar from "../common/SearchBar";
import HeroCategory from "./HeroCategory";
import { BsChevronCompactDown } from "react-icons/bs";
import ArrowDown from "../common/ArrowDown";

const Hero = () => {
  const handleScroll = () => {
    window.scrollTo({
      top: window.innerHeight,
    });
  };

  return (
    <div className="w-full">
      <div className="bg-[url(./assets/HeroSection/heroCover.webp)] bg-cover bg-center h-screen">
        <div className="bg-black bg-opacity-40 w-full h-screen flex items-center flex-col justify-evenly pt-[10rem] ">
          <p className="w-full text-white text-8xl text-center font-title subBodyColor leading-[6rem] tracking-wider max-sm:text-4xl max-md:text-6xl">
            <span className="font-body text-xl tracking-widest max-md:text-sm">
              WELCOME TO <br />
            </span>
            Catanauan, Quezon
          </p>
          {/* <SearchBar iconStyle="subBodyColor" /> */}
          <div>
            <HeroCategory />
            <ArrowDown className="-mt-5 sm:-mt-10" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
