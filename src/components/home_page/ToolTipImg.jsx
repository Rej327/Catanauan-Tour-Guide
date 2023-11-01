import React, { useState } from "react";
import { Skeleton } from "@chakra-ui/react";

const ToolTipImg = ({ tipImg_0, tipImg_1, tipImg_2 }) => {
  const [imageLoaded_0, setImageLoaded_0] = useState(false);
  const [imageLoaded_1, setImageLoaded_1] = useState(false);
  const [imageLoaded_2, setImageLoaded_2] = useState(false);

  const handleImageLoad_0 = () => {
    setImageLoaded_0(true);
  };
  const handleImageLoad_1 = () => {
    setImageLoaded_1(true);
  };
  const handleImageLoad_2 = () => {
    setImageLoaded_2(true);
  };

  return (
    <div className="rounded-xl mb-2 flex flex-wrap w-[500px] justify-center gap-4">
      <div className="w-[220px] h-[190px] emboss-image rounded-xl">
        <Skeleton
          isLoaded={imageLoaded_0} // Use the boolean value here
          startColor="gray.200"
          endColor="gray.400"
          height="190px"
          rounded="xl"
        >
          <img
            src={tipImg_0}
            className="rounded-xl w-[220px] h-[190px] shadow-2xl object-cover"
            onLoad={() => handleImageLoad_0()}
          />
        </Skeleton>
      </div>
      <div className="w-[220px] h-[190px] emboss-image rounded-xl">
        <Skeleton
          isLoaded={imageLoaded_1} // Use the boolean value here
          startColor="gray.200"
          endColor="gray.400"
          height="190px"
          rounded="xl"
        >
          <img
            src={tipImg_1}
            className="rounded-xl w-[220px] h-[190px] shadow-2xl object-cover"
            onLoad={() => handleImageLoad_1()}
          />
        </Skeleton>
      </div>
      <div className="w-[220px] h-[190px] emboss-image rounded-xl">
        <Skeleton
          isLoaded={imageLoaded_2} // Use the boolean value here
          startColor="gray.200"
          endColor="gray.400"
          height="190px"
          rounded="xl"
        >
          <img
            src={tipImg_2}
            className="rounded-xl w-[220px] h-[190px] shadow-2xl object-cover"
            onLoad={() => handleImageLoad_2()}
          />
        </Skeleton>
      </div>
    </div>
  );
};

export default ToolTipImg;
