import { Collapse } from "@chakra-ui/react";
import React, { useContext, useState } from "react";
import { LangContext } from "../../../App";
import { Link } from "react-router-dom";
import GalleryModal from "../../common/GalleryModal";
import HotelPricesModal from "../../common/PricesModal";
import CarouselLike from "../../common/CarouselLike";

const RestoItemContent_1 = ({ dataInfo }) => {
  const [show, setShow] = useState(false);

  const handleToggle = () => setShow(!show);

  const { language } = useContext(LangContext);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="max-w-[800px] flex flex-col gap-4 text-lg">
      {dataInfo.content && <p>{dataInfo.content}</p>}

      {dataInfo.long_content && (
        <Collapse
          className="font-body bodyColor "
          startingHeight={50}
          in={show}
        >
          {dataInfo.long_content}
        </Collapse>
      )}
      {dataInfo.long_content && (
        <div className="w-auto">
          <p
            className="cursor-pointer w-fit text-base"
            onClick={handleToggle}
            mt="1rem"
          >
            {show ? "- Read Less" : "+ Read More"}
          </p>
        </div>
      )}

      <div className="flex flex-wrap gap-4">
        <HotelPricesModal dataInfo={dataInfo} />
        <GalleryModal dataInfo={dataInfo} />
        {dataInfo.web_link && (
          <Link to={dataInfo.web_link} target="_blank">
            <button className="bg-none border-[1px] border-[#F9DBA9] rounded-full px-4 py-2 hover:bg-[#F9DBA9] duration-300 delay-75">
              <p className="text-base w-[120px]">Visit Website &#8594;</p>
            </button>
          </Link>
        )}
      </div>
      <div className="max-lg:hidden mt-2 py-5 border-t-[1px] border-gray-300">
        <p className="font-bold text-2xl my-2">You may also like : </p>
        <div className="mt-4 mb-10 mx-auto w-[320px] md:w-[400px] lg:w-[800px]">
          <CarouselLike>
            {language?.restaurants_page?.map((data) => (
              <div
                onClick={scrollToTop}
                key={data.id}
                className="rounded-2xl relative restoItems w-fit h-fit"
              >
                <div className="absolute z-10 bottom-0 bg-black bg-opacity-50 flex px-2 flex-col justify-center items-center w-[250px] h-[75px]">
                  <p className="font-bold border-2 text-lg text-[#fefeff] text-center">
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
            ))}
          </CarouselLike>
        </div>
      </div>
    </div>
  );
};

export default RestoItemContent_1;
