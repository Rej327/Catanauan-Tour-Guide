import {
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverTrigger,
} from "@chakra-ui/react";
import React from "react";

const PopOver = ({ content }) => {
  return (
    <div>
      <Popover>
        <PopoverTrigger>
          <p className="text-base cursor-pointer hover:translate-x-1 delay-75 duration-300">
            {" "}
            ...more)
          </p>
        </PopoverTrigger>
        <PopoverContent>
          <PopoverArrow />
          <PopoverCloseButton />
          <PopoverBody>
            <p>{content}</p>
          </PopoverBody>
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default PopOver;
