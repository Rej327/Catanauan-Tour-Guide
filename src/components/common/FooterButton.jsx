import React from "react";

const FooterButton = ({ className, children }) => {
  return (
    <button className={`footerButton ${className}`}>
      <span>{children}</span>
    </button>
  );
};

export default FooterButton;
