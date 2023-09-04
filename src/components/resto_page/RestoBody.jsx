import React, { useContext, useEffect, useState } from "react";
import { LangContext } from "../../App";
import { Link } from "react-router-dom";
import { Skeleton } from "@chakra-ui/react";

const RestoBody = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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

    if (imagesLoaded === language?.restaurants_page?.length) {
      setLoading(false);
    }
  };

  useEffect(() => {
    const loadingTimeout = setTimeout(() => {
      setLoading(false);
    }, 999999);

    const imgPromises = language?.restaurants_page?.map((data) => {
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
    <div className="max-w-[1300px] mt-5 mb-10 mx-auto flex flex-wrap justify-center items-center gap-10">
      {language?.restaurants_page?.map((data) => (
        <div
          key={data.id}
          className="rounded-2xl relative restoItems w-fit h-fit"
        >
          <div className="absolute rounded-b-2xl z-10 bottom-0 bg-black bg-opacity-50 flex flex-col justify-center items-center w-full h-[75px]">
            {loading ? (
              <Skeleton height="1rem" width="80%" mb="0.5rem" />
            ) : (
              <>
                <p className="text-lg text-[#fefeff]">{data.title}</p>
                <Link onClick={handleClick} to={`/restaurants/${data.id}`}>
                  <p className="text-[#f9dba9] text-base hover:underline underline-offset-8 hover:cursor-pointer">
                    {data.btn_txt}
                  </p>
                </Link>
              </>
            )}
          </div>
          <div className="rounded-2xl w-[320px] h-[320px] overflow-hidden">
            {loading ? (
              <Skeleton height="100%" width="100%" />
            ) : (
              <img
                src={data.img}
                alt={`${data.title} Image`}
                className="w-full h-full object-cover itemImg"
              />
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default RestoBody;
