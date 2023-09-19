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
import WSPGallery from "../../common/WSPGallery";

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
      <p
        className="w-auto text-[#f1be66] text-center hover:text-[#be8624] cursor-pointer"
        onClick={() => {
          onOpen();
          displayWarningToast(); // Display the warning toast when the modal is opened
        }}
      >
        Menu &#8594;
      </p>

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
            <div className="w-full py-2 border-b-2">
              <p className="text-2xl tracking-widest mt-5 mb-2"> - Menu</p>
              <WSPGallery setData={dataInfo} />
            </div>
          </ModalBody>

          <ModalFooter></ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default PricesModal;
