import React, { useContext, useState, useEffect } from "react";
import OtherContent from "./OtherContent";
import { LangContext } from "../../../../../App";
import { history_3, history_4 } from "../../../../../assets";
import { Skeleton } from "@chakra-ui/react";

const HistoryContent = () => {
  const { language } = useContext(LangContext);
  const [imagesLoaded, setImagesLoaded] = useState(0);
  const [showSkeletons, setShowSkeletons] = useState(true);

  const images = [history_3, history_4];

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
          {language?.plan_page?.traveler_guides?.title}
        </p>
        <p className="text-lg">
          {language?.plan_page?.traveler_guides?.content}
        </p>
        <p className="text-lg">
          {language?.plan_page?.traveler_guides?.content_1}
        </p>
        {showSkeletons && (
          <Skeleton
            width="100%"
            height="300px"
            startColor="gray.200"
            endColor="gray.400"
          />
        )}
        {!showSkeletons && <img src={history_4} alt="History Image" />}
      </div>
      <div className="w-[400px]">
        <OtherContent />
      </div>
    </div>
  );
};

export default HistoryContent;
