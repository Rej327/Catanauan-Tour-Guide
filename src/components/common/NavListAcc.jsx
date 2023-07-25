import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
} from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

const NavListAcc = () => {
  return (
    <div>
      <Accordion allowToggle>
        <AccordionItem>
          <AccordionButton>
            <Box as="span" flex="1" textAlign="left">
              <p className="text-lg font-bold">Discover</p>
            </Box>
            <AccordionIcon />
          </AccordionButton>

          <AccordionPanel pb={4}>
            <div className="text-base flex flex-col gap-2 pl-4">
              <Link to="/resorts">
                <p className="list-inside font-bold hover:translate-x-1 duration-200 w-fit">
                  Resorts
                </p>
              </Link>
              <Link to="/hotels">
                <p className="list-inside font-bold hover:translate-x-1 duration-200 w-fit">
                  Hotels
                </p>
              </Link>
              <Link to="/restaurants">
                <p className="list-inside font-bold hover:translate-x-1 duration-200 w-fit">
                  Restaurants
                </p>
              </Link>
              <Link to="/falls">
                <p className="list-inside font-bold hover:translate-x-1 duration-200 w-fit">
                  Falls
                </p>
              </Link>
              <Link to="/transportations">
                <p className="list-inside font-bold hover:translate-x-1 duration-200 w-fit">
                  Transportations
                </p>
              </Link>
            </div>
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <AccordionButton>
            <Box as="span" flex="1" textAlign="left">
              <p className="text-lg font-bold">Plan A Head</p>
            </Box>
            <AccordionIcon />
          </AccordionButton>
          <AccordionPanel pb={4}>
            <div className="text-base flex flex-col gap-2 pl-4">
              <Link to="/traveler-guides">
                <p className="list-inside font-bold hover:translate-x-1 duration-200 w-fit">
                  Traveler Guides
                </p>
              </Link>
              <Link to="/getting-here">
                <p className="list-inside font-bold hover:translate-x-1 duration-200 w-fit">
                  Getting Here
                </p>
              </Link>
              <Link to="/getting-around">
                <p className="list-inside font-bold hover:translate-x-1 duration-200 w-fit">
                  Getting Around
                </p>
              </Link>
              <Link to="/culture">
                <p className="list-inside font-bold hover:translate-x-1 duration-200 w-fit">
                  Cultures
                </p>
              </Link>
              <Link to="/accommodation">
                <p className="list-inside font-bold hover:translate-x-1 duration-200 w-fit">
                  Accommodation
                </p>
              </Link>
            </div>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default NavListAcc;
