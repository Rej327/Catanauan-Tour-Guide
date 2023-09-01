import React, { useContext } from "react";
import { LangContext } from "../../App";
import { Skeleton, SkeletonText } from "@chakra-ui/react";

const SkeletonLoader = () => {
  const { language, startingPoint } = useContext(LangContext);
  return (
    <div className="max-w-[1300px] mx-auto">
      <div className="flex flex-wrap py-10 border-b-[1px] justify-center gap-5">
        <div className="max-w-[400px] overflow-hidden">
          <Skeleton className="w-[390px] h-[290px]" />
        </div>
        <div className="w-[800px] px-4 h-fit my-auto items-center flex flex-col gap-5">
          <div className="w-full flex flex-col mr-auto gap-4">
            <SkeletonText
              className="w-[10rem]"
              mt="2"
              noOfLines={1}
              spacing="2"
            />
            <SkeletonText
              className="w-full md:w-[360px] lg:w-[400px]"
              mt="2"
              noOfLines={1}
              spacing="2"
            />
            <SkeletonText
              className="w-full md:w-[400px] lg:w-[800px]"
              mt="2"
              noOfLines={1}
              spacing="2"
            />
          </div>
          <div className="w-full flex flex-wrap justify-between gap-10">
            <div className="flex flex-col gap-2">
              <div className="w-full flex gap-1 items-center justify-center">
                <SkeletonText
                  className="w-[300px]"
                  mt="2"
                  noOfLines={1}
                  spacing="4"
                />
              </div>
              <div className="w-fit flex gap-1 items-center justify-center">
                <SkeletonText
                  className="w-[10rem]"
                  mt="2"
                  noOfLines={1}
                  spacing="4"
                />
              </div>
            </div>
            <div className="w-fit flex gap-4">
              <Skeleton className="w-[100px] h-[50px] rounded-xl" />
              <Skeleton className="w-[100px] h-[50px] rounded-xl" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkeletonLoader;
