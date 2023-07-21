import React, { useEffect } from "react";
import Footer from "../components/common/Footer";
import NavigatonInOtherPage from "../components/common/NavigatonInOtherPage";
import TermOfUseBody from "../components/legal_page/term_of_use_page/TermOfUseBody";
import TermOfUseHeader from "../components/legal_page/term_of_use_page/TermOfUseHeader";

const TermOfUsePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
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
