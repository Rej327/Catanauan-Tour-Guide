import React from "react";
import Hero from "../components/home_section/Hero";
import Sample from "../components/Sample";
import Navigation from "../components/common/Navigation";
import PlanAhead from "../components/home_section/PlanAhead";
import Adventure from "../components/home_section/Adventure";
import SetupInto from "../components/home_section/SetupInto";
import Resorts from "../components/home_section/Resorts";
import HotelAndResto from "../components/home_section/HotelAndResto";
import HotelAndRestoCarouselItem from "../components/home_section/HotelAndRestoCarouselItem";

const Home = () => {
  return (
    <div>
      <Navigation />
      <Hero />
      <PlanAhead className="py-6 md:py-12 md:mt-12 px-2" />
      <Adventure className="py-6 md:py-12 px-2" />
      <SetupInto className="py-6 md:py-12" />
      <Resorts className="py-6 md:py-12" />
      <HotelAndResto className="max-sm:mt-24 md:mt-12" />
      {/* <HotelAndRestoCarouselItem className="max-sm:mt-24 md:mt-12" /> */}

      {/* <Sample /> */}
    </div>
  );
};

export default Home;
