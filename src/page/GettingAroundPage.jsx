import React, { useEffect } from "react";
import NavigatonInOtherPage from "../components/common/NavigatonInOtherPage";
import Footer from "../components/common/Footer";
import GettingAroundHeader from "../components/planahead_item_page/gettingarround_page/GettingAroundHeader";

const GettingAroundPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <NavigatonInOtherPage />
      <div>
        <GettingAroundHeader />
      </div>
      <Footer />
    </div>
  );
};

export default GettingAroundPage;
