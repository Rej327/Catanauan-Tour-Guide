import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { guides } from "../../assets";
import PlanAHeadHeader from "../common/PlanAHeadHeader";
import { LangContext } from "../../App";

const GuidesHeader = () => {
  const { language } = useContext(LangContext);

  return (
    <PlanAHeadHeader
      selectedPage={language.plan_section?.traveler_guides}
      icon={guides}
    />
  );
};

export default GuidesHeader;
