import React, { useContext } from "react";
import PlanAHeadHeader from "../common/PlanAHeadHeader";
import { LangContext } from "../../App";
import { accomodation } from "../../assets";

const AccomodationHeader = () => {
  const { language } = useContext(LangContext);

  return (
    <PlanAHeadHeader
      selectedPage={language.plan_section?.accomodations}
      icon={accomodation}
    />
  );
};

export default AccomodationHeader;
