import React, { useEffect } from "react";
import ArrowDown from "./ArrowDown";
import { Link } from "react-router-dom";

const Cover = ({
  className,
  bgImage,
  header,
  selectedPage,
  title,
  context,
}) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={`w-full ${className}`}>
      <div className={`bg-fixed bg-cover bg-center h-screen ${bgImage}`}>
        <div className="relative bg-black bg-opacity-60 w-full h-screen flex items-center flex-col justify-center ">
          <p className="text-4xl lg:text-5xl text-white font-title text-center tracking-wider">
            {header}
          </p>
          <ArrowDown className="absolute bottom-0" />
        </div>
      </div>
      <div className="py-20 px-2">
        <div className="max-w-[1300px] mx-auto flex flex-col items-center justify-center gap-10 text-center ">
          <div className="flex gap-2">
            <Link to="/">
              <p className="hover:font-bold hover:underline underline-offset-8 cursor-pointer">
                Home
              </p>
            </Link>
            <p> | </p>
            <p className="font-bold underline underline-offset-8">
              {selectedPage}
            </p>
          </div>
          <div className="max-w-[1000px] flex flex-col gap-10">
            <p className="text-3xl lg:text-4xl font-bold">{title}</p>
            <p className="text-xl">{context}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cover;
