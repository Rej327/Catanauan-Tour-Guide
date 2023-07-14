import React from "react";
import { logo, mail } from "../../assets";
import Button from "./Button";
import FooterButton from "./FooterButton";
import { CiFacebook } from "react-icons/ci";

const Footer = ({ className }) => {
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
            <div className="max-w-[1300px] md:justify-center lg:justify-between flex flex-wrap gap-8 lg:gap-[8rem]">
              <div className="flex flex-col max-w-[300px]">
                <p className="font-bold tracking-wider text-sm">Discover</p>
                <div className="text-base grid grid-cols-2 justify-around gap-2 mt-4">
                  <p>Resorts</p>
                  <p>Hotels</p>
                  <p>Restaurants</p>
                  <p>Banks</p>
                  <p>Falls</p>
                  <p>Transportation</p>
                </div>
              </div>
              {/* NEXT ITEM */}
              <div className="flex flex-col max-w-[300px]">
                <p className="font-bold tracking-wider text-sm">Useful Links</p>
                <div className="text-base grid grid-cols-2 justify-around gap-2 mt-4">
                  <p>What's on</p>
                  <p>Travel guides</p>
                  <p>Getting here</p>
                  <p>Getting around</p>
                  <p>Culture</p>
                  <p>Accomodation</p>
                </div>
              </div>
              {/* NEXT ITEM */}
              <div className="flex flex-col max-w-[300px]">
                <p className="font-bold tracking-wider text-sm">Legal</p>
                <div className="text-base grid grid-cols-2 justify-around gap-2 mt-4">
                  <p>Terms of use</p>
                  <p>Cookie policy</p>
                  <p>Accesibility</p>
                  <p>Consumer Privacy</p>
                </div>
              </div>
              <div className="flex flex-col gap-4 max-w-[200px] items-center">
                <p className="font-bold text-center text-3xl">
                  Where to stay in Catanauan
                </p>
                <div className="w-fit">
                  <FooterButton />
                </div>
              </div>
            </div>
            <div className="max-w-[1300px] mt-10 mx-auto flex flex-wrap gap-4 max-sm:flex-col-reverse justify-between">
              <div className="w-fit flex flex-col gap-2">
                <div className="flex gap-1 justify-center items-center">
                  <img src={logo} className="w-20" alt="logo" />
                  <p className="w-[150px] font-bold">
                    Catanauan, Quezon Travel Guide
                  </p>
                </div>
                <p className="font-bold text-sm">© 2023. All rights reserved</p>
              </div>
              <div className="w-fit flex flex-col gap-2">
                <p className="font-bold tracking-widest">
                  FIND AND FOLLOW DISCOVER CATANAUAN
                </p>
                <CiFacebook className="text-5xl text-[#012854] md:mx-auto mb-5 hover:text-blue-700 duration-300 delay-75 cursor-pointer hover:translate-y-1" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
