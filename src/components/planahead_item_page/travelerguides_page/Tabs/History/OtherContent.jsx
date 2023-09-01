import React, { useState, useEffect } from "react";
import {
  history_0,
  history_1,
  history_2,
  history_4,
} from "../../../../../assets";
import { Skeleton } from "@chakra-ui/react";

const OtherContent = () => {
  const [imagesLoaded, setImagesLoaded] = useState(0);
  const [showSkeletons, setShowSkeletons] = useState(true);

  const images = [history_0, history_1, history_2, history_4];

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
    <div className="w-full md:w-[300px] lg:w-[400px] bg-[#FCE9CB] flex flex-col gap-4 p-6 mx-auto">
      <p className="font-bold text-lg">Where History Comes Alive!</p>
      <p className="text-lg">Something In 18th Century</p>
      {showSkeletons && (
        <Skeleton
          width="100%"
          height="300px"
          startColor="gray.200"
          endColor="gray.400"
        />
      )}
      {!showSkeletons && <img src={history_4} alt="History Image" />}
      <p className="text-lg">Catanauan Quezon Now!</p>
      {showSkeletons && (
        <Skeleton
          width="100%"
          height="300px"
          startColor="gray.200"
          endColor="gray.400"
        />
      )}
      {!showSkeletons && <img src={history_0} alt="History Image" />}
      {showSkeletons && (
        <Skeleton
          width="100%"
          height="300px"
          startColor="gray.200"
          endColor="gray.400"
        />
      )}
      {!showSkeletons && <img src={history_1} alt="History Image" />}
      {showSkeletons && (
        <Skeleton
          width="100%"
          height="300px"
          startColor="gray.200"
          endColor="gray.400"
        />
      )}
      {!showSkeletons && <img src={history_2} alt="History Image" />}
    </div>
  );
};

export default OtherContent;
