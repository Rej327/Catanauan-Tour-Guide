import React, { useEffect } from "react";
import NavigatonInOtherPage from "../components/common/NavigatonInOtherPage";
import Footer from "../components/common/Footer";
import HotelItem from "../components/item_page/hotel_item_page/HotelItem";
const HotelItemPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <NavigatonInOtherPage />
      <div className="pb-2">
        <HotelItem />
      </div>
      <Footer />
    </div>
  );
};

export default HotelItemPage;
