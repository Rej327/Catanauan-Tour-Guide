import React, { useEffect } from "react";
import NavigatonInOtherPage from "../components/common/NavigatonInOtherPage";
import Footer from "../components/common/Footer";
import GettingAroundHeader from "../components/planahead_item_page/gettingarround_page/GettingAroundHeader";
import Market from "../components/planahead_item_page/gettingarround_page/Market";
import GettingAroundSubHead from "../components/planahead_item_page/gettingarround_page/GettingAroundSubHead";
import Delicasies from "../components/planahead_item_page/gettingarround_page/Delicasies";
import LocalFlavorsHeader from "../components/planahead_item_page/gettingarround_page/LocalFlavorsHeader";
import FinancialHeader from "../components/planahead_item_page/gettingarround_page/FinancialHeader";
import Banks from "../components/planahead_item_page/gettingarround_page/Banks";
import FoodHub from "../components/planahead_item_page/gettingarround_page/FoodHub";

const GettingAroundPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <NavigatonInOtherPage />
      <div>
        <GettingAroundHeader />
        <GettingAroundSubHead />
        <div className="w-full bg-[#FFFAF2] ">
          <LocalFlavorsHeader />
          <Delicasies />
          <Market />
          <FoodHub />
          <FinancialHeader />
          <Banks />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default GettingAroundPage;
