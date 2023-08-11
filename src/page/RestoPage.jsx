import React, { useEffect } from "react";
import Footer from "../components/common/Footer";
import NavigatonInOtherPage from "../components/common/NavigatonInOtherPage";
import RestoCover from "../components/resto_page/RestoCover";
import RestoBody from "../components/resto_page/RestoBody";

const ResortPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <NavigatonInOtherPage />
      <div>
        <RestoCover />
        <RestoBody />
      </div>
      <Footer />
    </div>
  );
};

export default ResortPage;
