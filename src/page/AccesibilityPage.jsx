import React from "react";
import Footer from "../components/common/Footer";
import NavigatonInOtherPage from "../components/common/NavigatonInOtherPage";
import AccesibilityHeader from "../components/legal_page/accecibility_page/AccesibilityHeader";
import AccesibilityBody from "../components/legal_page/accecibility_page/AccesibilityBody";

const AccesibilityPage = () => {
  return (
    <div>
      <NavigatonInOtherPage />
      <AccesibilityHeader />
      <div className="max-w-[1300px] mx-auto flex flex-col gap-4 px-2">
        <AccesibilityBody />
      </div>
      <Footer />
    </div>
  );
};

export default AccesibilityPage;
