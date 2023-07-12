import React from "react";

const SlideArrow = ({ className }) => {
  return (
    <div className={`arrow ${className}`}>
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
};

export default SlideArrow;
