import React, { useContext } from "react";
import Cover from "../common/Cover";
import { LangContext } from "../../App";

const ResortsCover = () => {
  const { language } = useContext(LangContext);
  return (
    <Cover
      bgImage="bg-[url(./assets/PageCover/resortcover.jpg)]"
      header={language?.page_cover?.resorts_cover?.head}
      selectedPage={language?.page_cover?.resorts_cover?.category}
      title={language?.page_cover?.resorts_cover?.title}
      context={language?.page_cover?.resorts_cover?.content}
    />
  );
};

export default ResortsCover;
