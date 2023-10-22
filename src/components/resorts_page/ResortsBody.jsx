import React, { useContext, useEffect, useState } from "react";
import { ImLocation } from "react-icons/im";
import { LangContext } from "../../App";
import { Link } from "react-router-dom";
import { Skeleton, SkeletonText } from "@chakra-ui/react";

const ResortsBody = () => {
  const { language } = useContext(LangContext);
  const [loading, setLoading] = useState(true);
  const [imagesLoaded, setImagesLoaded] = useState(0);

  const handleClick = () => {
    const isScrolledToTop = this.state.isScrolledToTop;

    if (!isScrolledToTop) {
      window.scrollTo({
        top: 0,
      });
      this.setState({
        isScrolledToTop: true,
      });
    }
  };

  const handleImageLoad = () => {
    setImagesLoaded(imagesLoaded + 1);

    if (imagesLoaded === language?.resorts_page?.length) {
      setLoading(false);
    }
  };

  useEffect(() => {
    const loadingTimeout = setTimeout(() => {
      setLoading(false);
    }, 999999);

    const imgPromises = language?.resorts_page?.map((data) => {
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
    <div className="max-w-[1300px] pb-10 mx-auto justify-center items-center flex flex-wrap gap-10 px-2">
      {language?.resorts_page?.map((data) => (
        <div
          key={data.id}
          className="relative max-w-[290px] ScrollableSection overflow-y-scroll h-[410px] resortItems flex flex-col gap-2 bg-white rounded-xl"
        >
          <div className="rounded-xl w-[290px] h-[250px] overflow-hidden">
            {loading ? (
              <Skeleton width="100%" height="250px" />
            ) : (
              <img
                src={data.img}
                className="w-[290px] h-[250px] itemImg  object-cover rounded-xl"
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
              </>
            ) : (
              <>
                <p className="w-fit text-base text-[#f1be66] font-bold">
                  {data.category}
                </p>
                <p className="text-lg font-extrabold">{data.title}</p>
                <div className="w-fit flex gap-1 items-center">
                  <ImLocation className="iconCardColor" />
                  <p className="text-base hover:underline underline-offset-8 cursor-pointer">
                    {data.location}
                  </p>
                </div>
                <p className="text-center text-base textCardColor underline cursor-pointer hover:no-underline underline-offset-8">
                  <Link onClick={handleClick} to={`/resorts/${data.id}`}>
                    {data.btn_txt}
                  </Link>
                </p>
              </>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ResortsBody;
