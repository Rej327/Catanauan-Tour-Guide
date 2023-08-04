import { useState } from "react";
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from "react-icons/bs";
import { IoIosClose } from "react-icons/io";

const WSPGallery = ({ setData }) => {
  const [slideNumber, setSlideNumber] = useState(0);
  const [openModal, setOpenModal] = useState(false);

  const handleOpenModal = (index) => {
    setSlideNumber(index);
    setOpenModal(true);
  };

  // Close Modal
  const handleCloseModal = () => {
    setOpenModal(false);
  };

  // Previous Image
  const prevSlide = () => {
    slideNumber === 0
      ? setSlideNumber(setData?.length - 1)
      : setSlideNumber(slideNumber - 1);
  };

  // Next Image
  const nextSlide = () => {
    slideNumber + 1 === setData?.length
      ? setSlideNumber(0)
      : setSlideNumber(slideNumber + 1);
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
            <img src={setData?.[slideNumber].img} alt="" />
          </div>
        </div>
      )}

      <div className="flex flex-wrap gap-4 last:justify-normal justify-between items-center max-w-[1300px] mx-auto py-4 px-2">
        {setData &&
          setData?.map((slide, index) => {
            return (
              <div
                className="single overflow-hidden max-lg:mx-auto rounded-lg"
                key={index}
                onClick={() => handleOpenModal(index)}
              >
                <img
                  src={slide.img}
                  className="w-[300px] h-[290px] rounded-lg object-cover hover:scale-105 duration-300 cursor-zoom-in"
                  alt=""
                />
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default WSPGallery;
