import React from "react";
import Footer from "../components/common/Footer";
import NavigatonInOtherPage from "../components/common/NavigatonInOtherPage";
import TermOfUseHeader from "../components/legal_page/TermOfUseHeader";
import TermOfUseBody from "../components/legal_page/TermOfUseBody";

const TermOfUsePage = () => {
  return (
    <div>
      <NavigatonInOtherPage />
      <TermOfUseHeader />
      <div className="max-w-[1300px] mx-auto flex flex-col gap-4 px-2">
        <TermOfUseBody />
      </div>
      <Footer />
    </div>
  );
};

export default TermOfUsePage;
