import React from "react";
import ItemHeader from "../../common/ItemHeader";
import ResortItemContent_1 from "./ResortItemContent_1";
import ResortItemContent_2 from "./ResortItemContent_2";
import Map from "../../common/Map";
import { Link } from "react-router-dom";

const ResortItem = ({ className }) => {
  return (
    <div className={`max-w-[1300px] mx-auto ${className}`}>
      <div>
        <ItemHeader
          selectedPage="Catanauan Cove Whitesand Beach Resort"
          category="Resorts"
          linkPage="/resorts"
        />
      </div>
      <div className="flex flex-wrap justify-between">
        <div className=" px-2">
          <ResortItemContent_1 />
        </div>
        <div className="mx-auto">
          <ResortItemContent_2 />
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

export default ResortItem;
