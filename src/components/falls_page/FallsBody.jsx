import React, { useContext } from "react";
import { LangContext } from "../../App";
import { falls } from "../../assets";
import { ImLocation } from "react-icons/im";
import { getDirection } from "../helper";
import { Link } from "react-router-dom";

const FallsBody = () => {
  const { language, startingPoint } = useContext(LangContext);
  console.log(language.falls_page);

  return (
    <div className="max-w-[1300px] mx-auto">
      {language.falls_page.map((data) => (
        <div className="flex flex-wrap justify-evenly border-b-[1px] py-10 gap-5">
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
                <p className="text-base">
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
                <p className="text-base">
                  Contact Person:
                  <span className=" hover:cursor-not-allowed">
                    {data.unavail}
                  </span>
                </p>
              )}
              <p className="text-base">Travel Time: {data.travel_time}</p>
            </div>
            <div className="w-full flex flex-col md:flex-row gap-4 justify-between">
              <div className="w-fit flex gap-1 items-center">
                <ImLocation className="text-[#f1be66]" />

                <Link to={data.loc_link} target="_blank">
                  <p className="text-sm hover:underline underline-offset-8 cursor-pointer">
                    {data.location}
                  </p>
                </Link>
              </div>
              <div className="w-fit gap-4">
                <Link
                  to={getDirection(data.direction, startingPoint)}
                  target="_blank"
                >
                  <p className="w-fit flex items-center px-4 py-2 rounded-xl bg-[#f1be66] text-white hover:scale-110 duration-200 ease-in cursor-pointer">
                    Get Direction
                  </p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FallsBody;
