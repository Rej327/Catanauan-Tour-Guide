import React, { useContext } from "react";
import Cover from "../common/Cover";
import { LangContext } from "../../App";

const TranspoCover = () => {
  const { language } = useContext(LangContext);
  return (
    <Cover
      bgImage="bg-[url(./assets/PageCover/transportation.jpg)]"
      header={language?.page_cover?.transportation_cover?.head}
      selectedPage={language?.page_cover?.transportation_cover?.category}
      title={language?.page_cover?.transportation_cover?.title}
      context={language?.page_cover?.transportation_cover?.content}
    />
  );
};

export default TranspoCover;
