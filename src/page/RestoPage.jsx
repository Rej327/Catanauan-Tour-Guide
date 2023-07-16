import React from "react";
import Footer from "../components/common/Footer";
import NavigatonInOtherPage from "../components/common/NavigatonInOtherPage";
import RestoCover from "../components/resto_page/RestoCover";

const ResortPage = () => {
  return (
    <div>
      <NavigatonInOtherPage />
      <div>
        <RestoCover />
      </div>
      <Footer />
    </div>
  );
};

export default ResortPage;
