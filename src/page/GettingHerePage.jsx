import React, { useEffect } from "react";
import NavigatonInOtherPage from "../components/common/NavigatonInOtherPage";
import Footer from "../components/common/Footer";
import GettingHereHeader from "../components/planahead_item_page/gettinghere_page/GettingHereHeader";
import GettingHereBody from "../components/planahead_item_page/gettinghere_page/GettingHereBody";

const TravelerGuides = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <NavigatonInOtherPage />
      <div>
        <GettingHereHeader />
        <GettingHereBody className="pb-6" />
      </div>
      <Footer />
    </div>
  );
};

export default TravelerGuides;
