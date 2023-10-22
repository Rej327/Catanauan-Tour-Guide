import React, { useContext, useEffect, useState } from "react";
import { LangContext } from "../../App";
import { ImLocation } from "react-icons/im";
import { getDirection } from "../helper";
import { Link } from "react-router-dom";
import { Skeleton, SkeletonText } from "@chakra-ui/react";
import Button from "../common/Button";

const FallsBody = () => {
  const { language, startingPoint } = useContext(LangContext);
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
    <div className="max-w-[1300px] mx-auto">
      {loading ? (
        language?.falls_page?.map((_, index) => (
          <div
            key={index}
            className="flex flex-wrap justify-evenly border-b-[1px] py-10 gap-5"
          >
            <Skeleton width="400px" height="300px" />
            <div className="w-[800px] px-4 h-fit my-auto flex flex-col gap-5">
              <div className="flex flex-col gap-4">
                <SkeletonText mt={2} noOfLines={1} spacing="4" />
                <SkeletonText mt={2} noOfLines={1} spacing="4" />
                <SkeletonText mt={2} noOfLines={1} spacing="4" />
              </div>
              <div className="w-full flex flex-col md:flex-row gap-4 justify-between">
                <SkeletonText
                  className="w-[15rem]"
                  mt={2}
                  noOfLines={1}
                  spacing="4"
                />
                <Skeleton className="w-[150px] h-[50px]" />
              </div>
            </div>
          </div>
        ))
      ) : (
        <>
          {language.falls_page.map((data, index) => (
            <div
              key={index}
              className="flex flex-wrap justify-evenly border-b-[1px] py-10 gap-5"
            >
              <div className="w-[400px] h-[300px] overflow-hidden">
                <img
                  src={data.img}
                  alt={`${data.title} Image`}
                  className="w-[400px] h-[300px] object-cover hover:scale-125 duration-700 delay-75 ease-in-out"
                />
              </div>
              <div className="w-[800px] px-4 h-fit my-auto flex flex-col gap-5">
                <div className="flex flex-col gap-4">
                  <p className="text-2xl font-bold">{data.title}</p>

                  <p className="text-lg">{data.content}</p>

                  {data.contact ? (
                    <p className="text-lg">
                      Contact Person:{" "}
                      <Link
                        to={data.dial_number}
                        target="_blank"
                        className="hover:underline underline-offset-8"
                      >
                        {data.contact}
                      </Link>
                    </p>
                  ) : (
                    <p className="text-lg">
                      Contact Person:
                      <span className=" hover:cursor-not-allowed">
                        {data.unavail}
                      </span>
                    </p>
                  )}
                  <p className="text-lg">Travel Time: {data.travel_time}</p>
                </div>
                <div className="w-full flex flex-col md:flex-row gap-4 justify-between">
                  <div className="w-fit flex gap-1 items-center">
                    <ImLocation className="iconCardColor text-xl" />

                    <Link to={data.loc_link} target="_blank">
                      <p className="text-base hover:underline underline-offset-8 cursor-pointer">
                        {data.location}
                      </p>
                    </Link>
                  </div>
                  <div className="w-fit gap-4">
                    <Link
                      to={getDirection(data.direction, startingPoint)}
                      target="_blank"
                    >
                      <Button
                        label={data.direction_txt}
                        className="flex items-center w-auto text-sm text-black bg-[#FADEB0]"
                      ></Button>
                      {/* <p className="w-fit flex items-center px-4 py-2 rounded-xl bg-[#f1be66] text-white hover:scale-110 duration-200 ease-in cursor-pointer">
                        {data.direction_txt}
                      </p> */}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}{" "}
        </>
      )}
    </div>
  );
};

export default FallsBody;
