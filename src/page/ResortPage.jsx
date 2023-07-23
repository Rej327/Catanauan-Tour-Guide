import React from "react";
import Footer from "../components/common/Footer";
import NavigatonInOtherPage from "../components/common/NavigatonInOtherPage";
import ResortsCover from "../components/resorts_page/ResortsCover";
import ResortsBody from "../components/resorts_page/ResortsBody";

const ResortPage = () => {
  return (
    <div>
      <NavigatonInOtherPage />
      <div>
        <ResortsCover />
        <ResortsBody />
      </div>
      <Footer />
    </div>
  );
};

export default ResortPage;
