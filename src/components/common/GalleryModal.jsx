import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useContext } from "react";
import { LangContext } from "../../App";
import WSPGallery from "./WSPGallery";

const GalleryModal = ({ dataInfo }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <button
        className="px-4 py-2 rounded-2xl bg-[#F9DBA9] hover:scale-105 duration-300"
        onClick={onOpen}
      >
        <p>Gallery</p>
      </button>

      <Modal size="full" isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            <p>Gallery</p>
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <div className="max-w-[1300px] px-4">
              <div className="w-full py-2 border-b-2">
                <p className="text-2xl tracking-widest"> - Room's</p>
                <WSPGallery setData={dataInfo?.gallery?.rooms} />
              </div>
              <div className="w-full py-2 border-b-2">
                <p className="text-2xl tracking-widest"> - Place's</p>
                <WSPGallery setData={dataInfo?.gallery?.places} />
              </div>
              <div className="w-full py-2">
                <p className="text-2xl tracking-widest"> - Food's</p>
                <div className="flex flex-wrap gap-4 justify-evenly">
                  <img src="" alt="" className="w-[300px] h-[300px] border-2" />
                </div>
              </div>
            </div>
          </ModalBody>

          <ModalFooter></ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default GalleryModal;
