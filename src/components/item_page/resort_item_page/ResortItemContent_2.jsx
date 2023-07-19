import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
} from "@chakra-ui/react";
import React from "react";
import { banks } from "../../../assets";
import { BsPhone, BsFacebook } from "react-icons/bs";
import { ImLocation } from "react-icons/im";

const ResortItemContent_2 = () => {
  return (
    <div className="w-full mx-auto lg:max-w-[400px] bg-[#fff5e6] p-4">
      <div className="flex flex-col gap-4">
        <img
          src={banks}
          alt="Bank Image"
          className="w-full h-[15rem] object-cover"
        />
        <div className="flex gap-2 items-center">
          <BsPhone className="text-[#F9DBA9]" />
          <p>(+63)-999-999-9999</p>
        </div>
        <div className="flex gap-2 items-center">
          <ImLocation className="text-[#F9DBA9] text-2xl" />
          <p className="leading-4">
            Catanauan Cove, Sitio Paraiso, Brgy. Cutcutan, Quezon, Catanauan,
            Quezon
          </p>
        </div>
        <div className="flex gap-2 items-center">
          <BsFacebook className="text-[#F9DBA9]" />
          <p>Facebook Page</p>
        </div>
      </div>
    </div>
  );
};

export default ResortItemContent_2;
