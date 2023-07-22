import React from "react";
import ReusableHeader from "../../common/ReusableHeader";
import { accesibility } from "../../../assets";

const AccesibilityHeader = () => {
  return (
    <div>
      <ReusableHeader selectedPage="Accesibility" icon={accesibility} />
    </div>
  );
};

export default AccesibilityHeader;
