import React from "react";
import "../../styles/button.css";

const Button = ({ label, className }) => {
  return (
    // <buton className="bg-[#F1BE66] text-black p-4 font-body">What's On</buton>
    <button className={`button font-body ${className}`} role="button">
      {label}
    </button>
  );
};

export default Button;
