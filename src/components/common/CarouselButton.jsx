import React from "react";

const CarouselButton = ({ className, onClick }) => {
  return (
    <div>
      <button
        className={`bg-[#F9DBA9] w-10 h-10 rounded-full text-2xl flex justify-center ${className}`}
        onClick={onClick}
      >
        &#8594;
      </button>
    </div>
  );
};

export default CarouselButton;
