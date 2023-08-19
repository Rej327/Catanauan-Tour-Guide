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

  const handleToggle = () => setShow(!show);

  const { language } = useContext(LangContext);

  return (
    <div className="max-w-[800px] mx-2 flex flex-col gap-4 text-lg">
      {dataInfo.entrance.types && (
        <div>
          {dataInfo?.entrance?.types.map((data) => (
            <div className="flex flex-col py-2">
              <p className="text-lg font-bold">{data.title}</p>
              <p className="text-lg">{data.fee}</p>
            </div>
          ))}
        </div>
      )}
      {dataInfo.content && (
        <Collapse
          className="font-body bodyColor "
          startingHeight={100}
          in={show}
        >
          {dataInfo.content.map((data) => (
            <div className="flex flex-col py-2">
              <p className="text-lg font-bold">{data.title}</p>
              <p className="text-lg">{data.description}</p>
            </div>
          ))}
        </Collapse>
      )}

      <p
        className="cursor-pointer w-fit text-base"
        onClick={handleToggle}
        mt="1rem"
      >
        {show ? "- Read Less" : "+ Read More"}
      </p>
      <div className="mb-5 flex gap-4">
        {dataInfo.prices && <ResortsPricesModal dataInfo={dataInfo} />}
        <GalleryModal dataInfo={dataInfo} />
      </div>
      <div className="max-lg:hidden mt-2 py-5 border-t-[1px] border-gray-300">
        <p className="font-bold text-2xl my-2">You may also like : </p>
        <div className="mx-auto w-[320px] md:w-[400px] lg:w-[800px]">
          <CarouselLike>
            {language?.resorts_page.map((data) => (
              <Link to={`/resorts/${data.id}`}>
                <div
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
