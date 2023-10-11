import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
} from "@chakra-ui/react";
import React from "react";
import { BsPhone, BsFacebook } from "react-icons/bs";
import { ImLocation } from "react-icons/im";
import { Link } from "react-router-dom";

const ResortItemContent_2 = ({ dataInfo }) => {
  return (
    <div className="w-full mx-auto lg:max-w-[400px] bg-[#fff5e6] p-4">
      <div className="flex flex-col gap-4">
        <img
          src={dataInfo.img}
          alt="Bank Image"
          className="w-full h-[15rem] object-cover"
        />
        <div className="flex gap-2 items-center">
          <BsPhone className="text-[#ffab19 text-xl" />
          <Link to={dataInfo.dial_num}>
            <p className="hover:underline underline-offset-8">
              {dataInfo.number}
            </p>
          </Link>
        </div>
        <div className="flex gap-2 items-center">
          <ImLocation className="text-[#ffab19 text-xl" />
          <Link to={dataInfo.loc_link} target="_blank">
            <p className="hover:underline underline-offset-8">
              {dataInfo.location}
            </p>
          </Link>
        </div>
        <div className="flex gap-2 items-center">
          <BsFacebook className="text-[#ffab19 text-xl" />
          <Link to={dataInfo.fb_link} target="_blank">
            <p className="hover:underline underline-offset-8">Facebook Page</p>
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
                  {dataInfo.schedule.map((data) => (
                    <p>{data.hrs}</p>
                  ))}
                </div>
              </div>
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
};

export default ResortItemContent_2;
