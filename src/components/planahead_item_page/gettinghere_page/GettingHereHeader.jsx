import React, { useContext } from "react";
import { LangContext } from "../../../App";
import { gettingHere } from "../../../assets";
import PlanHeader from "../../common/PlanHeader";

const GettingHereHeader = () => {
  const { language } = useContext(LangContext);

  return (
    <PlanHeader
      selectedPage={language.plan_section?.getting_here}
      icon={gettingHere}
    />
  );
};

export default GettingHereHeader;
