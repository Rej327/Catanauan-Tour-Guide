import React, { useState, useEffect, useContext } from "react";
import { Skeleton } from "@chakra-ui/react";
import { LangContext } from "../../../../../App";

const OtherContent = () => {
  const { language } = useContext(LangContext);

  const [loading, setLoading] = useState(true);
  const [imagesLoaded, setImagesLoaded] = useState(0);

  const handleImageLoad = () => {
    setImagesLoaded(imagesLoaded + 1);

    if (
      imagesLoaded ===
      language?.plan_page?.cultures?.festival?.festival_img?.length
    ) {
      setLoading(false);
    }
  };

  useEffect(() => {
    const loadingTimeout = setTimeout(() => {
      setLoading(false);
    }, 999999);

    const imgPromises =
      language?.plan_page?.cultures?.festival?.festival_img?.map((data) => {
        return new Promise((resolve) => {
          const img = new Image();
          img.src = data.img;
          img.onload = () => {
            handleImageLoad();
            resolve();
          };
        });
      });

    Promise.all(imgPromises).then(() => {
      setLoading(false);
      clearTimeout(loadingTimeout);
    });

    return () => clearTimeout(loadingTimeout);
  }, []);

  return (
    <div className="w-full md:w-[300px] lg:w-[400px] bg-[#FCE9CB] flex flex-col gap-4 p-6 mx-auto">
      <p className="font-bold">Boling - Boling Festival Parade</p>
      {loading && (
        <div className="w-full flex flex-col gap-4">
          <Skeleton variant="image" width="100%" height="300px" />
          <Skeleton variant="image" width="100%" height="300px" />
          <Skeleton variant="image" width="100%" height="300px" />
        </div>
      )}
      {!loading &&
        language?.plan_page?.cultures?.festival?.festival_img
          ?.slice(0, 3)
          .map((data) => (
            <div className="w-full">
              <img
                src={data.img}
                alt="Boling-Boling Festival Image"
                className="h-[300px] w-full object-cover"
              />
            </div>
          ))}
    </div>
  );
};

export default OtherContent;
