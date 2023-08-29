import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
} from "@chakra-ui/react";
import React, { useContext } from "react";
import { LangContext } from "../../../App";

const Delicasies = ({ className }) => {
  const { language } = useContext(LangContext);

  return (
    <div className={`w-full px-4 bg-[#FEFEFF] ${className}`}>
      <div className="max-w-[1250px] px-4 mx-auto">
        <div className="my-10 px-4">
          <ul>
            <li className="list-disc text-[#013D7A]">
              <p className="text-2xl font-bold">Delicasies</p>
            </li>
          </ul>
        </div>
        <div>
          <Accordion
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
            allowToggle
          >
            {language?.plan_page?.getting_around?.content_item?.delicasies?.map(
              (data) => (
                <AccordionItem>
                  <h2>
                    <AccordionButton>
                      <Box as="span" flex="1" textAlign="left">
                        <p className="text-lg font-bold">{data.title}</p>
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}>
                    <p className="text-lg">{data.content}</p>
                  </AccordionPanel>
                </AccordionItem>
              )
            )}
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default Delicasies;
