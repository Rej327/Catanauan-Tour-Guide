import React, { useContext, useEffect, useState } from "react";
import { ImLocation } from "react-icons/im";
import { LangContext } from "../../App";
import { Link } from "react-router-dom";
import { SiAlwaysdata } from "react-icons/si";
import { getDirection } from "../helper";
import SkeletonLoader from "./SkeletonLoader";
import Button from "../common/Button";

const HotelBody = () => {
  const { language, startingPoint } = useContext(LangContext);
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

    if (imagesLoaded === language?.hotels_page?.length) {
      setLoading(false);
    }
  };

  useEffect(() => {
    const loadingTimeout = setTimeout(() => {
      setLoading(false);
    }, 999999);

    const imgPromises = language?.hotels_page?.map((data) => {
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
    <div className="max-w-[1300px] mx-auto">
      {loading ? (
        <>
          <SkeletonLoader />
          <SkeletonLoader />
          <SkeletonLoader />
          <SkeletonLoader />
          <SkeletonLoader />
          <SkeletonLoader />
          <SkeletonLoader />
          <SkeletonLoader />
        </>
      ) : (
        <>
          {language.hotels_page.map((data) => (
            <div
              key={data.id}
              className="flex flex-wrap py-10 border-b-[1px] justify-center gap-5"
            >
              <div className="max-w-[400px] overflow-hidden">
                <img
                  src={data.img}
                  alt="Hotel Image"
                  className="w-[390px] h-[290px] object-cover hover:scale-125 duration-700 delay-75 ease-in-out"
                  onLoad={handleImageLoad}
                />
              </div>
              <div className="w-[800px] px-4 h-fit my-auto items-center flex flex-col gap-5">
                <div className="flex flex-col mr-auto gap-4">
                  <p className=" w-fit text-base p-2 rounded-2xl categoryColor font-bold">
                    {data.category}
                  </p>
                  <p className="text-2xl font-bold">{data.title}</p>
                  <p className="text-lg">{data.content}</p>
                </div>
                <div className="w-full flex flex-wrap justify-between gap-10">
                  <div className="flex flex-col gap-2">
                    <div className="w-fit flex gap-1 items-center justify-center">
                      <ImLocation className="iconCardColor text-xl" />
                      <Link to={data.loc_link} target="_blank">
                        <p className="text-base hover:underline underline-offset-8 cursor-pointer">
                          {data.location}
                        </p>
                      </Link>
                    </div>
                    <div className="w-fit flex gap-1 items-center justify-center">
                      <SiAlwaysdata className="iconCardColor text-xl" />
                      <Link
                        to={getDirection(data.direction_link, startingPoint)}
                        target="_blank"
                      >
                        <p className="text-base hover:underline underline-offset-8 cursor-pointer">
                          {data.direction_txt} &#8594;
                        </p>
                      </Link>
                    </div>
                  </div>
                  <div className="w-fit flex gap-4">
                    <Link to={data.btn_visit_link} target="_blank">
                      <Button
                        label={data.btn_visit_txt}
                        className="w-auto text-sm text-black bg-[#FADEB0]"
                      ></Button>
                      {/* <p className="w-fit flex items-center px-4 py-2 rounded-xl border-[1px] text-[#f1be66] border-[#f1be66] hover:scale-110 duration-200 ease-in cursor-pointer">
                        {data.btn_visit_txt}
                      </p> */}
                    </Link>
                    <Link onClick={handleClick} to={`/hotels/${data.id}`}>
                      <Button
                        label={data.btn_more_txt}
                        className="w-auto text-sm text-black bg-[#FADEB0]"
                      ></Button>
                      {/* <p className="w-fit flex items-center px-4 py-2 rounded-xl bg-[#f1be66] text-white hover:scale-110 duration-200 ease-in cursor-pointer">
                        {data.btn_more_txt}
                      </p> */}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default HotelBody;
