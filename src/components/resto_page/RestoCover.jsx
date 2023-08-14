import React, { useContext } from "react";
import Cover from "../common/Cover";
import { LangContext } from "../../App";

const RestoCover = () => {
  const { language } = useContext(LangContext);
  return (
    <div>
      <Cover
        bgImage="bg-[url(./assets/PageCover/restocover.jpg)]"
        header={language?.page_cover?.restaurant_cover?.head}
        selectedPage={language?.page_cover?.restaurant_cover?.category}
        title={language?.page_cover?.restaurant_cover?.title}
        context={language?.page_cover?.restaurant_cover?.content}
      />
    </div>
  );
};

export default RestoCover;
