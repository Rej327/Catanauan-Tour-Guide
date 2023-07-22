import React from "react";
import ReusableHeader from "../../common/ReusableHeader";
import { cookie } from "../../../assets";

const CookieHeader = () => {
  return (
    <div>
      <ReusableHeader selectedPage="Cookie Policy" icon={cookie} />
    </div>
  );
};

export default CookieHeader;
