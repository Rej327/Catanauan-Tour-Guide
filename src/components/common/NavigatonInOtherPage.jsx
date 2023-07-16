import React from "react";
import NavigationToggle from "./NavigationToogle";
import FooterButton from "./FooterButton";
import SearchBar from "./SearchBar";

const NavigatonInOtherPage = () => {
  return (
    <div>
      <div className="w-full bg-[#FCE9CB] rounded-b-2xl pb-2 mb-10">
        <div className="w-full bg-[#F9DBA9]  rounded-b-2xl">
          <div className="max-w-[1300px] mx-auto px-2 flex justify-between items-center py-7 lg:py-14">
            <p className="text-3xl font-header">DiscoverCatanauan</p>
            <SearchBar
              containerStyle="hidden lg:block w-[800px]"
              className="hidden lg:block w-[800px] bg-white focus:text-black placeholder:text-black"
              iconStyle="bodyColor"
            />
            <div className="flex gap-5 items-center">
              <FooterButton className="hidden lg:flex">
                What's Nearby
              </FooterButton>
              <NavigationToggle />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavigatonInOtherPage;
