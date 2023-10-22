import React, { useState } from "react";
import { Skeleton } from "@chakra-ui/react";

const ToolTipImg = ({ tipImg }) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  return (
    <div className="rounded-xl w-[400px] mx-4 shadow-2xl border-b-2 border-[#F9DBA9]">
      <Skeleton
        rounded="2xl"
        isLoaded={imageLoaded}
        startColor="gray.200"
        endColor="gray.400"
        height="350px"
      >
        <img
          src={tipImg}
          className="rounded-xl w-[400px] h-[350px] shadow-2xl object-cover"
          onLoad={handleImageLoad}
        />
      </Skeleton>
    </div>
  );
};

export default ToolTipImg;
