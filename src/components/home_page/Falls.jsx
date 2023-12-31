import React, { useContext, useEffect, useState } from "react";
import { LangContext } from "../../App";
import Carousel from "../common/Carousel";
import Button from "../common/Button";
import { Link } from "react-router-dom";
import { Skeleton, SkeletonText, Tooltip } from "@chakra-ui/react";
import { ImLocation } from "react-icons/im";

const Falls = ({ className, id }) => {
  const { language } = useContext(LangContext);
  const [loading, setLoading] = useState(true);
  const [imagesLoaded, setImagesLoaded] = useState(0);

  const handleImageLoad = () => {
    setImagesLoaded(imagesLoaded + 1);

    if (imagesLoaded === language?.falls_page?.length) {
      setLoading(false);
    }
  };

  useEffect(() => {
    const loadingTimeout = setTimeout(() => {
      setLoading(false);
    }, 999999);

    const imgPromises = language?.falls_page?.map((data) => {
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
        <div className="hidden lg:block w-[40%] h-[300px]"></div>
        <div className="w-full lg:w-[60%] max-sm:h-[350px] h-[300px] bg-[#FCE9CB] flex flex-col justify-center">
          <div className="md:hidden items-center justify-between px-2 ">
            <div className="w-fit lg:ml-[7%]">
              <p className="font-header hashColor text-4xl">
                {language?.falls_section?.head}
              </p>
            </div>
            <div className="w-fit ml-auto">
              <p className="text-4xl font-bold tracking-wide my-5">
                {language?.falls_section?.title}
              </p>
              <p className="max-w-[700px] text-xl">
                {language?.falls_section?.content}
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* ITEM */}
      <div className="relative max-w-[1300px] mx-auto">
        <div className="hidden md:block lg:flex items-center justify-between -mt-56 mb-12 px-2 md:pl-10">
          <div className="w-fit lg:ml-[7%]">
            <p className="font-header hashColor text-4xl md:pr-10">
              {language?.falls_section?.head}
            </p>
          </div>
          <div className="w-fit ml-auto">
            <p className="text-4xl font-bold tracking-wide my-5">
              {language?.falls_section?.title}
            </p>
            <p className="max-w-[700px] text-xl">
              {language?.falls_section?.content}
            </p>
          </div>
        </div>
        <div className="flex flex-wrap justify-center bg-[#FCE9CB gap-5 mx-auto -mt-5">
          {language?.falls_page?.slice(0, 3).map((data) => (
            <div
              key={data.id}
              className="rounded-lg homeItemContainer max-w-[300px] md:max-w-[350px] lg:max-w-[350px] mx-auto"
            >
              <div className="overflow-hidden rounded-lg">
                {loading ? (
                  <Skeleton width="350px" height="300px" />
                ) : (
                  <img
                    src={data.img}
                    alt="resorts"
                    className="rounded-lg w-[350px] h-[300px]"
                    onLoad={handleImageLoad}
                  />
                )}
              </div>
              <div className="my-2">
                {loading ? (
                  <>
                    <SkeletonText mt="4" noOfLines={1} spacing="4" />
                    <SkeletonText mt="4" noOfLines={1} spacing="4" />
                  </>
                ) : (
                  <>
                    <p className="text-xl my-1 font-bold pl-5">{data.title}</p>
                    <div className="w-fit flex gap-1 items-center">
                      <p>
                        <ImLocation className="iconCardColor text-xl" />
                      </p>
                      <Link to={data.loc_link} target="_blank">
                        <Tooltip label="Location" placement="bottom">
                          <p className="text-base hover:underline underline-offset-8 duration-200 cursor-pointer">
                            {data.location}
                          </p>
                        </Tooltip>
                      </Link>
                    </div>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="w-fit mt-10 h-fit mx-auto ">
          <Link to="/falls">
            <Button
              className="mx-auto w-fit text-black px-4 text-base bg-[#FCE9CB]"
              label={language.falls_section?.btn_txt}
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Falls;
