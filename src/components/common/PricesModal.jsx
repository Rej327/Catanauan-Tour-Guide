import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import React from "react";
import WSPGallery from "./WSPGallery";
import Button from "./Button";

const PricesModal = ({ dataInfo }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const toast = useToast();
  const displayWarningToast = () => {
    toast({
      title: "Notice",
      description: "Price increase without prior notice.",
      status: "error",
      duration: 5000, // Toast will disappear after 5 seconds
      isClosable: true,
      position: "top",
    });
  };
  return (
    <>
      <Button
        className="bg-[#F9DBA9] text-black w-auto text-base"
        label="Check Prices"
        onClick={() => {
          onOpen();
          displayWarningToast(); // Display the warning toast when the modal is opened
        }}
      ></Button>

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

              {dataInfo?.prices?.price && (
                <div className="w-full py-2">
                  <p className="text-2xl tracking-widest mt-5 mb-2">
                    {" "}
                    - Price's
                  </p>
                  <WSPGallery setData={dataInfo?.prices?.price} />
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
