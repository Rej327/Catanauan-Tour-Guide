import React, { useContext, useEffect, useState } from "react";
import Carousel from "../common/Carousel";
import { LangContext } from "../../App";
import { Link } from "react-router-dom";
import { ImLocation } from "react-icons/im";
import { Skeleton } from "@chakra-ui/react";

const Resorts = ({ className, id }) => {
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

    const imgPromises = language?.resorts_page?.slice(0, 3).map((data) => {
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
    <div id={id} className={`w-full ${className}`}>
      {/* DESKTOP SIZE */}
      <div className="w-full flex">
        <div className="w-full h-[400px] bg-[#FCE9CB]"></div>
        <div className="max-sm:hidden w-full h-[400px]"></div>
      </div>
      <div className="relative max-w-[1300px] mx-auto px-2 md:px-[2rem] lg:px-[3rem] -mt-[23rem]">
        <div className="md:absolute lg:-mt-[10rem] max-w-[300px]">
          <p className="font-header hashColor text-4xl mt-10">
            {language?.resorts_section?.head}
          </p>
          <p className="text-4xl font-bold tracking-wide my-5">
            {language?.resorts_section?.title}
          </p>
          <p className="text-xl">{language?.resorts_section?.content}</p>

          <div className="w-fit">
            <Link to="/resorts">
              <p className="text-base seeMore my-5 hover:translate-x-2 duration-300">
                {language?.resorts_section?.btn_txt}
              </p>
            </Link>
          </div>
        </div>
        <div>
          {loading ? (
            // Show Chakra UI Skeleton while data is loading
            <div className="flex gap-10 mb-12 ml-auto lg:mt-[10rem] md:max-w-[300px] lg:max-w-[790px] h-[250px] right-[5%] top-[15rem]">
              <div className="max-sm:mx-auto max-w-[250px] h-[350px] homeItemContainer flex flex-col gap-2 bg-white rounded-xl">
                <Skeleton width="250px" height="200px" mb="10px" />
                <Skeleton width="100px" height="16px" mb="6px" />
                <Skeleton width="200px" height="24px" mb="2px" />
                <Skeleton width="150px" height="16px" />
              </div>
              <div className="max-lg:hidden max-w-[250px] h-[350px] homeItemContainer flex flex-col gap-2 bg-white rounded-xl">
                <Skeleton width="250px" height="200px" mb="10px" />
                <Skeleton width="100px" height="16px" mb="6px" />
                <Skeleton width="200px" height="24px" mb="2px" />
                <Skeleton width="150px" height="16px" />
              </div>
              <div className="max-md:hidden max-w-[250px] h-[350px] homeItemContainer flex flex-col gap-2 bg-white rounded-xl">
                <Skeleton width="250px" height="200px" mb="10px" />
                <Skeleton width="100px" height="16px" mb="6px" />
                <Skeleton width="200px" height="24px" mb="2px" />
                <Skeleton width="150px" height="16px" />
              </div>
            </div>
          ) : (
            <div className="mb-24 ml-auto lg:mt-[10rem] md:max-w-[300px] lg:max-w-[790px] h-[250px] right-[5%] top-[15rem]">
              <Carousel>
                {language?.resorts_page?.map((data) => (
                  <div
                    key={data.id}
                    className="ScrollableSection max-w-[250px] h-[380px] overflow-y-scroll homeItemContainer flex flex-col gap-10 bg-white rounded-xl"
                  >
                    <div className="rounded-xl w-[250px] h-[200px] overflow-hidden">
                      <img
                        src={data.img}
                        className="w-[250px] h-[200px] itemImg  object-cover rounded-xl"
                        onLoad={handleImageLoad}
                      />
                    </div>
                    <div className="relative w-full h-[130px] mt-2 mb-4 px-2 flex flex-col gap-2">
                      <p className="w-fit text-base categoryColor font-bold">
                        {data.category}
                      </p>
                      <p className="text-lg font-extrabold">{data.title}</p>
                      <div className="w-fit flex gap-1 items-center">
                        <p>
                          <ImLocation className="iconCardColor text-xl" />
                        </p>
                        <Link to={data.loc_link} target="_blank">
                          <p className="text-base hover:underline underline-offset-8 duration-200 cursor-pointer">
                            {data.location}
                          </p>
                        </Link>
                      </div>
                      <Link onClick={handleClick} to={`/resorts/${data.id}`}>
                        <p className="mt-auto mb-4 ml-[6rem] text-base textCardColor underline duration-200 cursor-pointer hover:no-underline underline-offset-8">
                          {data.btn_txt}
                        </p>
                      </Link>
                    </div>
                  </div>
                ))}
              </Carousel>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Resorts;
