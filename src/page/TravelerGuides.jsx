import React, { useEffect } from "react";
import NavigatonInOtherPage from "../components/common/NavigatonInOtherPage";
import Footer from "../components/common/Footer";
import GuidesHeader from "../components/travelerguides_page/GuidesHeader";
import GuidesBody from "../components/travelerguides_page/GuidesBody";

const TravelerGuides = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <NavigatonInOtherPage />
      <div>
        <GuidesHeader />
        <GuidesBody className="pb-6" />
      </div>
      <Footer />
    </div>
  );
};

export default TravelerGuides;
