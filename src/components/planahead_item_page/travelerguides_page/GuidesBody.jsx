import React from "react";
import HistoryTab from "./Tabs/History/HistoryTab";

const GuidesBody = ({ className }) => {
  return (
    <div className={`max-w-[1300px] mx-auto ${className}`}>
      <HistoryTab />
    </div>
  );
};

export default GuidesBody;
