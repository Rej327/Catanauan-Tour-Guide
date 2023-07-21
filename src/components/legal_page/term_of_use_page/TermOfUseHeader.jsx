import React from "react";
import ReusableHeader from "../../common/ReusableHeader";
import { terms } from "../../../assets";

const TermOfUsuHeader = () => {
  return (
    <div className="px-2">
      <ReusableHeader selectedPage="Term of Use" icon={terms} />
    </div>
  );
};

export default TermOfUsuHeader;
