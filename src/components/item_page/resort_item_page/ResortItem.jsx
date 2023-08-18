import React, { useContext, useMemo } from "react";
import ItemHeader from "../../common/ItemHeader";
import ResortItemContent_1 from "./ResortItemContent_1";
import ResortItemContent_2 from "./ResortItemContent_2";
import Map from "../../common/Map";
import { Link, useParams } from "react-router-dom";
import { LangContext } from "../../../App";
import { getDirection } from "../../helper";

const ResortItem = ({ className }) => {
  const { language, startingPoint } = useContext(LangContext);
  const params = useParams();

  const dataInfo = useMemo(() => {
    const data = language?.resorts_page?.find((data) => data.id == params.id);
    return data;
  }, [language, params]);
  return (
    <div className={`max-w-[1300px] mx-auto ${className}`}>
      <div>
        <ItemHeader
          selectedPage={dataInfo.title}
          category="Resorts"
          linkPage="/resorts"
        />
      </div>
      <div className="flex flex-wrap justify-between">
        <div className=" px-2">
          <ResortItemContent_1 dataInfo={dataInfo} />
        </div>
        <div className="mx-auto">
          <ResortItemContent_2 dataInfo={dataInfo} />
          <div className="my-5 mb-10 flex flex-wrap justify-center items-center md:justify-evenly gap-4">
            <Link
              to={getDirection(dataInfo.direction, startingPoint)}
              target="_blank"
            >
              <button className="bg-none w-[150px] border-[1px] border-[#f1be66] rounded-full px-4 py-2 hover:bg-[#f1be66] duration-300 delay-75">
                <p className="text-base">Get Direction &#8594;</p>
              </button>
            </Link>
            <Link to={dataInfo.fb_link} target="_blank">
              <button className="bg-none w-[150px] border-[1px] border-[#f1be66] rounded-full px-4 py-2 hover:bg-[#f1be66] duration-300 delay-75">
                <p className="text-base">Book Now &#8594;</p>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResortItem;
