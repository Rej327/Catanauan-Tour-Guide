import React from "react";

const ArrowButton = ({ className }) => {
  return (
    <div>
      <button
        className={`bg-[#F9DBA9] w-10 h-10 rounded-full text-2xl  flex justify-center ${className}`}
      >
        &#8594;
      </button>
    </div>
  );
};

export default ArrowButton;
