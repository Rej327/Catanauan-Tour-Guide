import React, { useContext } from "react";
import {
  guides,
  gettingAround,
  gettingHere,
  culture,
  accomodation,
} from "../../assets";
import ArrowButton from "../common/ArrowButton";
import { LangContext } from "../../App";
import { Link } from "react-router-dom";

const PlanAhead = ({ className }) => {
  const { language } = useContext(LangContext);

  return (
    <>
      {/* MAX SMARTPHONE SCREEN */}
      <div className={`max-w-[1300px] mx-auto sm:hidden ${className}`}>
        <table className="mx-auto">
          <tr>
            <td className="w-[400px] h-[7rem]">
              <div className="font-body">
                <p className="text-xl font-semibold mb-2">
                  {language.plan_section?.plan_a_head}
                </p>
                <p>{language.plan_section?.get_the_most}</p>
                <div className="border border-[#676767] w-10 mt-3"></div>
              </div>
            </td>
          </tr>
          <tr>
            <td className="w-[400px] h-[7rem] border border-[#676767]">
              <div className="w-full px-5 flex justify-between items-center">
                <div className="flex pr-10 gap-4 items-center">
                  <img src={guides} alt="icon" className="w-16" />
                  <p className="text-xl font-semibold">
                    {language.plan_section?.traveler_guides}
                  </p>
                </div>
                <Link to="/traveler-guides">
                  <ArrowButton className="ml-auto" />
                </Link>
              </div>
            </td>
          </tr>
          <tr>
            <td className="w-[400px] h-[7rem] border border-[#676767]">
              <div className="w-full px-5 flex justify-between items-center">
                <div className="flex pr-10 gap-4 items-center">
                  <img src={gettingHere} alt="icon" className="w-16" />
                  <p className="text-xl font-semibold">
                    {language.plan_section?.getting_here}
                  </p>
                </div>
                <ArrowButton className="ml-auto" />
              </div>
            </td>
          </tr>
          <tr>
            <td className="w-[400px] h-[7rem] border border-[#676767]">
              <div className="w-full px-5 flex justify-between items-center">
                <div className="flex pr-10 gap-4 items-center">
                  <img src={gettingAround} alt="icon" className="w-16" />
                  <p className="text-xl font-semibold">
                    {language.plan_section?.getting_around}
                  </p>
                </div>
                <ArrowButton className="ml-auto" />
              </div>
            </td>
          </tr>
          <tr>
            <td className="w-[400px] h-[7rem] border border-[#676767]">
              <div className="w-full px-5 flex justify-between items-center">
                <div className="flex pr-10 gap-4 items-center">
                  <img src={culture} alt="icon" className="w-16" />
                  <p className="text-xl font-semibold">
                    {language.plan_section?.cultures}
                  </p>
                </div>
                <ArrowButton className="ml-auto" />
              </div>
            </td>
          </tr>
          <tr>
            <td className="w-[400px] h-[7rem] border border-[#676767]">
              <div className="w-full px-5 flex justify-between items-center">
                <div className="flex pr-10 gap-4 items-center">
                  <img src={accomodation} alt="icon" className="w-16" />
                  <p className="text-xl font-semibold">
                    {language.plan_section?.accomodations}
                  </p>
                </div>
                <Link to="/accomodation">
                  <ArrowButton className="ml-auto" />
                </Link>
              </div>
            </td>
          </tr>
        </table>
      </div>

      {/* MIN DESKTOP SCREEN */}
      <div className={`max-w-[1300px] mx-auto max-sm:hidden ${className}`}>
        <table className="mx-auto">
          <tbody>
            <tr>
              <td className="w-[400px] h-[7rem]">
                <div className="font-body">
                  <p className="text-xl font-semibold max-lg:text-sm mb-2">
                    {language.plan_section?.plan_a_head}
                  </p>
                  <p>{language.plan_section?.get_the_most}</p>
                  <div className="border border-[#676767] w-10 mt-3"></div>
                </div>
              </td>
              <td className="w-[400px] h-[7rem] border border-[#676767]">
                <div className="w-full px-5 flex justify-between items-center">
                  <div className="flex pr-10 gap-4 items-center">
                    <img src={guides} alt="icon" className="w-16" />
                    <p className="text-xl font-semibold max-lg:text-sm">
                      {language.plan_section?.traveler_guides}
                    </p>
                  </div>
                  <Link to="/traveler-guides">
                    <ArrowButton className="ml-auto" />
                  </Link>
                </div>
              </td>
              <td className="w-[400px] h-[7rem] border border-[#676767]">
                <div className="w-full px-5 flex justify-between items-center">
                  <div className="flex pr-10 gap-4 items-center">
                    <img src={gettingHere} alt="icon" className="w-16" />
                    <p className="text-xl font-semibold max-lg:text-sm">
                      {language.plan_section?.getting_here}
                    </p>
                  </div>
                  <ArrowButton className="ml-auto" />
                </div>
              </td>
            </tr>
            <tr>
              <td className="w-[400px] h-[7rem] border border-[#676767]">
                <div className="w-full px-5 flex justify-between items-center">
                  <div className="flex pr-10 gap-4 items-center">
                    <img src={gettingAround} alt="icon" className="w-16" />
                    <p className="text-xl font-semibold max-lg:text-sm">
                      {language.plan_section?.getting_around}
                    </p>
                  </div>
                  <ArrowButton className="ml-auto" />
                </div>
              </td>
              <td className="w-[400px] h-[7rem] border border-[#676767]">
                <div className="w-full px-5 flex justify-between items-center">
                  <div className="flex pr-10 gap-4 items-center">
                    <img src={culture} alt="icon" className="w-16" />
                    <p className="text-xl font-semibold max-lg:text-sm">
                      {language.plan_section?.cultures}
                    </p>
                  </div>
                  <ArrowButton className="ml-auto" />
                </div>
              </td>
              <td className="w-[400px] h-[7rem] border border-[#676767]">
                <div className="w-full px-5 flex justify-between items-center">
                  <div className="flex pr-10 gap-4 items-center">
                    <img src={accomodation} alt="icon" className="w-16" />
                    <p className="text-xl font-semibold max-lg:text-sm">
                      {language.plan_section?.accomodations}
                    </p>
                  </div>
                  <Link to="/accomodation">
                    <ArrowButton className="ml-auto" />
                  </Link>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default PlanAhead;
