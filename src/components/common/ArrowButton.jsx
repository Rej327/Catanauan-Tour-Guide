import React from "react";

const ArrowButton = ({ className, onClick }) => {
  return (
    <div>
      <button
        className={`arrowButton bg-[#F9DBA9] w-10 h-10 rounded-full text-2xl flex justify-center ${className}`}
        onClick={onClick}
      >
        &#8594;
      </button>
    </div>
  );
};

export default ArrowButton;
