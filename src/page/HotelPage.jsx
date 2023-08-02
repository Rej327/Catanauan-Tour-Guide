import React from "react";
import Footer from "../components/common/Footer";
import NavigatonInOtherPage from "../components/common/NavigatonInOtherPage";
import HotelCover from "../components/hotel_page/HotelCover";
import HotelBody from "../components/hotel_page/HotelBody";

const HotelPage = () => {
  return (
    <div>
      <NavigatonInOtherPage />
      <div className="mb-10">
        <HotelCover />
        <HotelBody />
      </div>
      <Footer />
    </div>
  );
};

export default HotelPage;
