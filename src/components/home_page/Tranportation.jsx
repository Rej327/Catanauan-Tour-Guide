import React, { useContext, useEffect, useState } from "react";
import { LangContext } from "../../App";
import Carousel from "../common/Carousel";
import Button from "../common/Button";
import { Link } from "react-router-dom";
import { ImLocation } from "react-icons/im";
import { Skeleton, SkeletonText, Tooltip } from "@chakra-ui/react";
import { SiAlwaysdata } from "react-icons/si";
import { PiHandCoinsDuotone } from "react-icons/pi";
import { getDirection } from "../helper";

const Transportations = ({ className, id }) => {
  const { language, startingPoint } = useContext(LangContext);
  const [loading, setLoading] = useState(true);
  const [imagesLoaded, setImagesLoaded] = useState(0);

  const handleImageLoad = () => {
    setImagesLoaded(imagesLoaded + 1);

    if (imagesLoaded === language?.transportations_page?.length) {
      setLoading(false);
    }
  };

  useEffect(() => {
    const loadingTimeout = setTimeout(() => {
      setLoading(false);
    }, 999999);

    const imgPromises = language?.transportations_page
      .slice(0, 3)
      ?.map((data) => {
        return new Promise((resolve) => {
          const img = new Image();
          img.src = data.img;
          img.onload = () => {
            handleImageLoad();
            resolve();
          };
        });
      });

    Promise.all(imgPromises).then(() => {
      setLoading(false);
      clearTimeout(loadingTimeout);
    });

    return () => clearTimeout(loadingTimeout);
  }, []);
  return (
    <div id={id} className={`w-full ${className}`}>
      <div className="w-full flex">
        <div className="w-full lg:w-[60%] max-sm:h-[350px] h-[300px] bg-[#FCE9CB] flex flex-col justify-center">
          {/* MOBILE & TABLET */}
          <div className="lg:hidden flex flex-col my-12 px-2 md:px-10">
            <div className="w-fit">
              <div className="w-fit">
                <p className="font-header hashColor text-4xl">
                  {language?.transportation_section?.head}
                </p>
              </div>
              <p className="text-4xl font-bold tracking-wide my-5">
                {language?.transportation_section?.title}
              </p>
              <p className="text-xl">
                {language?.transportation_section?.content}
              </p>
              <Link to="/transportations">
                <p className="text-[#d4a148] mt-5 hover:translate-x-2 hover:font-bold duration-300">
                  {language?.transportation_section?.btn_txt}
                </p>
              </Link>
            </div>
          </div>
        </div>
        <div className="max-sm:hidden hidden lg:block w-[40%] h-[300px]"></div>
      </div>
      {/* ITEM */}
      <div className="relative max-w-[1300px] mx-auto">
        {/* DESKTOP & LAPTOP */}
        <div className="hidden lg:flex items-center -mt-56 mb-12 px-2 lg:px-12 ">
          <div className="w-fit">
            <p className="text-4xl font-bold tracking-wide my-5">
              {language?.transportation_section?.title}
            </p>
            <p className="text-xl">
              {language?.transportation_section?.content}
            </p>
            <Link to="/transportations">
              <p className="text-[#d4a148] mt-5 hover:translate-x-2 hover:font-bold duration-300">
                {language?.transportation_section?.btn_txt}
              </p>
            </Link>
          </div>
          <div className="w-fit ml-auto pr-24">
            <p className="font-header hashColor text-4xl">
              {language?.transportation_section?.head}
            </p>
          </div>
        </div>
        <div className="max-w-[1300px] -mt-5 mx-auto justify-evenly items-center flex flex-wrap gap-10">
          {language.transportations_page.slice(0, 3).map((data) => (
            <div
              key={data.id}
              className="max-w-[320px] resortItems flex flex-col gap-2 bg-white rounded-xl"
            >
              <div className="rounded-xl w-full overflow-hidden">
                {loading ? (
                  <Skeleton width="320px" height="320px" />
                ) : (
                  <img
                    src={data.img}
                    className="w-full max-h-[320px] itemImg object-cover rounded-xl"
                    onLoad={handleImageLoad}
                  />
                )}
              </div>
              <div className="w-full mt-2 mb-4 px-2 flex flex-col gap-2">
                {loading ? (
                  <>
                    <SkeletonText mt="4" noOfLines={1} spacing="4" />
                    <SkeletonText mt="4" noOfLines={1} spacing="4" />
                    <SkeletonText mt="4" noOfLines={1} spacing="4" />
                    <SkeletonText mt="4" noOfLines={1} spacing="4" />
                    <SkeletonText mt="4" noOfLines={1} spacing="4" />
                  </>
                ) : (
                  <>
                    <p className="text-lg font-extrabold tracking-widest">
                      {data.toda}
                    </p>
                    <div className="w-fit flex gap-1 items-center">
                      <ImLocation className="text-[#f1be66]" />
                      <Link to={data.loc_link} target="_blank">
                        <Tooltip label="Location" placement="bottom">
                          <p className="text-sm hover:text-[#be8624] duration-200 cursor-pointer">
                            {data.loc}
                          </p>
                        </Tooltip>
                      </Link>
                    </div>
                    <div className="w-fit flex gap-1 items-center">
                      <SiAlwaysdata className="text-[#f1be66]" />
                      <Tooltip label="Routes" placement="bottom">
                        <Link to={data.rts_link} target="_blank">
                          <p className="text-sm hover:text-[#be8624] duration-200 cursor-pointer">
                            {data.rts}
                          </p>
                        </Link>
                      </Tooltip>
                    </div>
                    <div className="w-fit flex gap-1 items-center">
                      <PiHandCoinsDuotone className="text-[#f1be66]" />
                      <Tooltip label="Fare" placement="bottom">
                        <p className="text-sm hover:text-[#be8624] duration-200 cursor-pointer">
                          ₱ {data.fare}
                        </p>
                      </Tooltip>
                    </div>
                    <div className="w-fit">
                      <Link
                        to={getDirection(data.direction, startingPoint)}
                        target="_blank"
                      >
                        <p className="w-auto text-[#f1be66] hover:translate-x-5 duration-300 hover:font-bold">
                          {data.direction_txt} &#8594;
                        </p>
                      </Link>
                    </div>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
        {/* <div className="mx-auto max-w-[450px] lg:max-w-[1300px] -mt-5 lg:mt-0">
          <div className="mx-auto">
            <Carousel>
              {language?.main?.resorts.slice(0, 3).map((data) => (
                <div
                  key={data.id}
                  className="rounded-lg homeItemContainer max-w-[300px] md:max-w-[350px] lg:max-w-[350px] mx-auto"
                >
                  <div className="overflow-hidden rounded-lg">
                    <img
                      src={data.img}
                      alt="resorts"
                      className=" rounded-lg "
                    />
                  </div>
                  <p className="text-lg px-4 py-2">Vehicle Name</p>
                </div>
              ))}
            </Carousel>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Transportations;
