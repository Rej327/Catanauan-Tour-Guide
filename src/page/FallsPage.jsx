import React from "react";
import Footer from "../components/common/Footer";
import NavigatonInOtherPage from "../components/common/NavigatonInOtherPage";
import FallsCover from "../components/falls_page/FallsCover";
import FallsBody from "../components/falls_page/FallsBody";

const FallsPage = () => {
  return (
    <div>
      <NavigatonInOtherPage />
      <div>
        <FallsCover />
        <FallsBody />
      </div>
      <Footer />
    </div>
  );
};

export default FallsPage;
