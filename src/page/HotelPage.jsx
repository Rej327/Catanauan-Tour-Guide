import React from "react";
import Footer from "../components/common/Footer";
import NavigatonInOtherPage from "../components/common/NavigatonInOtherPage";
import HotelCover from "../components/hotel_page/HotelCover";

const ResortPage = () => {
  return (
    <div>
      <NavigatonInOtherPage />
      <div>
        <HotelCover />
      </div>
      <Footer />
    </div>
  );
};

export default ResortPage;
