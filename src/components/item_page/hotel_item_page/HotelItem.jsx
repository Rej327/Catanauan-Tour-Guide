import React from "react";
import ItemHeader from "../../common/ItemHeader";
import { banks } from "../../../assets";
import HotelItemContent_1 from "./HotelItemContent_1";
import HotelItemContent_2 from "./HotelItemContent_2";
import Map from "../../common/Map";
import { Link } from "react-router-dom";

const HotelItem = ({ className }) => {
  return (
    <div className={`max-w-[1300px] mx-auto ${className}`}>
      <div>
        <ItemHeader
          selectedPage="Centropen Hotel"
          category="Hotel"
          linkPage="/hotels"
        />
      </div>
      <div>
        <img
          src={banks}
          alt="Bank Image"
          className="w-full h-[60vh] object-cover"
        />
      </div>
      <div className="flex flex-wrap justify-between">
        <div className="my-10 px-4">
          <HotelItemContent_1 />
        </div>
        <div className="mx-auto">
          <HotelItemContent_2 />
          <Map />
          <div className="my-5 w-fit mx-auto mb-10">
            <Link to="https://goo.gl/maps/UJfmMe1CEADWHCRCA" target="_blank">
              <button className="bg-none border-[1px] border-[#f1be66] rounded-full px-4 py-2 hover:bg-[#f1be66] duration-300 delay-75">
                <p className="text-base">Get Direction &#8594;</p>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotelItem;
