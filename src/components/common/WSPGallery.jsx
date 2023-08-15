import React, { useState, useEffect } from "react";
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from "react-icons/bs";
import { IoIosClose } from "react-icons/io";
import { Skeleton } from "@chakra-ui/react"; // Import the Skeleton component

const WSPGallery = ({ setData }) => {
  const [slideNumber, setSlideNumber] = useState(0);
  const [openModal, setOpenModal] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadingTimeout = setTimeout(() => {
      setIsLoading(false);
    }, 999999);

    return () => clearTimeout(loadingTimeout);
  }, []); // Run only once when the component mounts

  const handleOpenModal = (index) => {
    setSlideNumber(index);
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const prevSlide = () => {
    setSlideNumber((slideNumber + setData.length - 1) % setData.length);
  };

  const nextSlide = () => {
    setSlideNumber((slideNumber + 1) % setData.length);
  };

  return (
    <div>
      {openModal && (
        <div className="sliderWrap">
          <IoIosClose
            className="btnClose text-4xl"
            onClick={handleCloseModal}
          />
          <BsFillArrowLeftCircleFill
            className="btnPrev text-2xl"
            onClick={prevSlide}
          />
          <BsFillArrowRightCircleFill
            className="btnNext text-2xl"
            onClick={nextSlide}
          />
          <div className="fullScreenImage">
            {isLoading ? (
              <Skeleton isLoaded={!isLoading}></Skeleton>
            ) : (
              <img
                src={setData?.[slideNumber].img}
                alt=""
                onLoad={() => setIsLoading(false)}
              />
            )}
          </div>
        </div>
      )}

      <div className="flex flex-wrap gap-4 last:justify-normal justify-between items-center max-w-[1300px] mx-auto py-4 px-2">
        {setData &&
          setData?.map((slide, index) => (
            <div
              className="single overflow-hidden max-lg:mx-auto rounded-lg"
              key={index}
              onClick={() => handleOpenModal(index)}
            >
              <Skeleton isLoaded={!isLoading}>
                <img
                  src={slide.img}
                  className="w-[300px] h-[290px] rounded-lg object-cover hover:scale-105 duration-300 cursor-zoom-in"
                  alt=""
                />
              </Skeleton>
            </div>
          ))}
      </div>
    </div>
  );
};

export default WSPGallery;
