import React, { useEffect } from "react";
import Footer from "../components/common/Footer";
import NavigatonInOtherPage from "../components/common/NavigatonInOtherPage";
import RestoCover from "../components/resto_page/RestoCover";
import RestoBodyDesktop from "../components/resto_page/RestoBodyDesktop";
import RestoBodyMobile from "../components/resto_page/RestoBodyMobile";

const ResortPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <NavigatonInOtherPage />
      <div>
        <RestoCover />
        <RestoBodyDesktop />
        <RestoBodyMobile />
      </div>
      <Footer />
    </div>
  );
};

export default ResortPage;
