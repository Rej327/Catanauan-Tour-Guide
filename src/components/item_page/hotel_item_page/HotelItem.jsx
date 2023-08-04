import React, { useContext, useEffect, useMemo } from "react";
import ItemHeader from "../../common/ItemHeader";
import { banks } from "../../../assets";
import HotelItemContent_1 from "./HotelItemContent_1";
import HotelItemContent_2 from "./HotelItemContent_2";
import Map from "../../common/Map";
import { Link, useParams } from "react-router-dom";
import { LangContext } from "../../../App";
import { getDirection } from "../../helper";
import Carousel from "../../common/Carousel";

const HotelItem = ({ className }) => {
  const { language, startingPoint } = useContext(LangContext);
  const params = useParams();

  const dataInfo = useMemo(() => {
    const data = language?.hotels_page?.find((data) => data.id == params.id);
    return data;
  }, [language, params]);

  console.log(dataInfo?.gallery?.rooms);

  return (
    <div className={`max-w-[1300px] mx-auto ${className}`}>
      <div>
        <ItemHeader
          selectedPage={dataInfo.title}
          category="Hotel"
          linkPage="/hotels"
        />
      </div>
      <div>
        <img
          src={dataInfo.img}
          alt={`${dataInfo.title} Image`}
          className="w-full h-[80vh] object-cover"
        />
      </div>
      <div className="flex flex-wrap justify-between">
        <div className="my-10 px-4">
          <HotelItemContent_1 dataInfo={dataInfo} />
        </div>
        <div className="mx-auto">
          <HotelItemContent_2 dataInfo={dataInfo} />
          <div className="my-5 flex gap-10 w-fit mx-auto mb-10">
            <Link
              to={getDirection(dataInfo.direction_link, startingPoint)}
              target="_blank"
            >
              <button className="bg-none border-[1px] border-[#f1be66] rounded-full px-4 py-2 hover:bg-[#f1be66] duration-300 delay-75">
                <p className="text-base w-[120px]">
                  {dataInfo.direction_txt} &#8594;
                </p>
              </button>
            </Link>
            <Link to={dataInfo.btn_visit_link} target="_blank">
              <button className="bg-none border-[1px] border-[#f1be66] rounded-full px-4 py-2 hover:bg-[#f1be66] duration-300 delay-75">
                <p className="text-base w-[120px]">Book Now &#8594;</p>
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className="lg:hidden mt-2 py-5 border-t-[1px] border-gray-300">
        <p className="font-bold text-2xl my-2">You may also like : </p>
        <div className="mx-auto w-[320px] md:w-[400px] lg:w-[800px]">
          <Carousel>
            {language?.hotels_page.map((data) => (
              <Link to={`/hotels/${data.id}`}>
                <div key={data.id} className="px-5">
                  <img
                    src={data.img}
                    className="w-[250px] h-[200px]"
                    alt="resorts"
                  />
                  <div className="w-full bg-white">
                    <p>{data.title}</p>
                  </div>
                </div>
              </Link>
            ))}
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default HotelItem;
