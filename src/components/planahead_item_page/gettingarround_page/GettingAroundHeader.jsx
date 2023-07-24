import React, { useContext } from "react";
import { LangContext } from "../../../App";
import PlanHeader from "../../common/PlanHeader";
import { gettingAround } from "../../../assets";

const GettingAroundHeader = () => {
  const { language } = useContext(LangContext);

  return (
    <PlanHeader
      selectedPage={language.plan_section?.getting_around}
      icon={gettingAround}
    />
  );
};

export default GettingAroundHeader;
