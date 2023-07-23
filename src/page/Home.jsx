import React, { useEffect } from "react";
import Sample from "../components/Sample";
import Hero from "../components/home_page/Hero";
import Navigation from "../components/common/Navigation";
import PlanAhead from "../components/home_page/PlanAhead";
import Adventure from "../components/home_page/Adventure";
import SetupInto from "../components/home_page/SetupInto";
import Resorts from "../components/home_page/Resorts";
import HotelAndRestoDesktop from "../components/home_page/HotelAndRestoDesktop";
import HotelAndRestoMobile from "../components/home_page/HotelAndRestoMobile";
import Falls from "../components/home_page/Falls";
import Banks from "../components/home_page/Banks";
import Footer from "../components/common/Footer";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
        id="hotelandrestomobile"
        className="mt-[30%] md:mt-[15%] lg:hidden"
      />
      <Falls id="falls" className="pt-12 pb-6 md:py-6" />
      <Banks id="banks" className="py-6 md:py-24" />
      <Footer className="pt-6" />
      {/* <Sample /> */}
    </div>
  );
};

export default Home;
