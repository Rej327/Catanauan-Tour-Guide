import React from "react";
import Button from "../common/Button";

const SetupInto = ({ className }) => {
  return (
    <div className={`w-full ${className}`}>
      <div className="bg-[url(./assets/StepInto/stepinto.jpg)] bg-fixed bg-repeat-round h-[450px]">
        <div className="bg-black bg-opacity-50 w-full h-[450px] flex items-center flex-col justify-center">
          <div className="w-fit ml-[50%] text-right max-w-[500px]">
            <p className="text-white text-4xl tracking-widest font-bold">
              STEP INTO SUMMER
            </p>
            <p className="text-white text-lg my-5">
              With sunnier days and longer evenings. It's time to embrace the
              great outdoors. Start your summer off right with our guide to
              whats on around Catanauan.
            </p>
            <Button
              label="What's On"
              className="text-[#F1BE66] font-bold hover:text-black pt-4 pb-2 px-4 tracking-wider"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SetupInto;
