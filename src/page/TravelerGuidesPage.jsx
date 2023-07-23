import React, { useEffect } from "react";
import NavigatonInOtherPage from "../components/common/NavigatonInOtherPage";
import Footer from "../components/common/Footer";
import GuidesBody from "../components/planahead_item_page/travelerguides_page/GuidesBody";
import GuidesHeader from "../components/planahead_item_page/travelerguides_page/GuidesHeader";

const TravelerGuidesPage = () => {
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

export default TravelerGuidesPage;
