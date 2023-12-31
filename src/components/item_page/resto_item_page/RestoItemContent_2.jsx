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

const RestoItemContent_2 = ({ dataInfo }) => {
  return (
    <div className="w-full mx-auto lg:max-w-[400px] bg-[#fff5e6] md:mt-10 p-4">
      <div className="flex flex-col gap-4">
        <div className="flex gap-2 items-center">
          <BsPhone className="iconCardColor text-xl" />
          <Link to={dataInfo.dialNumber}>
            <p className="hover:underline underline-offset-8">
              {dataInfo.number}
            </p>
          </Link>
        </div>
        <div className="flex gap-2 items-center">
          <ImLocation className="iconCardColor text-xl" />
          <Link to={dataInfo.loc_link} target="_blank">
            <p className="hover:underline underline-offset-8">
              {dataInfo.location}
            </p>
          </Link>
        </div>
        <div className="flex gap-2 items-center">
          <BsFacebook className="iconCardColor text-xl" />
          <Link to={dataInfo.btn_visit_link} target="_blank">
            <p className="hover:underline underline-offset-8">
              {dataInfo.fb_page_txt}
            </p>
          </Link>
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
                <p>{dataInfo.hrs1}</p>
                <p>{dataInfo.hrs2}</p>
                <p>{dataInfo.hrs3}</p>
                <p>{dataInfo.hrs4}</p>
                <p>{dataInfo.hrs5}</p>
                <p>{dataInfo.hrs6}</p>
                <p>{dataInfo.hrs7}</p>
              </div>
            </div>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default RestoItemContent_2;
