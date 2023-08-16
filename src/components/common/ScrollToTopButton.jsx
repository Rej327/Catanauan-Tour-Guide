import React, { useState, useEffect } from "react";
import { BsFillTriangleFill } from "react-icons/bs";

function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 160) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <div className={`scroll-to-top ${isVisible ? "visible" : ""}`}>
      <div
        onClick={scrollToTop}
        className="p-4 rounded-full bg-[#012854] bg-opacity-90 cursor-pointer hover:-translate-y-2 duration-300 delay-75"
      >
        <BsFillTriangleFill className="text-white opacity-90" />
      </div>
    </div>
  );
}

export default ScrollToTopButton;
