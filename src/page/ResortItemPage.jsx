import React from "react";
import Footer from "../components/common/Footer";
import NavigatonInOtherPage from "../components/common/NavigatonInOtherPage";
import ResortItem from "../components/item_page/resort_item_page/ResortItem";

const ResortItemPage = () => {
  return (
    <div>
      <NavigatonInOtherPage />
      <div>
        <ResortItem />
      </div>
      <Footer />
    </div>
  );
};

export default ResortItemPage;
