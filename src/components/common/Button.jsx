import React from "react";
import "../../styles/button.css";

const Button = ({ label, className, onClick }) => {
  return (
    // <buton className="bg-[#F1BE66] text-black p-4 font-body">What's On</buton>
    <div>
      <button className={`revButton font-body ${className}`} onClick={onClick}>
        {label}
      </button>
    </div>
  );
};

export default Button;
