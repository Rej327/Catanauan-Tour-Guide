import React, { useContext } from "react";
import { logo, mail } from "../../assets";
import Button from "./Button";
import FooterButton from "./FooterButton";
import { CiFacebook } from "react-icons/ci";
import { LangContext } from "../../App";
import { Link } from "react-router-dom";

const Footer = ({ className }) => {
  const { language } = useContext(LangContext);

  const handleScrollClick = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView();
    }
  };

  return (
    <div className={`w-full ${className}`}>
      <div className="w-full bg-[#FCE9CB] rounded-t-2xl">
        <div className="max-w-[1300px] px-2 py-10 mx-auto flex flex-wrap gap-10 items-center justify-center">
          <img src={mail} alt="mail.svg" className="w-[70px] mb-auto" />
          <div className="flex flex-wrap justify-center items-center gap-5 lg:gap-10">
            <div className="max-w-[400px] lg:max-w-[800px] flex flex-col gap-4">
              <p className="text-4xl font-bold">
                Travel Inspiration in your inbox?
              </p>
              <p>
                Subscribe now to receive destination, inspiration, travel tips,
                upcoming events and all the best things to do around Catanauan.
              </p>
            </div>
            <div className="w-fit md:mt-auto">
              <Button
                className="bg-[#F9DBA9] text-black tracking-wider px-6 pt-4 pb-2"
                label="Subscribe"
              />
            </div>
          </div>
        </div>
        {/* LAST SECTION */}
        <div className="w-full flex flex-col gap-2 pt-10 pb-2 bg-[#F9DBA9] px-2 rounded-t-2xl">
          <div className="max-w-[1300px] mx-auto">
            <div className="max-w-[1300px] lg:w-[1300px] md:justify-center lg:justify-between flex flex-wrap gap-8 lg:gap-0">
              <div className="flex flex-col max-w-[400px]">
                <p className="font-bold tracking-wider text-sm">Discover</p>
                <div className="grid grid-cols-2 justify-around gap-2 mt-4">
                  <p
                    onClick={() => handleScrollClick("resorts")}
                    className="text-base first-letter:capitalize hover:underline underline-offset-8 cursor-pointer"
                  >
                    {language.category?.resorts}
                  </p>
                  <p
                    onClick={() => handleScrollClick("hotelandresto")}
                    className="text-base first-letter:capitalize hover:underline underline-offset-8 cursor-pointer"
                  >
                    {language.category?.hotels}
                  </p>
                  <p
                    onClick={() => handleScrollClick("hotelandresto")}
                    className="text-base first-letter:capitalize hover:underline underline-offset-8 cursor-pointer"
                  >
                    {language.category?.restaurants}
                  </p>
                  <p
                    onClick={() => handleScrollClick("falls")}
                    className="text-base first-letter:capitalize hover:underline underline-offset-8 cursor-pointer"
                  >
                    {language.category?.falls}
                  </p>
                  <p
                    onClick={() => handleScrollClick("banks")}
                    className="text-base first-letter:capitalize hover:underline underline-offset-8 cursor-pointer"
                  >
                    {language.category?.banks}
                  </p>
                  <p
                    onClick={() => handleScrollClick("transportation")}
                    className="text-base first-letter:capitalize hover:underline underline-offset-8 cursor-pointer"
                  >
                    {language.category?.transportation}
                  </p>
                </div>
              </div>
              {/* NEXT ITEM */}
              <div className="flex flex-col max-w-[400px]">
                <p className="font-bold tracking-wider text-sm">Useful Links</p>
                <div className="text-base grid grid-cols-2 justify-around gap-2 mt-4">
                  <p className="text-base first-letter:capitalize hover:underline underline-offset-8 cursor-pointer">
                    What's on
                  </p>
                  <p className="text-base first-letter:capitalize hover:underline underline-offset-8 cursor-pointer">
                    {language.plan_section?.traveler_guides}
                  </p>
                  <p className="text-base first-letter:capitalize hover:underline underline-offset-8 cursor-pointer">
                    {language.plan_section?.getting_here}
                  </p>
                  <p className="text-base first-letter:capitalize hover:underline underline-offset-8 cursor-pointer">
                    {language.plan_section?.getting_around}
                  </p>
                  <p className="text-base first-letter:capitalize hover:underline underline-offset-8 cursor-pointer">
                    {language.plan_section?.cultures}
                  </p>
                  <p className="text-base first-letter:capitalize hover:underline underline-offset-8 cursor-pointer">
                    {language.plan_section?.accomodation}
                  </p>
                </div>
              </div>
              {/* NEXT ITEM */}
              <div className="flex flex-col max-w-[400px]">
                <p className="font-bold tracking-wider text-sm">Legal</p>
                <div className="text-base grid grid-cols-1 justify-around gap-2 mt-4">
                  <Link to="/term-of-use">
                    <p className="text-base first-letter:capitalize hover:underline underline-offset-8 cursor-pointer">
                      Terms of use
                    </p>
                  </Link>
                  <Link to="/cookie-policy">
                    <p className="text-base first-letter:capitalize hover:underline underline-offset-8 cursor-pointer">
                      Cookie policy
                    </p>
                  </Link>
                  <Link to="/accesibility">
                    <p className="text-base first-letter:capitalize hover:underline underline-offset-8 cursor-pointer">
                      Accesibility
                    </p>
                  </Link>
                </div>
              </div>
              <div className="flex flex-col gap-4 max-w-[200px] items-center">
                <p className="font-bold text-center text-3xl">
                  Where to stay in Catanauan
                </p>
                <div className="w-fit">
                  <FooterButton>Accomodation</FooterButton>
                </div>
              </div>
            </div>
            <div className="max-w-[1300px] mt-10 mx-auto flex flex-wrap gap-4 max-sm:flex-col-reverse justify-between">
              <div className="w-fit flex flex-col gap-2">
                <div className="flex gap-1 justify-center items-center max-sm:mt-5">
                  <img src={logo} className="w-20" alt="logo" />
                  <p className="w-[150px] font-bold">
                    Catanauan, Quezon Travel Guide
                  </p>
                </div>
                <p className="font-bold text-sm">© 2023. All rights reserved</p>
              </div>
              <div className=" w-fit md:mt-auto">
                <p className="font-bold tracking-widest">
                  FIND AND FOLLOW DISCOVER CATANAUAN
                </p>
                <CiFacebook className="text-[3rem] text-[#012854] md:mx-auto   lg:mb-o hover:text-blue-700 duration-300 delay-75 cursor-pointer hover:translate-y-1" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
