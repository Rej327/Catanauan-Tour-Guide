import React from "react";
import OtherContent from "./OtherContent";

const FiestaContent = () => {
  return (
    <div className="w-full flex flex-wrap md:flex-nowrap gap-2 justify-center lg:justify-between ">
      <div className="max-w-[850px] flex flex-col gap-4 my-5">
        <p className="font-bold text-2xl">Town Fiesta</p>
        <p className="text-lg">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero, sit.
          Voluptatem hic cupiditate voluptatum ipsum, reiciendis, nisi ullam vel
          quia obcaecati ab necessitatibus. Architecto quis tempore esse dolorum
          atque! Aut ratione ducimus quae, perspiciatis mollitia labore est
          dignissimos dolor nemo, in dolorum odit ipsa eligendi facere iure.
          Voluptatem, debitis dolorum.
        </p>
        <img
          src=""
          alt="Catanauan Image"
          className="w-full h-[18rem] object-cover"
        />
      </div>
      <div className="w-[400px]">
        <OtherContent />
      </div>
    </div>
  );
};

export default FiestaContent;
