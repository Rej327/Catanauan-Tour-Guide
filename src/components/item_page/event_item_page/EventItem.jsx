import React from "react";
import EventHeader from "../../common/EventHeaader";
import { banks } from "../../../assets";
import EventItemContent from "./EventItemContent";
import EventCarousel from "./EventCarousel";

const EventItem = ({ className }) => {
  return (
    <div className={`w-full ${className}`}>
      <div className="max-w-[1300px] mx-auto pb-10">
        <EventHeader
          selectedPage="Island Hopping Catanauan + Maniwaya Island"
          imgCover={banks}
          category="Your next adventure starts here!"
        />
      </div>
      <EventItemContent />
      <EventCarousel />
    </div>
  );
};

export default EventItem;
