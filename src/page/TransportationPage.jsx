import React from "react";
import Footer from "../components/common/Footer";
import NavigatonInOtherPage from "../components/common/NavigatonInOtherPage";
import TranspoCover from "../components/transportation_page/TranspoCover";
import TranspoBody from "../components/transportation_page/TranspoBody";

const TransportationPage = () => {
  return (
    <div>
      <NavigatonInOtherPage />
      <div>
        <TranspoCover />
        <TranspoBody />
      </div>
      <Footer />
    </div>
  );
};

export default TransportationPage;
