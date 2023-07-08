import React from "react";
import SearchBar from "./common/SearchBar";

const Hero = () => {
  return (
    <div className="w-full">
      <div className="bg-[url(./assets/HeroSection/hero.jpg)] bg-cover bg-center h-screen">
        <div className="bg-black bg-opacity-40 w-full h-screen flex items-center flex-col justify-center">
          <p className="w-full text-white text-8xl text-center font-sub subBodyColor leading-[4rem] tracking-wider">
            <span className="font-body text-xl tracking-widest">
              WELCOME TO <br />
            </span>
            Catanauan, Quezon
          </p>

          <SearchBar containerStyle="mt-10" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
