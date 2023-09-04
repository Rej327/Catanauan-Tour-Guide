import React, { useContext, useMemo } from "react";
import ItemHeader from "../../common/ItemHeader";
import RestoItemContent_1 from "./RestoItemContent_1";
import RestoItemContent_2 from "./RestoItemContent_2";
import { Link, useParams } from "react-router-dom";
import { LangContext } from "../../../App";
import { getDirection } from "../../helper";
import CarouselLike from "../../common/CarouselLike";

const RestoItem = ({ className }) => {
  const { language, startingPoint } = useContext(LangContext);
  const params = useParams();

  const dataInfo = useMemo(() => {
    const data = language?.restaurants_page?.find(
      (data) => data.id == params.id
    );
    return data;
  }, [language, params]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className={`max-w-[1300px] mx-auto ${className}`}>
      <div>
        <ItemHeader
          selectedPage={dataInfo.title}
          category="Restaurants"
          linkPage="/restaurants"
        />
      </div>
      <div>
        <img
          src={dataInfo.img}
          alt={`${dataInfo.title} Image`}
          className="w-full h-[80vh] object-cover"
        />
      </div>
      <div className="px-2 flex flex-wrap justify-between">
        <div className="my-5 px-4">
          <RestoItemContent_1 dataInfo={dataInfo} />
        </div>
        <div className="mx-auto">
          <RestoItemContent_2 dataInfo={dataInfo} />
          <div className="my-5 flex gap-10 w-fit mx-auto mb-10">
            <Link
              to={getDirection(dataInfo.direction, startingPoint)}
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
      <div className="px-2 lg:hidden mt-2 py-5 border-t-[1px] border-gray-300">
        <p className="font-bold text-2xl my-2 px-2 md:px-0">
          You may also like :{" "}
        </p>
        <div className="mb-10 mx-auto w-[320px] md:w-[740px] lg:w-[800px]">
          <CarouselLike>
            {language?.restaurants_page?.map((data) => (
              <Link to={`/restaurants/${data.id}`}>
                <div
                  onClick={scrollToTop}
                  key={data.id}
                  className="rounded-2xl relative restoItems w-fit h-fit"
                >
                  <div className="absolute z-10 bottom-0 bg-black bg-opacity-50 flex px-2 flex-col justify-center items-center w-[250px] h-[75px]">
                    <p className="font-bold text-lg text-[#fefeff] text-center">
                      {data.title}
                    </p>
                    <Link to={`/restaurants/${data.id}`}>
                      <p className="text-[#f9dba9] text-base hover:underline underline-offset-8 hover:cursor-pointer">
                        {data.btn_txt}
                      </p>
                    </Link>
                  </div>
                  <div className="w-[250px] h-[250px] overflow-hidden">
                    <img
                      src={data.img}
                      alt={`${data.title} Image`}
                      className="w-full h-full object-cover itemImg"
                    />
                  </div>
                </div>
              </Link>
            ))}
          </CarouselLike>
        </div>
      </div>
    </div>
  );
};

export default RestoItem;
