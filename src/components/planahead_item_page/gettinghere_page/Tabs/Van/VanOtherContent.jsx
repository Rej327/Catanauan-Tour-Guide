import React, { useContext } from "react";
import { LangContext } from "../../../../../App";
import { Link } from "react-router-dom";

const VanOtherContent = () => {
  const { language } = useContext(LangContext);
  return (
    <div className="w-full md:w-[300px] lg:w-[400px] bg-[#FCE9CB] flex flex-col gap-4 p-6 mx-auto">
      <p className="font-bold text-lg">
        {language?.plan_page?.getting_here?.by_van?.sub_head}
      </p>
      <p className="text-lg">Lucena Grand Central Terminal - Lucena City</p>
      {language?.plan_page?.getting_here?.by_van?.set_number_0?.map((data) => (
        <div>
          <Link to={data.dial_num}>
            <ul>
              <li className="list-disc mx-2">
                <p className="underline underline-offset-8 hover:no-underline">
                  {data.num}
                </p>
              </li>
            </ul>
          </Link>
        </div>
      ))}
      <p className="text-lg">Laican Gasoline Station - Catanauan, Quezon</p>
      {language?.plan_page?.getting_here?.by_van?.set_number_1?.map((data) => (
        <div>
          <Link to={data.dial_num}>
            <ul>
              <li className="list-disc mx-2">
                <p className="underline underline-offset-8 hover:no-underline">
                  {data.num}
                </p>
              </li>
            </ul>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default VanOtherContent;
