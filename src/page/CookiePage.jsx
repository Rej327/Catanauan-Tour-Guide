import React from "react";
import Footer from "../components/common/Footer";
import NavigatonInOtherPage from "../components/common/NavigatonInOtherPage";
import CookieHeader from "../components/legal_page/cookie_page/CookieHeader";
import CookieBody from "../components/legal_page/cookie_page/CookieBody";

const TermOfUsePage = () => {
  return (
    <div>
      <NavigatonInOtherPage />
      <CookieHeader />
      <div className="max-w-[1300px] mx-auto flex flex-col gap-4 px-2">
        <CookieBody />
      </div>
      <Footer />
    </div>
  );
};

export default TermOfUsePage;
