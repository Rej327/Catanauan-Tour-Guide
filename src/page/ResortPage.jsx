import React from "react";
import Footer from "../components/common/Footer";
import NavigatonInOtherPage from "../components/common/NavigatonInOtherPage";
import ResortsCover from "../components/resorts_page/ResortsCover";

const ResortPage = () => {
  return (
    <div>
      <NavigatonInOtherPage />
      <div>
        <ResortsCover />
      </div>
      <Footer />
    </div>
  );
};

export default ResortPage;
