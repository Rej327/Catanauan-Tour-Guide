import React from "react";
import Hero from "../components/home_section/Hero";
import Sample from "../components/Sample";
import Navigation from "../components/common/Navigation";
import PlanAhead from "../components/home_section/PlanAhead";
import Adventure from "../components/home_section/Adventure";
import SetupInto from "../components/home_section/SetupInto";
import Carousel from "../components/common/Carousel";
import Resorts from "../components/home_section/Resorts";

const Home = () => {
  return (
    <div>
      <Navigation />
      <Hero />
      <PlanAhead className="py-6 md:py-12 md:mt-12 px-2" />
      <Adventure className="py-6 md:py-12 px-2" />
      <SetupInto className="py-6 md:py-12" />
      <Resorts className="py-6 md:py-12" />
      {/* <Carousel /> */}
      {/* <Sample /> */}
    </div>
  );
};

export default Home;
