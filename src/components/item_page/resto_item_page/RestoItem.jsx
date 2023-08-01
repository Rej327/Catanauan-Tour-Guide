import React, { useContext, useEffect, useMemo, useState } from "react";
import ItemHeader from "../../common/ItemHeader";
import { banks, rc1 } from "../../../assets";
import RestoItemContent_1 from "./RestoItemContent_1";
import RestoItemContent_2 from "./RestoItemContent_2";
import Map from "../../common/Map";
import { Link, useParams } from "react-router-dom";
import { LangContext } from "../../../App";
import { data } from "autoprefixer";
import { getDirection } from "../../helper";

const RestoItem = ({ className }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // const [viewPrice, setViewPrice] = useState(false);
  const { language, startingPoint } = useContext(LangContext);
  const params = useParams();

  const dataInfo = useMemo(() => {
    const data = language?.restaurants_page.category_all?.find(
      (data) => data.id == params.id
    );
    return data;
  }, [language, params]);

  console.log(dataInfo);

  return (
    <div className={`max-w-[1300px] mx-auto ${className}`}>
      <div>
        <ItemHeader
          selectedPage={dataInfo.title}
          category="Restaurant"
          linkPage="/restaurants"
        />
      </div>
      <div>
        <img
          src={dataInfo.img}
          alt={`${dataInfo.title} Image`}
          className="w-full h-[60vh] object-cover"
        />
      </div>
      <div className="flex flex-wrap justify-between">
        <div className="my-10 px-4">
          <RestoItemContent_1 dataInfo={dataInfo} />
        </div>
        <div className="mx-auto">
          <RestoItemContent_2
            number={dataInfo.number}
            callNumber={dataInfo.callNumber}
            address={dataInfo.address}
            loc_link={dataInfo.add_link}
            fbPage={dataInfo.fbPage}
            hrs1={dataInfo.hrs1}
            hrs2={dataInfo.hrs2}
            hrs3={dataInfo.hrs3}
            hrs4={dataInfo.hrs4}
            hrs5={dataInfo.hrs5}
            hrs6={dataInfo.hrs6}
            hrs7={dataInfo.hrs7}
          />
          <Map />
          <div className="my-5 w-fit mx-auto mb-10">
            <Link
              to={getDirection(dataInfo.direction, startingPoint)}
              target="_blank"
            >
              <button className="bg-none border-[1px] border-[#f1be66] rounded-full px-4 py-2 hover:bg-[#f1be66] duration-300 delay-75">
                <p className="text-base">Get Direction &#8594;</p>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RestoItem;
