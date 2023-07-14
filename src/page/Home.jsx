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
import Falls from "../components/home_section/Falls";
import Banks from "../components/home_section/Banks";
import Transportation from "../components/home_section/Transportation";
import Footer from "../components/common/Footer";

const Home = () => {
  return (
    <div>
      <Navigation />
      <Hero />
      <PlanAhead className="py-6 md:py-12 md:mt-12 px-2" />
      <Adventure className="py-6 md:py-12 px-2" />
      <SetupInto className="py-6 md:py-12" />
      <Resorts id="resorts" className="py-6 md:py-12" />
      <HotelAndRestoDesktop
        id="hotelandresto"
        className="hidden lg:block my-12"
      />
      <HotelAndRestoMobile
        id="hotelandresto"
        className="mt-[30%] md:mt-[15%] lg:hidden"
      />
      <Falls id="falls" className="pt-12 pb-6 md:py-6" />
      <Banks id="banks" className="py-6" />
      <Transportation id="transportation" className="py-6 md:py-24" />
      <Footer className="pt-44 md:pt-24" />
      {/* <Sample /> */}
    </div>
  );
};

export default Home;
