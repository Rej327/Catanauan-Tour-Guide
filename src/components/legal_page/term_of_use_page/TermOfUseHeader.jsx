import React from "react";
import LegalHeader from "../../common/LegalHeader";
import { terms } from "../../../assets";

const TermOfUsuHeader = () => {
  return (
    <div className="px-2">
      <LegalHeader selectedPage="Term of Use" icon={terms} />
    </div>
  );
};

export default TermOfUsuHeader;
