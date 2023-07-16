import React from "react";
import { BsSearch } from "react-icons/bs";

const SearchBar = ({
  value,
  onChange,
  className,
  containerStyle,
  iconStyle,
}) => {
  return (
    <div
      className={`relative max-sm:w-[320px] w-[400px] h-[40px] rounded-full ${containerStyle}`}
    >
      <input
        id="searchInput"
        placeholder="What are you looking for?"
        className={`absolute max-sm:w-[320px] w-[400px] h-[40px] rounded-full p-4 pr-11 subBodyColor tracking-wide text-sm bg-black bg-opacity-50 outline-none placeholder:text-[#fffbf3] focus:bg-opacity-80 focus:text-opacity-80 duration-300 delay-75 ${className}`}
        value={value}
        onChange={onChange}
      />
      <div className=" h-[40px] w-[50px] absolute right-0 grid place-content-center cursor-pointer">
        <BsSearch className={`${iconStyle}`} />
      </div>
    </div>
  );
};

export default SearchBar;
