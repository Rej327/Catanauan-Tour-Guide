import React, { useContext, useState, useEffect } from "react";
import { LangContext } from "../../../App";
import { Link } from "react-router-dom";
import { ImLocation } from "react-icons/im";
import { Tooltip, Skeleton, SkeletonText } from "@chakra-ui/react";
import { getDirection } from "../../helper";

const Market = ({ className }) => {
  const { language, startingPoint } = useContext(LangContext);
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = language.plan_page.getting_around.content_item.market.img;
    img.onload = () => {
      setImageLoaded(true);
    };
    img.onerror = () => {
      setImageLoaded(true);
    };
  }, [language]);

  return (
    <div className={`w-full px-4 ${className}`}>
      <div className="max-w-[1250px] flex flex-col mx-auto">
        <div className="flex flex-col gap-4 mt-10 mb-5 px-4">
          <ul>
            <li className="list-disc text-[#013D7A]">
              <p className="text-2xl font-bold">Public Market</p>
            </li>
          </ul>
          <div className="w-full flex flex-wrap bg-[#FCE9CB gap-5 mx-auto">
            <div className="bg-[#FEFEFF] rounded-lg homeItemContainer max-w-[300px] md:max-w-[350px] lg:max-w-[350px] max-sm:mx-auto">
              {imageLoaded ? (
                <div className="overflow-hidden rounded-lg">
                  <img
                    src={
                      language.plan_page.getting_around.content_item.market.img
                    }
                    alt="resorts"
                    className="rounded-lg w-[350px] h-[300px] "
                  />
                </div>
              ) : (
                <Skeleton
                  width="350px"
                  height="300px"
                  startColor="gray.200"
                  endColor="gray.400"
                />
              )}
              {imageLoaded ? (
                <div className="my-2 px-2">
                  <p className="text-lg font-bold pl-5">
                    {
                      language.plan_page.getting_around.content_item.market
                        .title
                    }
                  </p>
                  <div className="w-fit my-2 flex gap-1 items-center">
                    <p>
                      <ImLocation className="text-[#f1be66]" />
                    </p>
                    <Link
                      to={
                        language.plan_page.getting_around.content_item.market
                          .loc_link
                      }
                      target="_blank"
                    >
                      <Tooltip label="Location" placement="bottom">
                        <p className="text-sm hover:text-[#be8624] duration-200 cursor-pointer">
                          {
                            language.plan_page.getting_around.content_item
                              .market.location
                          }
                        </p>
                      </Tooltip>
                    </Link>
                  </div>
                  <p className="w-auto text-[#f1be66] text-center hover:text-[#be8624]">
                    <Link
                      to={getDirection(
                        language.plan_page.getting_around.content_item.market
                          .direction,
                        startingPoint
                      )}
                      target="_blank"
                    >
                      Get Direction &#8594;
                    </Link>
                  </p>
                </div>
              ) : (
                <div className="my-2 px-2">
                  <SkeletonText mt="2" noOfLines={2} spacing="4" />
                  <SkeletonText
                    width="150px"
                    mx="auto"
                    mt="4"
                    noOfLines={1}
                    spacing="4"
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Market;
