import React, { useContext } from "react";
import { LangContext } from "../../../../../App";
import { Link } from "react-router-dom";

const BusOtherContent = () => {
  const { language } = useContext(LangContext);
  return (
    <div className="w-full md:w-[300px] lg:w-[400px] bg-[#FCE9CB] flex flex-col gap-4 p-6 mx-auto">
      <p className="font-bold text-lg">
        {language?.plan_page?.getting_here?.by_bus?.other_title}
      </p>
      {language?.plan_page?.getting_here?.by_bus?.routes_links?.map((data) => (
        <div>
          <Link to={data.links} target="_blank">
            <ul>
              <li className="list-disc">
                <p className="text-lg underline underline-offset-8 hover:no-underline">
                  {data.routes}
                </p>
              </li>
            </ul>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default BusOtherContent;
