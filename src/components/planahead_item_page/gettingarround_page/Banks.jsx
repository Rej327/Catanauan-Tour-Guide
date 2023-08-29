import { Tooltip } from "@chakra-ui/react";
import React, { useContext } from "react";
import { ImLocation } from "react-icons/im";
import { Link } from "react-router-dom";
import { getDirection } from "../../helper";
import { LangContext } from "../../../App";

const Banks = ({ className }) => {
  const { language, startingPoint } = useContext(LangContext);

  return (
    <div className={`w-full px-4 bg-[#FEFEFF] ${className}`}>
      <div className="max-w-[1250px] px-4 flex flex-col mx-auto">
        <div className="flex flex-col gap-4 my-10 px-4">
          <ul>
            <li className="list-disc text-[#013D7A]">
              <p className="text-2xl font-bold">Banks</p>
            </li>
          </ul>
          <div className="w-full flex justify-between flex-wrap bg-[#FCE9CB gap-5 mx-auto">
            {language?.plan_page?.getting_around?.content_item?.banks?.map(
              (data) => (
                <div className="rounded-lg homeItemContainer max-w-[300px] md:max-w-[350px] lg:max-w-[350px] mx-auto">
                  <div className="overflow-hidden rounded-lg">
                    <img
                      src={data.img}
                      alt="resorts"
                      className=" rounded-lg w-[350px] h-[300px] "
                    />
                  </div>
                  <div className="my-2">
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
