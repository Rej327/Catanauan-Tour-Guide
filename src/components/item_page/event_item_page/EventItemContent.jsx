import React from "react";
import { banks } from "../../../assets";

const EventItemContent = () => {
  return (
    <div className="w-full py-10 px-2 bg-[#FEFEFF] rounded-t-2xl">
      <div className="max-w-[1000px] mx-auto flex flex-col gap-4">
        <p className="text-2xl md:text-4xl font-bold">
          There are a number of different activities that you can do while
          island hopping, including swimming, sunbathing, snorkeling, diving,
          and hiking.
        </p>
        <p className="text-lg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <div className="mx-auto max-w-[500px]">
          <img
            src={banks}
            alt="Event Image"
            className="w-full object-cover borderShadow"
          />
        </div>
      </div>
      <div className="max-w-[1000px] mx-auto border-t-[1px] border-[#F9DBA9] mt-20">
        <div className="max-w-[1000px] my-10 mx-auto flex flex-col gap-4">
          <p className="text-2xl font-bold">The Lorem ipsum</p>
          <p className="text-lg">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla
            inventore laboriosam minus, sed debitis iste enim consequatur atque
            eos aspernatur ut dolore repellat, earum illum eaque ex commodi,
            assumenda accusamus.
          </p>
          <div className="text-lg ml-5">
            <p className="list-item">Lorem ipsum dolor sit amet.</p>
            <p className="list-item">Lorem ipsum dolor sit amet.</p>
            <p className="list-item">Lorem ipsum dolor sit amet.</p>
            <p className="list-item">Lorem ipsum dolor sit amet.</p>
            <p className="list-item">Lorem ipsum dolor sit amet.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventItemContent;
