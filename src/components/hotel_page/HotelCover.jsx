import React, { useContext } from "react";
import Cover from "../common/Cover";
import { LangContext } from "../../App";

const HotelCover = () => {
  const { language } = useContext(LangContext);
  return (
    <div>
      <Cover
        bgImage="bg-[url(./assets/PageCover/hotelcover.jpg)]"
        header={language?.page_cover?.hotel_cover?.head}
        selectedPage={language?.page_cover?.hotel_cover?.category}
        title={language?.page_cover?.hotel_cover?.title}
        context={language?.page_cover?.hotel_cover?.content}
      />
    </div>
  );
};

export default HotelCover;
