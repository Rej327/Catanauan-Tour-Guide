import { Collapse } from "@chakra-ui/react";
import React, { useContext, useState } from "react";
import Carousel from "../../common/Carousel";
import { LangContext } from "../../../App";
import { ImLocation } from "react-icons/im";
import CarouselLike from "../../common/CarouselLike";
import { Link } from "react-router-dom";
import GalleryModal from "../../common/GalleryModal";
import ResortsPricesModal from "../../common/PricesModal";

const ResortItemContent_1 = ({ dataInfo }) => {
  const [show, setShow] = useState(false);
  const [show_1, setShow_1] = useState(false);

  const handleToggle = () => setShow(!show);
  const handleToggle_1 = () => setShow_1(!show_1);

  const { language } = useContext(LangContext);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="max-w-[800px] mx-2 flex flex-col gap-4 text-lg">
      {dataInfo?.entrance?.types && (
        <Collapse
          className="font-body bodyColor "
          startingHeight={100}
          in={show_1}
        >
          <div>
            {dataInfo?.entrance?.types.map((data) => (
              <div className="flex flex-col py-2">
                <p className="text-lg font-bold">{data.title}</p>
                <p className="text-lg italic">
                  Notice: Price increase without prior notice.
                </p>
                <p className="text-lg">{data.fee}</p>
              </div>
            ))}
          </div>
        </Collapse>
      )}

      {dataInfo?.entrance?.types && (
        <p
          className="cursor-pointer w-fit text-base"
          onClick={handleToggle_1}
          mt="1rem"
        >
          {show_1 ? "- Read Less" : "+ Read More"}
        </p>
      )}

      {dataInfo?.content && (
        <Collapse
          className="font-body bodyColor "
          startingHeight={100}
          in={show}
        >
          {dataInfo?.content?.map((data) => (
            <div className="flex flex-col py-2">
              <p className="text-lg font-bold">{data.title}</p>
              <p className="text-lg">{data.description}</p>
            </div>
          ))}
        </Collapse>
      )}

      {dataInfo?.content && (
        <p
          className="cursor-pointer w-fit text-base"
          onClick={handleToggle}
          mt="1rem"
        >
          {show ? "- Read Less" : "+ Read More"}
        </p>
      )}

      <div className="mb-5 flex flex-wrap gap-4">
        {dataInfo.prices && <ResortsPricesModal dataInfo={dataInfo} />}
        <GalleryModal dataInfo={dataInfo} />
        {dataInfo.website && (
          <Link to={dataInfo.website} target="_blank">
            <button className="bg-none w-[150px] border-[1px] border-[#f1be66] rounded-full px-4 py-2 hover:bg-[#f1be66] duration-300 delay-75">
              <p className="text-base">Visit Website &#8594;</p>
            </button>
          </Link>
        )}
      </div>
      <div className="max-lg:hidden mt-2 py-5 border-t-[1px] border-gray-300">
        <p className="font-bold text-2xl my-2">You may also like : </p>
        <div className="mt-4 mb-10 mx-auto w-[320px] md:w-[400px] lg:w-[800px]">
          <CarouselLike>
            {language?.resorts_page.map((data) => (
              <Link to={`/resorts/${data.id}`}>
                <div
                  onClick={scrollToTop}
                  key={data.id}
                  className="relative homeItemContainer h-[290px] px-5"
                >
                  <div className="w-auto h-auto overflow-hidden">
                    <img
                      src={data.img}
                      alt="resorts"
                      className="w-[250px] h-[200px]"
                    />
                  </div>
                  <div className="w-full mt-2 mb-4 px-2 flex flex-col gap-2">
                    <p className="w-fit text-xs text-[#f1be66] font-bold">
                      {data.category}
                    </p>
                    <p className="text-lg font-extrabold">{data.title}</p>
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

export default ResortItemContent_1;
