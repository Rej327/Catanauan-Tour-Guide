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
            <div className="max-w-[1300px] mx-auto">
              <p className="text-2xl tracking-widest">Gallery</p>
            </div>
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <div className="max-w-[1300px] mx-auto px-4">
              {dataInfo?.gallery?.rooms && (
                <div className="w-full py-5 border-b-2">
                  <p className="text-2xl tracking-widest mt-5 mb-2">
                    {" "}
                    - Room's
                  </p>
                  <WSPGallery setData={dataInfo?.gallery?.rooms} />
                </div>
              )}
              {dataInfo?.gallery?.places && (
                <div className="w-full py-2 border-b-2">
                  <p className="text-2xl tracking-widest mt-5 mb-2">
                    {" "}
                    - Place's
                  </p>
                  <WSPGallery setData={dataInfo?.gallery?.places} />
                </div>
              )}
              {dataInfo?.gallery?.foods && (
                <div className="w-full py-2">
                  <p className="text-2xl tracking-widest mt-5 mb-2">
                    {" "}
                    - Food's
                  </p>
                  <WSPGallery setData={dataInfo?.gallery?.foods} />
                </div>
              )}
              {dataInfo?.gallery?.terms && (
                <div className="w-full py-2">
                  <p className="text-2xl tracking-widest mt-5 mb-2"> - Terms</p>
                  <WSPGallery setData={dataInfo?.gallery?.terms} />
                </div>
              )}
            </div>
          </ModalBody>

          <ModalFooter></ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default GalleryModal;
