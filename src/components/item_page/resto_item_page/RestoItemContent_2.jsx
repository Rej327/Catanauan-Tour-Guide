import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
} from "@chakra-ui/react";
import React from "react";
import { BsPhone, BsFacebook } from "react-icons/bs";
import { ImLocation } from "react-icons/im";
import { Link } from "react-router-dom";

const RestoItemContent_2 = ({
  number,
  callNumber,
  address,
  fbPage,
  loc_link,
  hrs1,
  hrs2,
  hrs3,
  hrs4,
  hrs5,
  hrs6,
  hrs7,
}) => {
  return (
    <div className="w-full mx-auto lg:max-w-[400px] bg-[#fff5e6] mt-10 p-4">
      <div className="flex flex-col gap-4">
        <div className="flex gap-2 items-center">
          <BsPhone className="text-[#F9DBA9]" />
          <Link to={callNumber}>
            <p>{number}</p>
          </Link>
        </div>
        <div className="flex gap-2 items-center">
          <ImLocation className="text-[#F9DBA9] text-base" />
          <Link to={loc_link} target="_blank">
            <p className="leading-4">{address}</p>
          </Link>
        </div>
        <Link to={fbPage} target="_blank">
          <div className="flex gap-2 items-center">
            <BsFacebook className="text-[#F9DBA9]" />
            <p>Facebook Page</p>
          </div>
        </Link>
      </div>
      <Accordion
        my="4"
        borderColor="orange.100"
        defaultIndex={[0]}
        allowMultiple
      >
        <AccordionItem>
          <parent>
            <AccordionButton>
              <div className="flex justify-between w-full">
                <p>Schedule</p>
                <p>Hours Open</p>
              </div>
              <AccordionIcon />
            </AccordionButton>
          </parent>
          <AccordionPanel pb={4}>
            <div className="flex justify-between">
              <div>
                <p>Monday</p>
                <p>Tuesday</p>
                <p>Wednesday</p>
                <p>Thursday</p>
                <p>Friday</p>
                <p>Saturday</p>
                <p>Sunday</p>
              </div>
              <div>
                <p>{hrs1}</p>
                <p>{hrs2}</p>
                <p>{hrs3}</p>
                <p>{hrs4}</p>
                <p>{hrs5}</p>
                <p>{hrs6}</p>
                <p>{hrs7}</p>
              </div>
            </div>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default RestoItemContent_2;
