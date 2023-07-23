import React from "react";
import LegalHeader from "../../common/LegalHeader";
import { cookie } from "../../../assets";

const CookieHeader = () => {
  return (
    <div>
      <LegalHeader selectedPage="Cookie Policy" icon={cookie} />
    </div>
  );
};

export default CookieHeader;
