import React from "react";
import FiestaTab from "./Tabs/Fiesta/FiestaTab";

const CultureBody = ({ className }) => {
  return (
    <div className={`max-w-[1300px] mx-auto ${className}`}>
      <FiestaTab />
    </div>
  );
};

export default CultureBody;
