import React, { useContext } from "react";
import { LangContext } from "../../../App";
import PlanHeader from "../../common/PlanHeader";
import { accomodation } from "../../../assets";

const AccomodationHeader = () => {
  const { language } = useContext(LangContext);

  return (
    <PlanHeader
      selectedPage={language.plan_section?.accomodations}
      icon={accomodation}
    />
  );
};

export default AccomodationHeader;
