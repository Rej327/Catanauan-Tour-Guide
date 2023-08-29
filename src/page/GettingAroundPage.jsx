import React, { useEffect } from "react";
import NavigatonInOtherPage from "../components/common/NavigatonInOtherPage";
import Footer from "../components/common/Footer";
import GettingAroundHeader from "../components/planahead_item_page/gettingarround_page/GettingAroundHeader";
import Market from "../components/planahead_item_page/gettingarround_page/Market";
import GettingAroundSubHead from "../components/planahead_item_page/gettingarround_page/GettingAroundSubHead";
import BodyHeader from "../components/planahead_item_page/gettingarround_page/BodyHeader";
import Delicasies from "../components/planahead_item_page/gettingarround_page/Delicasies";

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
        <div className="w-full bg-[#FEFEFF] ">
          <BodyHeader />
          <Delicasies />
          <Market />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default GettingAroundPage;
