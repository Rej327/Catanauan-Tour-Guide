import React from "react";
import { Link } from "react-router-dom";

const ItemHeader = ({ className, selectedPage, textStyle }) => {
  return (
    <div
      className={`max-w-[1300px] px-4 mx-auto flex flex-col justify-center ${className}`}
    >
      <div className="flex gap-2 my-10 text-sm">
        <Link to="/">
          <p className="hover:font-bold hover:underline underline-offset-8 cursor-pointer">
            Home
          </p>
        </Link>
        <p> | </p>
        <p className={`font-bold underline underline-offset-8 ${textStyle}`}>
          {selectedPage}
        </p>
      </div>
      <div className="mb-10">
        <p className={`font-bold text-3xl md:text-4xl ${textStyle}`}>
          {selectedPage}
        </p>
      </div>
    </div>
  );
};

export default ItemHeader;
