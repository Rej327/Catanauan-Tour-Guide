import React, { useContext } from "react";
import Cover from "../common/Cover";
import { LangContext } from "../../App";

const FallsCover = () => {
  const { language } = useContext(LangContext);
  return (
    <div>
      <Cover
        bgImage="bg-[url(./assets/PageCover/falls.jpg)]"
        header={language?.page_cover?.falls_cover?.head}
        selectedPage={language?.page_cover?.falls_cover?.category}
        title={language?.page_cover?.falls_cover?.title}
        context={language?.page_cover?.falls_cover?.content}
      />
    </div>
  );
};

export default FallsCover;
