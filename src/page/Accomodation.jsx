import React, { useEffect } from "react";
import NavigatonInOtherPage from "../components/common/NavigatonInOtherPage";
import Footer from "../components/common/Footer";
import AccomodationHeader from "../components/accomodation_page/AccomodationHeader";
import AccSection_1 from "../components/accomodation_page/AccSection_1";
import AccSection_2 from "../components/accomodation_page/AccSection_2";

const Accomodation = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <NavigatonInOtherPage />
      <div>
        <AccomodationHeader />
        <AccSection_1 className="pb-10" />
        <AccSection_2 className="py-5 rounded-t-2xl" />
      </div>
      <Footer />
    </div>
  );
};

export default Accomodation;
