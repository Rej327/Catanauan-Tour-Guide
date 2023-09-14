import { Tooltip, Skeleton, SkeletonText } from "@chakra-ui/react";
import React, { useContext, useEffect, useState } from "react";
import { ImLocation } from "react-icons/im";
import { Link } from "react-router-dom";
import { getDirection } from "../../helper";
import { LangContext } from "../../../App";

const Banks = ({ className }) => {
  const { language, startingPoint } = useContext(LangContext);
  const [loading, setLoading] = useState(true);
  const [imagesLoaded, setImagesLoaded] = useState(0);

  const handleImageLoad = () => {
    setImagesLoaded(imagesLoaded + 1);

    if (
      imagesLoaded ===
      language?.plan_page?.getting_around?.content_item?.banks?.length
    ) {
      setLoading(false);
    }
  };

  useEffect(() => {
    const loadingTimeout = setTimeout(() => {
      setLoading(false);
    }, 999999);

    const imgPromises =
      language?.plan_page?.getting_around?.content_item?.banks?.map((data) => {
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
    <div className={`w-full px-4 ${className}`}>
      <div className="max-w-[1250px] flex flex-col mx-auto">
        <div className="flex flex-col gap-4 my-10 px-4">
          <ul>
            <li className="list-disc text-[#013D7A]">
              <p className="text-2xl font-bold">Banks</p>
            </li>
          </ul>
          <div className="w-full flex justify-between flex-wrap bg-[#FCE9CB gap-5 mx-auto">
            {loading
              ? language?.plan_page?.getting_around?.content_item?.banks?.map(
                  (_, index) => (
                    <div
                      key={index}
                      className="bg-[#FEFEFF] rounded-lg homeItemContainer max-w-[300px] md:max-w-[350px] lg:max-w-[350px] max-sm:mx-auto"
                    >
                      <Skeleton
                        width="350px"
                        height="300px"
                        startColor="gray.200"
                        endColor="gray.400"
                      />
                      <div className="my-2 px-2">
                        <SkeletonText mt="2" noOfLines={1} spacing="4" />
                        <SkeletonText mt="4" noOfLines={1} spacing="4" />
                        <div className="flex justify-center items-center">
                          <SkeletonText
                            className="w-[150px]"
                            mt="4"
                            noOfLines={1}
                            spacing="4"
                          />
                        </div>
                      </div>
                    </div>
                  )
                )
              : language?.plan_page?.getting_around?.content_item?.banks?.map(
                  (data, index) => (
                    <div
                      key={index}
                      className="bg-[#FEFEFF] rounded-lg homeItemContainer max-w-[300px] md:max-w-[350px] lg:max-w-[350px]  max-sm:mx-auto"
                    >
                      <div className="overflow-hidden rounded-lg">
                        <img
                          src={data.img}
                          alt="resorts"
                          className="rounded-lg w-[350px] h-[300px]"
                        />
                      </div>
                      <div className="my-2 px-2">
                        <p className="text-lg font-bold pl-5">{data.title}</p>
                        <div className="w-fit my-2 flex gap-1 items-center">
                          <p>
                            <ImLocation className="text-[#f1be66]" />
                          </p>
                          <Link to={data.loc_link} target="_blank">
                            <Tooltip label="Location" placement="bottom">
                              <p className="text-sm hover:text-[#be8624] duration-200 cursor-pointer">
                                {data.location}
                              </p>
                            </Tooltip>
                          </Link>
                        </div>
                        <p className="w-auto text-[#f1be66] text-center hover:text-[#be8624]">
                          <Link
                            to={getDirection(data.direction, startingPoint)}
                            target="_blank"
                          >
                            Get Direction &#8594;
                          </Link>
                        </p>
                      </div>
                    </div>
                  )
                )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banks;
