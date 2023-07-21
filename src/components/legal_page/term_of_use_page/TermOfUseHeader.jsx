import React from "react";
import ReusableHeader from "../../common/ReusableHeader";
import { legal } from "../../../assets";

const TermOfUsuHeader = () => {
  return (
    <div className="px-2">
      <ReusableHeader selectedPage="Term of Use" icon={legal} />
    </div>
  );
};

export default TermOfUsuHeader;
