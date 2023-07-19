import React, { useEffect } from "react";
import NavigatonInOtherPage from "../components/common/NavigatonInOtherPage";
import Footer from "../components/common/Footer";
import EventItem from "../components/item_page/event_item_page/EventItem";
const EventItemPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <NavigatonInOtherPage />
      <div className="pb-2">
        <EventItem />
      </div>
      <Footer />
    </div>
  );
};

export default EventItemPage;
