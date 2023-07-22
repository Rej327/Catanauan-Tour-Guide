import React from "react";
import { hc2 } from "../../assets";
import { Link } from "react-router-dom";

const AccSection_2 = ({ className }) => {
  return (
    <div className={`w-full bg-[#FEFEFF] ${className}`}>
      <div className="max-w-[1300px] flex flex-col mx-auto">
        <div className="flex flex-col gap-4 my-5 px-4">
          <p className="text-2xl font-bold">
            Explore Towns and Experience Local Culture
          </p>
          <p className="text-lg">
            Staying at a town hotel offers the opportunity to immerse yourself
            in the local culture and explore the unique attractions of the town.
            Discover historic landmarks, vibrant markets, charming streets, and
            local festivals that showcase the essence of the destination.
          </p>
          <p className="text-lg">
            Additionally, town hotels are conveniently located near popular
            shopping districts, entertainment venues, and public transportation
            hubs, making it easy to navigate and explore the town's offerings.
          </p>
          <p className="text-lg">
            Plan your next trip and choose a town hotel that suits your
            preferences, allowing you to experience the best of local
            hospitality while enjoying modern comforts and conveniences.
          </p>
          <img
            src={hc2}
            alt="Accomodation Image"
            className="h-[70vh] object-cover"
          />

          <p className="text-[#d4a148] w-fit pl-2 text-lg hover:translate-x-2 hover:font-bold duration-300 ">
            <Link to="/hotels">Our Hotel →</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default AccSection_2;
