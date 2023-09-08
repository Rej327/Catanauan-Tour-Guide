import React, { useContext } from "react";
import FooterButton from "./FooterButton";
import SearchBar from "./SearchBar";
import NavigationToogle from "./NavigationToogle";
import { Link } from "react-router-dom";
import { LangContext } from "../../App";

const NavigatonInOtherPage = () => {
  const { language } = useContext(LangContext);
  return (
    <div>
      <div className="w-full bg-[#FCE9CB] rounded-b-2xl pb-2 mb-2">
        <div className="w-full bg-[#F9DBA9]  rounded-b-2xl">
          <div className="max-w-[1300px] mx-auto px-2 flex justify-between items-center py-7 lg:py-14">
            <Link to="/">
              <p className="text-3xl font-header">DiscoverCatanauan</p>
            </Link>
            {/* <SearchBar
              containerStyle="hidden lg:block w-[800px]"
              className="hidden lg:block w-[800px] bg-white focus:text-black placeholder:text-black"
              iconStyle="bodyColor"
            /> */}
            <div className="flex gap-5 items-center">
              <Link to="https://goo.gl/maps/cUbvaPVpQQsL4dqe8" target="_blank">
                <FooterButton className="hidden lg:flex">
                  {language.navigation?.nearby}
                </FooterButton>
              </Link>
              <NavigationToogle />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavigatonInOtherPage;
