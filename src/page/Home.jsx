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
      <PlanAhead />
      <Sample />
    </div>
  );
};

export default Home;
