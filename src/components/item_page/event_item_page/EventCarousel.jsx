import React, { useContext, useState } from "react";
import { LangContext } from "../../../App";
import { Collapse } from "@chakra-ui/react";

const EventCarousel = () => {
  const { language } = useContext(LangContext);
  const [show, setShow] = useState(false);
  const handleToggle = () => setShow(!show);

  return (
    <div className="bg-[#FEFEFF]">
      <div className="rounded-t-2xl bg-[#FFFAF2] pt-5 pb-10">
        <div className="max-w-[1200px] mx-auto">
          <p className="text-xl font-bold px-2 py-5">You may also like : </p>
          <Collapse
            className="font-body bodyColor "
            startingHeight={350}
            in={show}
          >
            <div className="flex flex-wrap justify-center max-w-[1200px] mx-auto ">
              {language?.main?.resorts.map((data) => (
                <div key={data.id} className="p-5 w-[300px]">
                  <img src={data.img} alt="resorts" className="w-auto" />
                  <div className="w-full bg-white">
                    <p>{data.title}</p>
                    <p>{data.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </Collapse>
          <div
            onClick={handleToggle}
            className="w-fit mx-auto bg-[#FCE9CB] cursor-pointer rounded-full p-4 hover:bg-[#F9DBA9] duration-300 delay-75"
          >
            <p className=" text-base">{show ? "- Show Less" : "+ Show More"}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventCarousel;
