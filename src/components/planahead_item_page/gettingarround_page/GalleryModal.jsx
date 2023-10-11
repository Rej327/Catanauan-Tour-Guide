import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import WSPGallery from "../../common/WSPGallery";

const GalleryModal = ({ dataInfo }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <p
        className="w-auto text-[#ffb029] text-lg text-center hover:text-[#be8624] cursor-pointer"
        onClick={onOpen}
      >
        Gallery &#8594;
      </p>

      <Modal size="full" isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            <div className="max-w-[1300px] mx-auto">
              <p className="text-2xl tracking-widest">Gallery</p>
            </div>
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <div className="w-full py-2 border-b-2">
              <p className="text-2xl tracking-widest mt-5 mb-2"> - Place</p>
              <WSPGallery setData={dataInfo} />
            </div>
          </ModalBody>

          <ModalFooter></ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default GalleryModal;
