import React, { useContext } from "react";
import { LangContext } from "../../../App";
import { culture } from "../../../assets";
import PlanHeader from "../../common/PlanHeader";

const CultureHeader = () => {
  const { language } = useContext(LangContext);

  return (
    <PlanHeader selectedPage={language.plan_section?.cultures} icon={culture} />
  );
};

export default CultureHeader;
