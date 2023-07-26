import React from "react";
import CultureTabs from "./Tabs/CultureTabs";

const CultureBody = ({ className }) => {
  return (
    <div className={`max-w-[1300px] mx-auto ${className}`}>
      <CultureTabs />
    </div>
  );
};

export default CultureBody;
