import { Button, Collapse } from "@chakra-ui/react";
import React, { useContext, useState } from "react";
import Carousel from "../../common/Carousel";
import { LangContext } from "../../../App";
import { Link } from "react-router-dom";
import GalleryModal from "../../common/GalleryModal";
import HotelPricesModal from "../../common/PricesModal";
import CarouselLike from "../../common/CarouselLike";

const HotelItemContent_1 = ({ dataInfo }) => {
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
      <p>{dataInfo.content}</p>
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

      <div className="mb-5 flex flex-wrap gap-4">
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
            {language?.hotels_page.map((data) => (
              <Link to={`/hotels/${data.id}`}>
                <div
                  onClick={scrollToTop}
                  key={data.id}
                  className="relative homeItemContainer h-[320px] px-5"
                >
                  <div className="w-auto h-auto overflow-hidden">
                    <img
                      src={data.img}
                      alt="resorts"
                      className="w-[250px] h-[200px]"
                    />
                  </div>
                  <div className="w-full mt-2 mb-4 px-2 flex flex-col gap-2">
                    <p className="w-fit text-base text-[#f1be66] font-bold">
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

export default HotelItemContent_1;
