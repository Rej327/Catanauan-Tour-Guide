import React from "react";
import Cover from "../common/Cover";

const HotelCover = () => {
  return (
    <div>
      <Cover
        bgImage="bg-[url(./assets/PageCover/hotelcover.jpg)]"
        header="Where to stay?"
        selectedPage="Hotels"
        title="Discover accommodation in Catanauan"
        context="Explore a variety of outstanding accommodations in the charming town of Catanauan. From cozy bed and breakfasts to luxurious resorts, there's a perfect place to stay for every traveler's taste and preference."
      />
    </div>
  );
};

export default HotelCover;
