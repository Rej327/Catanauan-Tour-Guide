import React, { useContext } from "react";
import { LangContext } from "../../../App";
import { guides } from "../../../assets";
import PlanHeader from "../../common/PlanHeader";

const GuidesHeader = () => {
  const { language } = useContext(LangContext);

  return (
    <PlanHeader
      selectedPage={language.plan_section?.traveler_guides}
      icon={guides}
    />
  );
};

export default GuidesHeader;
