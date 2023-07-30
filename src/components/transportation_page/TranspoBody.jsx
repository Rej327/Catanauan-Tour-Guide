import React, { useContext } from "react";
import { rc1 } from "../../assets";
import { ImLocation } from "react-icons/im";
import { SiAlwaysdata } from "react-icons/si";
import { PiHandCoinsDuotone } from "react-icons/pi";
import { LangContext } from "../../App";
import { Link } from "react-router-dom";
import { Tooltip } from "@chakra-ui/react";

const TranspoBody = () => {
  const { language } = useContext(LangContext);
  return (
    <div className="max-w-[1300px] pb-10 mx-auto justify-center items-center flex flex-wrap gap-10">
      {language.transportations_page.map((data) => (
        <div
          key={data.id}
          className="max-w-[290px] resortItems flex flex-col gap-2 bg-white rounded-xl"
        >
          <div className="rounded-xl w-full  overflow-hidden">
            <img
              src={data.img}
              className="w-full itemImg h-[250px] object-cover rounded-xl"
            />
          </div>
          <div className="w-full mt-2 mb-4 px-2 flex flex-col gap-2">
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
              <Link to={data.direction} target="_blank">
                <p className="w-auto text-[#f1be66] hover:translate-x-5 duration-300">
                  Get Direction &#8594;
                </p>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TranspoBody;
