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

const HotelItemContent_2 = () => {
  return (
    <div className="w-full mx-auto lg:max-w-[400px] bg-[#fff5e6] mt-10 p-4">
      <div className="flex flex-col gap-4">
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
                <p>8:00am - 8:00pm</p>
                <p>8:00am - 8:00pm</p>
                <p>8:00am - 8:00pm</p>
                <p>8:00am - 8:00pm</p>
                <p>8:00am - 8:00pm</p>
                <p>8:00am - 8:00pm</p>
                <p>8:00am - 8:00pm</p>
              </div>
            </div>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default HotelItemContent_2;
