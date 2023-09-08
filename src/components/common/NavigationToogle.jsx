import React, { useContext } from "react";
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
import { LangContext } from "../../App";
import LangToggle from "./LangToggle";

const NavigationToogle = ({ iconColor }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { language } = useContext(LangContext);
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
          <DrawerBody className="relative flex flex-col">
            <div className="flex flex-col">
              <Link to="/">
                <p className="text-lg font-bold px-4 hover:bg-[#F5F5F5] delay-75 duration-75 py-[9px]">
                  {language.navigation?.home}
                </p>
              </Link>
              <NavListAcc />
              <Link to="whats-on">
                <p className="text-lg font-bold px-4 hover:bg-[#F5F5F5] delay-75 duration-75 py-[9px]">
                  {language.navigation?.whats}
                </p>
              </Link>
            </div>
            <div className="absolute flex flex-col gap-4 bottom-4">
              <Link to="https://goo.gl/maps/cUbvaPVpQQsL4dqe8" target="_blank">
                <FooterButton>{language.navigation?.nearby}</FooterButton>
              </Link>
              <Link to="/accommodation">
                <FooterButton>
                  {language.navigation?.accommodation}
                </FooterButton>
              </Link>
              <div className="flex gap-1 items-center">
                <LangToggle />
                <p className="text-body text-base text-[#012854]">en/fil</p>
              </div>
            </div>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default NavigationToogle;
