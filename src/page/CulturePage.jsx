import React, { useEffect } from "react";
import NavigatonInOtherPage from "../components/common/NavigatonInOtherPage";
import Footer from "../components/common/Footer";
import CultureHeader from "../components/planahead_item_page/culture_page/CultureHeader";
import CultureBody from "../components/planahead_item_page/culture_page/CultureBody";

const CulturePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <NavigatonInOtherPage />
      <div>
        <CultureHeader />
        <CultureBody />
      </div>
      <Footer />
    </div>
  );
};

export default CulturePage;
