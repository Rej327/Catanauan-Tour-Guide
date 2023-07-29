import React from "react";
import { rc1 } from "../../assets";
import { ImLocation } from "react-icons/im";
import { SiAlwaysdata } from "react-icons/si";
import { PiHandCoinsDuotone } from "react-icons/pi";

const TranspoBody = () => {
  return (
    <div className="max-w-[1300px] pb-10 mx-auto justify-center items-center flex flex-wrap gap-10 px-2">
      <div className="max-w-[290px] resortItems flex flex-col gap-2 bg-white rounded-xl">
        <div className="rounded-xl w-full  overflow-hidden">
          <img
            src={rc1}
            className="w-full itemImg h-[250px] object-cover rounded-xl"
          />
        </div>
        <div className="w-full mt-2 mb-4 px-2 flex flex-col gap-2">
          <p className="text-lg font-extrabold tracking-widest">MATODA</p>
          <div className="w-fit flex gap-1 items-center">
            <ImLocation className="text-[#f1be66]" />
            <p className="text-sm hover:text-[#be8624] duration-200 cursor-pointer">
              Brgy Poblacion 09
            </p>
          </div>
          <div className="w-fit flex gap-1 items-center">
            <SiAlwaysdata className="text-[#f1be66]" />
            <p className="text-sm hover:text-[#be8624] duration-200 cursor-pointer">
              Brgy Poblacion 1-10
            </p>
          </div>
          <div className="w-fit flex gap-1 items-center">
            <PiHandCoinsDuotone className="text-[#f1be66]" />
            <p className="text-sm hover:text-[#be8624] duration-200 cursor-pointer">
              15-20 Pesos
            </p>
          </div>
          <div className="w-fit">
            <p className="w-auto text-[#f1be66] hover:translate-x-5 duration-300">
              Get Direction &#8594;
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TranspoBody;
