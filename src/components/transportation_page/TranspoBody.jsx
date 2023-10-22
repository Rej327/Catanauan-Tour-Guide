import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ImLocation, ImNotification } from "react-icons/im";
import { SiAlwaysdata } from "react-icons/si";
import { PiHandCoinsDuotone } from "react-icons/pi";
import { LangContext } from "../../App";
import { Skeleton, SkeletonText, Tooltip, useToast } from "@chakra-ui/react";
import { getDirection } from "../helper";

const TransportationsBody = () => {
  const { language, startingPoint } = useContext(LangContext);
  const [loading, setLoading] = useState(true);
  const [imagesLoaded, setImagesLoaded] = useState(0);
  const toast = useToast();

  const displayWarningToast = () => {
    toast({
      title: "Notice",
      description: "Price increase without prior notice.",
      status: "error",
      duration: 5000, // Toast will disappear after 5 seconds
      isClosable: true,
      position: "top",
    });
  };

  const handleImageLoad = () => {
    setImagesLoaded(imagesLoaded + 1);

    if (imagesLoaded === language?.transportations_page?.length) {
      setLoading(false);
    }
  };

  useEffect(() => {
    const loadingTimeout = setTimeout(() => {
      setLoading(false);
    }, 999999);

    const imgPromises = language?.transportations_page?.map((data) => {
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
    <div className="max-w-[1350px] pb-10 mx-auto justify-center items-center flex flex-wrap gap-5">
      {language.transportations_page.map((data) => (
        <div
          key={data.id}
          className="max-w-[320px] resortItems flex flex-col gap-2 bg-white rounded-xl"
        >
          <div className="rounded-xl w-full overflow-hidden">
            {loading ? (
              <Skeleton width="320px" height="320px" />
            ) : (
              <img
                src={data.img}
                className="w-full max-h-[320px] itemImg object-cover rounded-xl"
                onLoad={handleImageLoad}
              />
            )}
          </div>
          <div className="w-full mt-2 mb-4 px-2 flex flex-col gap-2">
            {loading ? (
              <>
                <SkeletonText mt="4" noOfLines={1} spacing="4" />
                <SkeletonText mt="4" noOfLines={1} spacing="4" />
                <SkeletonText mt="4" noOfLines={1} spacing="4" />
                <SkeletonText mt="4" noOfLines={1} spacing="4" />
                <SkeletonText mt="4" noOfLines={1} spacing="4" />
              </>
            ) : (
              <>
                <p className="text-lg font-extrabold tracking-widest">
                  {data.toda}
                </p>
                <div className="w-fit flex gap-1 items-center">
                  <ImLocation className="iconCardColor text-xl" />
                  <Link to={data.loc_link} target="_blank">
                    <Tooltip label="Location" placement="bottom">
                      <p className="text-base hover:underline underline-offset-8 duration-200 cursor-pointer">
                        {data.loc}
                      </p>
                    </Tooltip>
                  </Link>
                </div>
                <div className="w-fit flex gap-1 items-center">
                  <SiAlwaysdata className="iconCardColor text-xl" />
                  <Tooltip label="Routes" placement="bottom">
                    <Link to={data.rts_link} target="_blank">
                      <p className="text-base hover:underline underline-offset-8 duration-200 cursor-pointer">
                        {data.rts}
                      </p>
                    </Link>
                  </Tooltip>
                </div>
                <div className="w-fit flex gap-1 items-center">
                  <PiHandCoinsDuotone className="iconCardColor text-xl" />
                  <Tooltip label="Fare" placement="bottom">
                    <p className="text-base hover:underline underline-offset-8 duration-200 cursor-pointer">
                      ₱ {data.fare}{" "}
                    </p>
                  </Tooltip>
                  <Tooltip
                    label="Price increase without prior notice."
                    placement="bottom"
                  >
                    <p className="my-auto ml-2" onClick={displayWarningToast}>
                      <ImNotification className="cursor-pointer text-base text-red-600" />
                    </p>
                  </Tooltip>
                </div>
                <div className="w-fit">
                  <Link
                    to={getDirection(data.direction, startingPoint)}
                    target="_blank"
                  >
                    <p className="w-auto textCardColor hover:translate-x-5 duration-300 hover:font-bold">
                      {data.direction_txt} &#8594;
                    </p>
                  </Link>
                </div>
              </>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default TransportationsBody;
