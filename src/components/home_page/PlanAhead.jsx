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
import PopOver from "../common/PopOver";

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
                <p className="text-lg">{language.plan_section?.get_the_most}</p>
                <div className="border border-[#676767] w-10 mt-3"></div>
              </div>
            </td>
          </tr>
          <tr>
            <td className="w-[400px] h-[7rem] border border-[#676767]">
              <div className="w-full px-5 flex justify-between items-center">
                <div className="flex pr-10 gap-4 items-center">
                  <img src={guides} alt="icon" className="w-20" />
                  <div className="flex flex-col gap-0">
                    <p className="text-xl font-semibold">
                      {language.plan_section?.traveler_guides}
                    </p>
                    <p className="text-base">
                      {
                        language.plan_section?.inside_data
                          ?.inside_traveler_guides
                      }
                    </p>
                  </div>
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
                  <img src={gettingHere} alt="icon" className="w-24" />
                  <div className="flex flex-col gap-0">
                    <p className="text-xl font-semibold">
                      {language.plan_section?.getting_here}
                    </p>
                    <p className="text-base">
                      {language.plan_section?.inside_data?.inside_getting_here}
                    </p>
                  </div>
                </div>
                <Link to="/getting-here">
                  <ArrowButton className="ml-auto" />
                </Link>
              </div>
            </td>
          </tr>
          <tr>
            <td className="w-[400px] h-[7rem] border border-[#676767]">
              <div className="w-full px-5 flex justify-between items-center">
                <div className="flex pr-10 gap-4 items-center">
                  <img src={gettingAround} alt="icon" className="w-24" />
                  <div className="flex flex-col gap-0">
                    <p className="text-xl font-semibold">
                      {language.plan_section?.getting_around}
                    </p>
                    <div className="flex gap-0">
                      <p className="text-base">
                        {
                          language.plan_section?.inside_data
                            ?.inside_getting_around
                        }
                      </p>
                      <PopOver
                        content={
                          language.plan_section?.inside_data
                            ?.inside_getting_around_more
                        }
                      />
                    </div>
                  </div>
                </div>
                <Link to="/getting-around">
                  <ArrowButton className="ml-auto" />
                </Link>
              </div>
            </td>
          </tr>
          <tr>
            <td className="w-[400px] h-[7rem] border border-[#676767]">
              <div className="w-full px-5 flex justify-between items-center">
                <div className="flex pr-10 gap-4 items-center">
                  <img src={culture} alt="icon" className="w-20" />
                  <div className="flex flex-col gap-0">
                    <p className="text-xl font-semibold">
                      {language.plan_section?.cultures}
                    </p>
                    <div className="flex gap-0">
                      <p className="text-base">
                        {language.plan_section?.inside_data?.inside_cultures}
                      </p>
                      <PopOver
                        content={
                          language.plan_section?.inside_data
                            ?.inside_cultures_more
                        }
                      />
                    </div>
                  </div>
                </div>
                <Link to="/culture">
                  <ArrowButton className="ml-auto" />
                </Link>
              </div>
            </td>
          </tr>
          <tr>
            <td className="w-[400px] h-[7rem] border border-[#676767]">
              <div className="w-full px-5 flex justify-between items-center">
                <div className="flex pr-10 gap-4 items-center">
                  <img src={accomodation} alt="icon" className="w-20" />
                  <div className="flex flex-col gap-0">
                    <p className="text-xl font-semibold">
                      {language.plan_section?.accomodations}
                    </p>
                    <p className="text-base">
                      {language.plan_section?.inside_data?.inside_accomodations}
                    </p>
                  </div>
                </div>
                <Link to="/accommodation">
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
                  <p className="text-lg">
                    {language.plan_section?.get_the_most}
                  </p>
                  <div className="border border-[#676767] w-10 mt-3"></div>
                </div>
              </td>
              <td className="w-[400px] h-[7rem] border border-[#676767]">
                <div className="w-full px-5 flex justify-between items-center">
                  <div className="flex pr-10 gap-4 items-center">
                    <img src={guides} alt="icon" className="w-20" />
                    <div className="flex flex-col gap-0">
                      <p className="text-xl font-semibold max-lg:text-sm">
                        {language.plan_section?.traveler_guides}
                      </p>
                      <p className="text-base">
                        {
                          language.plan_section?.inside_data
                            ?.inside_traveler_guides
                        }
                      </p>
                    </div>
                  </div>
                  <Link to="/traveler-guides">
                    <ArrowButton className="ml-auto" />
                  </Link>
                </div>
              </td>
              <td className="w-[400px] h-[7rem] border border-[#676767]">
                <div className="w-full px-5 flex justify-between items-center">
                  <div className="flex pr-10 gap-4 items-center">
                    <img src={gettingHere} alt="icon" className="w-24" />
                    <div className="flex flex-col gap-0">
                      <p className="text-xl font-semibold max-lg:text-sm">
                        {language.plan_section?.getting_here}
                      </p>
                      <p className="text-base">
                        {
                          language.plan_section?.inside_data
                            ?.inside_getting_here
                        }
                      </p>
                    </div>
                  </div>
                  <Link to="/getting-here">
                    <ArrowButton className="ml-auto" />
                  </Link>
                </div>
              </td>
            </tr>
            <tr>
              <td className="w-[400px] h-[7rem] border border-[#676767]">
                <div className="w-full px-5 flex justify-between items-center">
                  <div className="flex pr-10 gap-4 items-center">
                    <img src={gettingAround} alt="icon" className="w-24" />
                    <div className="flex flex-col gap-0">
                      <p className="text-xl font-semibold">
                        {language.plan_section?.getting_around}
                      </p>
                      <div className="flex gap-0">
                        <p className="text-base">
                          {
                            language.plan_section?.inside_data
                              ?.inside_getting_around
                          }
                        </p>
                        <PopOver
                          content={
                            language.plan_section?.inside_data
                              ?.inside_getting_around_more
                          }
                        />
                      </div>
                    </div>
                  </div>
                  <Link to="/getting-around">
                    <ArrowButton className="ml-auto" />
                  </Link>
                </div>
              </td>
              <td className="w-[400px] h-[7rem] border border-[#676767]">
                <div className="w-full px-5 flex justify-between items-center">
                  <div className="flex pr-10 gap-4 items-center">
                    <img src={culture} alt="icon" className="w-20" />
                    <div className="flex flex-col gap-0">
                      <p className="text-xl font-semibold max-lg:text-sm">
                        {language.plan_section?.cultures}
                      </p>
                      <div className="flex gap-0">
                        <p className="text-base">
                          {language.plan_section?.inside_data?.inside_cultures}
                        </p>
                        <PopOver
                          content={
                            language.plan_section?.inside_data
                              ?.inside_cultures_more
                          }
                        />
                      </div>
                    </div>
                  </div>
                  <Link to="/culture">
                    <ArrowButton className="ml-auto" />
                  </Link>
                </div>
              </td>
              <td className="w-[400px] h-[7rem] border border-[#676767]">
                <div className="w-full px-5 flex justify-between items-center">
                  <div className="flex pr-10 gap-4 items-center">
                    <img src={accomodation} alt="icon" className="w-20" />
                    <div className="flex flex-col gap-0">
                      <p className="text-xl font-semibold max-lg:text-sm">
                        {language.plan_section?.accomodations}
                      </p>
                      <p className="text-base">
                        {
                          language.plan_section?.inside_data
                            ?.inside_accomodations
                        }
                      </p>
                    </div>
                  </div>
                  <Link to="/accommodation">
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
