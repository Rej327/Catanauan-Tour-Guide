import { Button, Collapse } from "@chakra-ui/react";
import React, { useContext, useState } from "react";
import Carousel from "../../common/Carousel";
import { LangContext } from "../../../App";
import { Link } from "react-router-dom";

const BankItemContent_1 = ({ dataInfo }) => {
  const [show, setShow] = useState(false);

  const handleToggle = () => setShow(!show);

  const { language } = useContext(LangContext);

  return (
    <div className="max-w-[800px] flex flex-col gap-4 text-lg">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </p>

      <Collapse className="font-body bodyColor " startingHeight={50} in={show}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta unde
        necessitatibus similique ullam debitis modi ad rem asperiores,
        voluptatibus dolorum, neque ipsam suscipit error inventore reprehenderit
        perferendis ut exercitationem officiis magni? Dolorum porro fuga omnis,
        facilis quia vitae alias fugit accusantium saepe dicta provident
        veritatis qui! Commodi itaque velit voluptates.
      </Collapse>

      <p
        className="cursor-pointer w-fit text-base"
        onClick={handleToggle}
        mt="1rem"
      >
        {show ? "- Read Less" : "+ Read More"}
      </p>
      <div className="mb-5 flex gap-4">
        {dataInfo.website && (
          <Link to={dataInfo.website} target="_blank">
            <button className="bg-[#F9DBA9] rounded-full px-4 py-2 hover:bg-[#f1be66] duration-300 delay-75">
              <p className="text-base">Visit Website &#8594;</p>
            </button>
          </Link>
        )}
        <Link to={dataInfo.bookNow} target="_blank">
          <button className="bg-none border-[1px] border-[#F9DBA9] rounded-full px-4 py-2 hover:bg-[#f1be66] hover:border-[#F9DBA9] duration-300 delay-75">
            <p className="text-base">Book Now &#8594;</p>
          </button>
        </Link>
      </div>
      <div className="mt-2 py-5 border-t-[1px] border-gray-300">
        <p className="font-bold text-2xl my-2">You may also like : </p>
        <div className="mx-auto w-[320px] md:w-[400px] lg:w-[800px]">
          <Carousel>
            {language.restaurants_page.category_all.map((data) => (
              <div
                key={data.id}
                className="rounded-2xl relative restoItems w-fit h-fit"
              >
                <div className="absolute z-10 bottom-0 bg-black bg-opacity-50 flex px-2 flex-col justify-center items-center w-[250px] h-[75px]">
                  <p className="text-lg text-[#fefeff] text-center">
                    {data.title}
                  </p>
                  <Link to={`/restaurants/${data.id}`}>
                    <p className="text-[#f9dba9] text-base hover:underline underline-offset-8 hover:cursor-pointer">
                      {data.btn_txt}
                    </p>
                  </Link>
                </div>
                <div className="w-[250px] h-[250px] overflow-hidden">
                  <img
                    src={data.img}
                    alt={`${data.title} Image`}
                    className="w-full h-full object-cover itemImg"
                  />
                </div>
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default BankItemContent_1;
