import React from "react";
import {
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import NavigationIcon from "./NavigationIcon";
import FooterButton from "./FooterButton";
import NavListAcc from "./NavListAcc";
import { Link } from "react-router-dom";

const NavigationToogle = ({ iconColor }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <NavigationIcon iconColor={iconColor} onClick={onOpen} />

      <Drawer onClose={onClose} isOpen={isOpen} size="xs">
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton className="text-[#]" />
          <DrawerHeader size="xs">
            <p className="font-header text-2xl mt-10">Discover Catanauan</p>
          </DrawerHeader>
          <DrawerBody>
            <div className="flex flex-col">
              <Link to="/">
                <p className="text-lg font-bold px-4 hover:bg-[#F5F5F5] delay-75 duration-75 py-[9px]">
                  Home
                </p>
              </Link>
              <NavListAcc />
              <Link to="whats-on">
                <p className="text-lg font-bold px-4 hover:bg-[#F5F5F5] delay-75 duration-75 py-[9px]">
                  What's On
                </p>
              </Link>
              <FooterButton>What's Nearby</FooterButton>
              <FooterButton>Accomodation</FooterButton>
            </div>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default NavigationToogle;
