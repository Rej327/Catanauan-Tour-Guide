import React, { useEffect } from "react";
import NavigatonInOtherPage from "../components/common/NavigatonInOtherPage";
import Footer from "../components/common/Footer";
import RestoItem from "../components/item_page/resto_item_page/RestoItem";
const RestoItemPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <NavigatonInOtherPage />
      <div className="pb-2">
        <RestoItem />
      </div>
      <Footer />
    </div>
  );
};

export default RestoItemPage;
