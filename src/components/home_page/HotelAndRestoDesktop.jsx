import React, { useState, useEffect, useContext } from "react";
import { useRef } from "react";
import { useMediaQuery } from "react-responsive";
import { Link, useNavigate } from "react-router-dom";
import { LangContext } from "../../App";

const HotelAndRestoDesktop = () => {
  const { language } = useContext(LangContext);
  const [currentSection, setCurrentSection] = useState(1);
  const router = useNavigate();
  const sectionRef = useRef();

  useEffect(() => {
    const handleScroll = () => {
      if (
        sectionRef.current &&
        window.scrollY + window.innerHeight >=
          sectionRef.current.offsetTop + sectionRef.current.clientHeight
      ) {
        setCurrentSection(currentSection + 1);

        if (currentSection === 3) {
          router.push("/next-section");
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [sectionRef, currentSection, router]);

  const ScrollableSection = ({ children }) => {
    const isMobile = useMediaQuery({ maxWidth: 767 });

    return (
      <div
        ref={sectionRef}
        className={`ScrollableSection bg-[url(./assets/HotelAndResto/hotelandresto.jpg)] bg-fixed w-auto bg-cover bg-center h-screen  overflow-y-scroll ${
          isMobile ? "md:overflow-y-hidden" : ""
        }`}
      >
        <div className="bg-black bg-opacity-60 w-full h-screen">{children}</div>
      </div>
    );
  };

  return (
    <div className="mt-10 fixed-background-section ">
      <ScrollableSection>
        <div className="h-screen w-full flex justify-center items-center">
          <div className="relative h-screen flex items-center flex-col justify-center">
            <p className="font-title max-w-[700px] px-2 text-center text-[#ececec] text-4xl tracking-wide">
              {language?.hotel_resto_section?.cover}
            </p>
          </div>
        </div>
      </ScrollableSection>
      <ScrollableSection>
        <div
          id="hotel"
          className="h-screen w-full flex justify-center items-center"
        >
          <div
            data-aos="fade-up"
            data-aos-anchor-placement="top-center"
            data-aos-duration="500"
            className="mx-4 relative border-[1px] p-10 flex items-center flex-col justify-center"
          >
            <p className="font-title max-w-[700px] px-2 text-center text-[#ececec] text-2xl tracking-wide">
              {language?.hotel_resto_section?.hotel_content}
            </p>
            <Link to="/hotels">
              <p className="mt-10 text-base text-[#ececec] underline underline-offset-8 hover:no-underline">
                {language?.hotel_resto_section?.btn_txt_hotel}
              </p>
            </Link>
          </div>
        </div>
      </ScrollableSection>
      <ScrollableSection>
        <div
          id="resto"
          className="h-screen w-full flex justify-center items-center"
        >
          <div
            data-aos="fade-up"
            data-aos-anchor-placement="top-center"
            data-aos-duration="500"
            className="mx-4 relative border-[1px] p-10 flex items-center flex-col justify-center"
          >
            <p className="font-title max-w-[700px] px-2 text-center text-[#ececec] text-2xl tracking-wide">
              {language?.hotel_resto_section?.resto_content}
            </p>
            <Link to="/restaurants">
              <p className="mt-10 text-base text-[#ececec] underline underline-offset-8 hover:no-underline">
                {language?.hotel_resto_section?.btn_txt_resto}
              </p>
            </Link>
          </div>
        </div>
      </ScrollableSection>
    </div>
  );
};

export default HotelAndRestoDesktop;
