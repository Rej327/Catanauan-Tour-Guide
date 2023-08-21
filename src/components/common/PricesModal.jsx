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

const PricesModal = ({ dataInfo }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <button
        className="px-4 py-2 rounded-2xl bg-[#F9DBA9] hover:scale-105 duration-300"
        onClick={onOpen}
      >
        <p>Check Prices</p>
      </button>

      <Modal size="full" isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            <div className="max-w-[1300px] mx-auto">
              <p className="text-2xl tracking-widest">Price Rates</p>
            </div>
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <div className="max-w-[1300px] mx-auto px-4">
              {dataInfo?.menu?.hotel && (
                <div className="w-full py-5 border-b-2">
                  <p className="text-2xl tracking-widest mt-5 mb-2">
                    {" "}
                    - Room's
                  </p>
                  <WSPGallery setData={dataInfo?.menu?.hotel} />
                </div>
              )}

              {dataInfo?.menu?.foods && (
                <div className="w-full py-2 border-b-2">
                  <p className="text-2xl tracking-widest mt-5 mb-2">
                    {" "}
                    - Menu's
                  </p>
                  <WSPGallery setData={dataInfo?.menu?.foods} />
                </div>
              )}

              {dataInfo?.menu?.pools && (
                <div className="w-full py-2">
                  <p className="text-2xl tracking-widest mt-5 mb-2">
                    {" "}
                    - Pool's
                  </p>
                  <WSPGallery setData={dataInfo?.menu?.pools} />
                </div>
              )}

              {dataInfo?.prices?.fee && (
                <div className="w-full py-2">
                  <p className="text-2xl tracking-widest mt-5 mb-2">
                    {" "}
                    - Entrance Fee's
                  </p>
                  <WSPGallery setData={dataInfo?.prices?.fee} />
                </div>
              )}

              {dataInfo?.prices?.hotel && (
                <div className="w-full py-2">
                  <p className="text-2xl tracking-widest mt-5 mb-2">
                    {" "}
                    - Room's
                  </p>
                  <WSPGallery setData={dataInfo?.prices?.hotel} />
                </div>
              )}

              {dataInfo?.prices?.menu && (
                <div className="w-full py-2">
                  <p className="text-2xl tracking-widest mt-5 mb-2">
                    {" "}
                    - Menu's
                  </p>
                  <WSPGallery setData={dataInfo?.prices?.menu} />
                </div>
              )}

              {dataInfo?.prices?.cottage && (
                <div className="w-full py-2">
                  <p className="text-2xl tracking-widest mt-5 mb-2">
                    {" "}
                    - Cottage Rates
                  </p>
                  <WSPGallery setData={dataInfo?.prices?.cottage} />
                </div>
              )}

              {dataInfo?.prices?.room && (
                <div className="w-full py-2">
                  <p className="text-2xl tracking-widest mt-5 mb-2">
                    {" "}
                    - Room Rates
                  </p>
                  <WSPGallery setData={dataInfo?.prices?.room} />
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

export default PricesModal;
