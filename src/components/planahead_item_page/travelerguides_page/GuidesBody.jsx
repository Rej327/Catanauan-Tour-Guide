import React from "react";
import GuidesTab from "./Tabs/GuidesTab";

const GuidesBody = ({ className }) => {
  return (
    <div className={`max-w-[1300px] mx-auto ${className}`}>
      <GuidesTab />
    </div>
  );
};

export default GuidesBody;
