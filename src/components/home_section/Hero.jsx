import React, { useContext, useEffect } from "react";
import SearchBar from "../common/SearchBar";
import HeroCategory from "./HeroCategory";
import { BsChevronCompactDown } from "react-icons/bs";

const Hero = () => {

  const handleScroll = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };


  return (
    <div className="w-full">
      <div className="bg-[url(./assets/HeroSection/hero.jpg)] bg-cover bg-center h-screen">
        <div className="bg-black bg-opacity-60 w-full h-screen flex items-center flex-col justify-evenly border-2 pt-[10rem] ">
          <p className="w-full text-whit text-8xl text-center font-title subBodyColor leading-[6rem] tracking-wider max-sm:text-4xl max-md:text-6xl">
            <span className="font-body text-xl tracking-widest max-md:text-sm">
              WELCOME TO <br />
            </span>
            Catanauan, Quezon
          </p>
          <SearchBar />
          <div>
          <HeroCategory />
          <BsChevronCompactDown onClick={handleScroll} className="text-white opacity-60 mx-auto text-6xl -mt-5 sm:-mt-10 hover:opacity-100 duration-300 delay-75 cursor-pointer" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
