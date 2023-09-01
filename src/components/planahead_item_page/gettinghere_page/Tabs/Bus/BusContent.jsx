import React, { useContext, useState, useEffect } from "react";
import { bybus } from "../../../../../assets";
import BusOtherContent from "./BusOtherContent";
import { LangContext } from "../../../../../App";
import { Skeleton } from "@chakra-ui/react";

const BusContent = () => {
  const { language } = useContext(LangContext);
  const [imagesLoaded, setImagesLoaded] = useState(0);
  const [showSkeletons, setShowSkeletons] = useState(true);

  const images = [bybus];

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
      <div className="max-w-[850px] flex flex-col gap-5 my-5">
        <p className="font-bold text-2xl">
          {language?.plan_page?.getting_here?.by_bus?.title}
        </p>
        <p className="text-lg">
          {language?.plan_page?.getting_here?.by_bus?.content}
        </p>

        {showSkeletons && (
          <Skeleton
            width="100%"
            height="80vh"
            startColor="gray.200"
            endColor="gray.400"
          />
        )}
        {!showSkeletons && (
          <img
            src={bybus}
            alt="Catanauan Image"
            className="w-full h-[80vh] my-5 object-contain"
          />
        )}

        <p className="font-bold text-2xl">
          {language?.plan_page?.getting_here?.by_bus?.sub_title_0}
        </p>
        <p className="text-lg">
          {language?.plan_page?.getting_here?.by_bus?.sub_content_0}
        </p>
        <p className="font-bold text-2xl">
          {language?.plan_page?.getting_here?.by_bus?.sub_title_1}
        </p>
        <p className="text-lg">
          {language?.plan_page?.getting_here?.by_bus?.sub_content_1}
        </p>
      </div>
      <div className="w-[400px]">
        <BusOtherContent />
      </div>
    </div>
  );
};

export default BusContent;
