import { Button, Collapse } from "@chakra-ui/react";
import React, { useContext, useState } from "react";
import Carousel from "../../common/Carousel";
import { LangContext } from "../../../App";
import { Link } from "react-router-dom";
import GalleryModal from "../../common/GalleryModal";
import HotelPricesModal from "../../common/HotelPricesModal";

const HotelItemContent_1 = ({ dataInfo }) => {
  const [show, setShow] = useState(false);

  const handleToggle = () => setShow(!show);

  const { language } = useContext(LangContext);

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

      <div className="mb-5 flex gap-4">
        <HotelPricesModal dataInfo={dataInfo} />
        <GalleryModal dataInfo={dataInfo} />
      </div>
      <div className="max-lg:hidden mt-2 py-5 border-t-[1px] border-gray-300">
        <p className="font-bold text-2xl my-2">You may also like : </p>
        <div className="mx-auto w-[320px] md:w-[400px] lg:w-[800px]">
          <Carousel>
            {language?.hotels_page.map((data) => (
              <Link to={`/hotels/${data.id}`}>
                <div key={data.id} className="px-5 homeItemContainer">
                  <div className="w-[250px] h-[200px] overflow-hidden">
                    <img
                      src={data.img}
                      className="w-[250px] h-[200px]"
                      alt="resorts"
                    />
                  </div>
                  <div className="w-full bg-white">
                    <p className="py-2 text-[1rem]">{data.title}</p>
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

export default HotelItemContent_1;
