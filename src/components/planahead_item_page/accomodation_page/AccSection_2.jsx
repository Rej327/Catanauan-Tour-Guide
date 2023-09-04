import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { hc2 } from "../../../assets";
import { LangContext } from "../../../App";
import { Skeleton } from "@chakra-ui/react";

const AccSection_2 = ({ className }) => {
  const { language } = useContext(LangContext);

  const [imagesLoaded, setImagesLoaded] = useState(0);
  const [showSkeletons, setShowSkeletons] = useState(true);

  const images = [hc2];

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
    <div className={`w-full bg-[#FEFEFF] ${className}`}>
      <div className="max-w-[1300px] flex flex-col mx-auto">
        <div className="flex flex-col gap-4 my-5 px-4">
          <p className="text-2xl font-bold">
            {language.plan_page?.accomodation?.sub_header}
          </p>
          <p className="text-lg">
            {language.plan_page?.accomodation?.sub_content_0}
          </p>
          <p className="text-lg">
            {language.plan_page?.accomodation?.sub_content_0}.
          </p>
          <p className="text-lg">
            {language.plan_page?.accomodation?.sub_content_0}
          </p>
          {showSkeletons && (
            <Skeleton variant="image" width="100%" height="70vh" />
          )}
          {!showSkeletons && (
            <img
              src={hc2}
              alt="Accomodation Image"
              className="h-[70vh] object-cover"
            />
          )}

          <p className="text-[#d4a148] w-fit pl-2 text-lg hover:translate-x-2 hover:font-bold duration-300 ">
            <Link to="/hotels">
              {language.plan_page?.accomodation?.btn_txt} →
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default AccSection_2;
