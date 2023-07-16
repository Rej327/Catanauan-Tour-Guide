import React from "react";

import { BsChevronCompactDown } from "react-icons/bs";

const ArrowDown = ({ className }) => {
  const handleScroll = () => {
    window.scrollTo({
      top: window.innerHeight,
    });
  };
  return (
    <BsChevronCompactDown
      onClick={handleScroll}
      className={`text-white opacity-60 mx-auto text-6xl hover:opacity-100 duration-300 delay-75 cursor-pointer ${className}`}
    />
  );
};

export default ArrowDown;
