import React from "react";
import Hero from "../components/home_section/Hero";
import Sample from "../components/Sample";
import Navigation from "../components/common/Navigation";
import PlanAhead from "../components/home_section/PlanAhead";

const Home = () => {
  return (
    <div>
      <Navigation />
      <Hero />
      <PlanAhead className="my-12 md:my-24 px-2" />
      {/* <Sample /> */}
    </div>
  );
};

export default Home;
