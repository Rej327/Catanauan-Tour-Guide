import React from "react";
import Footer from "../components/common/Footer";
import NavigatonInOtherPage from "../components/common/NavigatonInOtherPage";
import Cover from "../components/resorts_page/Cover";

const ResortPage = () => {
  return (
    <div>
      <NavigatonInOtherPage />
      <div>
        <Cover />
      </div>
      <Footer />
    </div>
  );
};

export default ResortPage;
