import React from "react";
import Sample from "../components/Sample";
import Hero from "../components/home_section/Hero";
import Navigation from "../components/common/Navigation";
import PlanAhead from "../components/home_section/PlanAhead";
import Adventure from "../components/home_section/Adventure";
import SetupInto from "../components/home_section/SetupInto";
import Resorts from "../components/home_section/Resorts";
import HotelAndRestoDesktop from "../components/home_section/HotelAndRestoDesktop";
import HotelAndRestoMobile from "../components/home_section/HotelAndRestoMobile";

const Home = () => {
  return (
    <div>
      <Navigation />
      <Hero />
      <PlanAhead className="py-6 md:py-12 md:mt-12 px-2" />
      <Adventure className="py-6 md:py-12 px-2" />
      <SetupInto className="py-6 md:py-12" />
      <Resorts className="py-6 md:py-12" />
      <HotelAndRestoDesktop className="hidden lg:block" />
      <HotelAndRestoMobile className="mt-[30%] md:mt-[15%] lg:hidden" />
      {/* <Sample /> */}
    </div>
  );
};

export default Home;
