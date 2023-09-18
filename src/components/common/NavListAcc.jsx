import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
} from "@chakra-ui/react";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { LangContext } from "../../App";

const NavListAcc = () => {
  const { language } = useContext(LangContext);
  return (
    <div>
      <Accordion allowToggle>
        <AccordionItem>
          <AccordionButton>
            <Box as="span" flex="1" textAlign="left">
              <p className="text-lg font-bold">
                {language.navigation?.discover}
              </p>
            </Box>
            <AccordionIcon />
          </AccordionButton>

          <AccordionPanel pb={4}>
            <div className="text-base flex flex-col gap-2 pl-4">
              <Link to="/resorts">
                <p className="list-inside capitalize font-bold hover:translate-x-1 duration-200 w-fit">
                  {language.category?.resorts}
                </p>
              </Link>
              <Link to="/hotels">
                <p className="list-inside capitalize font-bold hover:translate-x-1 duration-200 w-fit">
                  {language.category?.hotels}
                </p>
              </Link>
              <Link to="/restaurants">
                <p className="list-inside capitalize font-bold hover:translate-x-1 duration-200 w-fit">
                  {language.category?.restaurants}
                </p>
              </Link>
              <Link to="/falls">
                <p className="list-inside capitalize font-bold hover:translate-x-1 duration-200 w-fit">
                  {language.category?.falls}
                </p>
              </Link>
              <Link to="/transportations">
                <p className="list-inside capitalize font-bold hover:translate-x-1 duration-200 w-fit">
                  {language.category?.transportation}
                </p>
              </Link>
            </div>
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <AccordionButton>
            <Box as="span" flex="1" textAlign="left">
              <p className="text-lg font-bold">{language.navigation?.plan}</p>
            </Box>
            <AccordionIcon />
          </AccordionButton>
          <AccordionPanel pb={4}>
            <div className="text-base flex flex-col gap-2 pl-4">
              <Link to="/traveler-guides">
                <p className="list-inside font-bold hover:translate-x-1 duration-200 w-fit">
                  {language.plan_section?.traveler_guides}
                </p>
              </Link>
              <Link to="/getting-here">
                <p className="list-inside font-bold hover:translate-x-1 duration-200 w-fit">
                  {language.plan_section?.getting_here}
                </p>
              </Link>
              <Link to="/getting-around">
                <p className="list-inside font-bold hover:translate-x-1 duration-200 w-fit">
                  {language.plan_section?.getting_around}
                </p>
              </Link>
              <Link to="/culture">
                <p className="list-inside font-bold hover:translate-x-1 duration-200 w-fit">
                  {language.plan_section?.cultures}
                </p>
              </Link>
              <Link to="/accommodation">
                <p className="list-inside font-bold hover:translate-x-1 duration-200 w-fit">
                  {language.plan_section?.accomodations}
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
