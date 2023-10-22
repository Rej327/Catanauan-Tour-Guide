import { Collapse, Tooltip, Skeleton, SkeletonText } from "@chakra-ui/react";
import React, { useContext, useEffect, useState } from "react";
import { ImLocation } from "react-icons/im";
import { Link } from "react-router-dom";
import { getDirection } from "../../helper";
import { LangContext } from "../../../App";
import { AiOutlineClockCircle } from "react-icons/ai";
import PricesModal from "./PriceModal";
import Button from "../../common/Button";

const FoodHub = ({ className }) => {
  const { language, startingPoint } = useContext(LangContext);
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(true);
  const [imagesLoaded, setImagesLoaded] = useState(0);

  const handleImageLoad = () => {
    setImagesLoaded(imagesLoaded + 1);

    if (
      imagesLoaded ===
      language?.plan_page?.getting_around?.content_item?.food_hub?.length
    ) {
      setLoading(false);
    }
  };

  useEffect(() => {
    const loadingTimeout = setTimeout(() => {
      setLoading(false);
    }, 999999);

    const imgPromises =
      language?.plan_page?.getting_around?.content_item?.food_hub?.map(
        (data) => {
          return new Promise((resolve) => {
            const img = new Image();
            img.src = data.img;
            img.onload = () => {
              handleImageLoad();
              resolve();
            };
          });
        }
      );

    Promise.all(imgPromises).then(() => {
      setLoading(false);
      clearTimeout(loadingTimeout);
    });

    return () => clearTimeout(loadingTimeout);
  }, []);

  const handleToggle = () => setShow(!show);

  return (
    <div className={`w-full px-4 ${className}`}>
      <div className="max-w-[1250px] flex flex-col mx-auto">
        <div className="flex flex-col gap-4 my-5 px-4">
          <ul>
            <li className="list-disc text-[#013D7A]">
              <p className="text-2xl font-bold">Food Hub</p>
            </li>
          </ul>

          <Collapse
            className="w-full flex justify-between flex-wrap bg-[#FCE9CB gap-5 mx-auto"
            startingHeight={450}
            in={show}
          >
            <div className="w-full flex justify-between flex-wrap bg-[#FCE9CB gap-5 mx-auto">
              {loading
                ? language?.plan_page?.getting_around?.content_item?.food_hub?.map(
                    (_, index) => (
                      <div
                        key={index}
                        className="bg-[#FEFEFF] rounded-lg homeItemContainer max-w-[300px] md:max-w-[350px] lg:max-w-[350px] mx-auto"
                      >
                        <Skeleton
                          width="350px"
                          height="300px"
                          startColor="gray.200"
                          endColor="gray.400"
                        />
                        <div className="my-2 p-2">
                          <SkeletonText mt="2" noOfLines={1} spacing="4" />
                          <SkeletonText mt="4" noOfLines={1} spacing="4" />
                          <SkeletonText mt="4" noOfLines={1} spacing="4" />
                          <div className="flex justify-evenly items-center">
                            <SkeletonText
                              className="w-[100px]"
                              mt="4"
                              noOfLines={1}
                              spacing="4"
                            />
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
                : language?.plan_page?.getting_around?.content_item?.food_hub?.map(
                    (data, index) => (
                      <div
                        key={index}
                        className="bg-[#FEFEFF] rounded-lg homeItemContainer max-w-[300px] md:max-w-[350px] lg:max-w-[350px] mx-auto"
                      >
                        <div className="overflow-hidden rounded-lg">
                          <img
                            src={data.img}
                            alt="resorts"
                            className="rounded-lg w-[350px] h-[300px]"
                          />
                        </div>
                        <div className="my-2 p-2">
                          <p className="text-lg font-bold pl-5">{data.title}</p>
                          <div className="w-fit my-2 flex gap-1 items-center">
                            <p>
                              <AiOutlineClockCircle className="iconCardColor text-xl" />
                            </p>
                            <Tooltip label="Schedule" placement="bottom">
                              <p className="text-base">{data.schedule}</p>
                            </Tooltip>
                          </div>
                          <div className="w-fit my-2 flex gap-1 items-center">
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
                          <div className="flex gap-2 justify-evenly items-center text-base">
                            {data?.menu?.item && (
                              <PricesModal dataInfo={data?.menu?.item} />
                            )}
                            <p className="w-auto text-lg text-center textCardColor">
                              <Link
                                to={getDirection(data.direction, startingPoint)}
                                target="_blank"
                              >
                                Get Direction &#8594;
                              </Link>
                            </p>
                          </div>
                        </div>
                      </div>
                    )
                  )}
            </div>
          </Collapse>

          <div className="w-fit my-5 mx-auto">
            <Button
              label={show ? "- Less" : "+ More"}
              className="w-auto text-black text-sm bg-[#FCE8CA]"
            ></Button>
            {/* <p
              className="mx-auto w-fit text-black px-4 py-2 text-lg bg-[#FCE9CB] cursor-pointer rounded-full"
              onClick={handleToggle}
            >
              {show ? "- Less" : "+ More"}
            </p> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodHub;
