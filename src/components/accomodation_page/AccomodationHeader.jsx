import React, { useContext } from "react";
import ReusableHeader from "../common/ReusableHeader";
import { LangContext } from "../../App";
import { accomodation } from "../../assets";

const AccomodationHeader = () => {
  const { language } = useContext(LangContext);

  return (
    <ReusableHeader
      selectedPage={language.plan_section?.accomodations}
      icon={accomodation}
    />
  );
};

export default AccomodationHeader;
