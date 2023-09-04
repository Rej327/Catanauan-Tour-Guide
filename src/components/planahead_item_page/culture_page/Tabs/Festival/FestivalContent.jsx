import React, { useState, useEffect, useContext } from "react";
import { Skeleton } from "@chakra-ui/react";
import OtherContent from "./OtherContent";
import { festival_3 } from "../../../../../assets";
import { LangContext } from "../../../../../App";

const FestivalContent = () => {
  const { language } = useContext(LangContext);
  const [imagesLoaded, setImagesLoaded] = useState(0);
  const [showSkeletons, setShowSkeletons] = useState(true);

  const images = [festival_3];

  useEffect(() => {
    const imgPromises = images.map((src) => {
      return new Promise((resolve) => {
        const img = new Image();
        img.src = src;
        img.onload = () => {
          setImagesLoaded((prev) => prev + 1);
          resolve();
        };
        img.onerror = () => {
          setImagesLoaded((prev) => prev + 1);
          resolve();
        };
      });
    });
    Promise.all(imgPromises).then(() => {
      setShowSkeletons(false);
    });
  }, [images]);

  return (
    <div className="w-full flex flex-wrap md:flex-nowrap gap-2 justify-center lg:justify-between ">
      <div className="max-w-[850px] flex flex-col gap-4 my-5">
        <p className="font-bold text-2xl">
          {language?.plan_page?.cultures?.festival?.title}
        </p>
        <p className="text-lg">
          {language?.plan_page?.cultures?.festival?.content_0}
        </p>
        <p className="text-lg">
          {language?.plan_page?.cultures?.festival?.content_1}
        </p>
        <p className="text-lg">
          {language?.plan_page?.cultures?.festival?.content_2}
        </p>
        {showSkeletons && (
          <Skeleton variant="image" width="100%" height="18rem" />
        )}
        {!showSkeletons && (
          <img
            src={festival_3}
            alt="Catanauan Image"
            className="w-full h-[18rem] object-cover"
          />
        )}
      </div>
      <div className="w-[400px]">
        <OtherContent />
      </div>
    </div>
  );
};

export default FestivalContent;
