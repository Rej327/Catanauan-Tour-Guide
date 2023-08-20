import React, { useState, useEffect } from "react";
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from "react-icons/bs";
import { AiOutlineZoomIn, AiOutlineZoomOut } from "react-icons/ai";
import { BiReset } from "react-icons/bi";
import { IoIosClose } from "react-icons/io";
import { Skeleton } from "@chakra-ui/react"; // Import the Skeleton component

const WSPGallery = ({ setData }) => {
  const [slideNumber, setSlideNumber] = useState(0);
  const [openModal, setOpenModal] = useState(false);
  const [isZoomed, setIsZoomed] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [zoomLevel, setZoomLevel] = useState(1);
  const [panPosition, setPanPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const loadingTimeout = setTimeout(() => {
      setIsLoading(false);
    }, 999999);

    const img = new Image();
    img.src = setData?.[slideNumber].img;

    img.onload = () => {
      setIsLoading(false);
      clearTimeout(loadingTimeout);
    };

    return () => clearTimeout(loadingTimeout);
  }, [setData, slideNumber]);

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

  const handleZoomIn = () => {
    setZoomLevel(Math.min(zoomLevel + 0.1, 2));
  };

  const handleZoomOut = () => {
    setZoomLevel(Math.max(zoomLevel - 0.1, 1));
  };

  const handleResetZoom = () => {
    setZoomLevel(1);
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
          <div
            className="fullScreenImage"
            style={{
              cursor: isZoomed ? "auto" : "auto",
              overflow: "scroll",
            }}
            onMouseDown={() => setIsZoomed(true)}
            onMouseUp={() => setIsZoomed(false)}
          >
            <div
              className={`transition-transform max-w-[90vh] max-h-screen duration-300 ${
                isZoomed ? "scale-150" : "scale-50"
              }`}
              style={{
                transform: `scale(${zoomLevel}) translate(${panPosition.x}px, ${panPosition.y}px)`,
                transformOrigin: "center",
              }}
            >
              {isLoading ? (
                <Skeleton isLoaded={!isLoading}></Skeleton>
              ) : (
                <img
                  src={setData?.[slideNumber].img}
                  alt=""
                  className="object-contain"
                />
              )}
            </div>
          </div>
          <div className="zoomControls bg-black p-4 rounded-full bg-opacity-70 gap-10">
            <AiOutlineZoomOut
              className="text-2xl text-gray-300 cursor-pointer hover:text-white duration-300"
              onClick={handleZoomOut}
            />
            <BiReset
              className="text-2xl text-gray-300 cursor-pointer hover:text-white duration-300"
              onClick={handleResetZoom}
            />
            <AiOutlineZoomIn
              className="text-2xl text-gray-300 cursor-pointer hover:text-white duration-300"
              onClick={handleZoomIn}
            />
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
