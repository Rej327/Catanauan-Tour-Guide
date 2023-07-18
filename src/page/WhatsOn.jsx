import React, { useEffect } from "react";
import NavigatonInOtherPage from "../components/common/NavigatonInOtherPage";
import Footer from "../components/common/Footer";
import WhatsOnCover from "../components/whatson_page/WhatsOnCover";

const Accomodation = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <NavigatonInOtherPage />
      <div>
        <WhatsOnCover />
      </div>
      <Footer />
    </div>
  );
};

export default Accomodation;
