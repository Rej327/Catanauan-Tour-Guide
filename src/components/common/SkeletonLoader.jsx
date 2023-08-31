import { Skeleton, Stack } from "@chakra-ui/react";
import React from "react";

const SkeletonLoader = () => {
  return (
    <Stack>
      <Skeleton height="90vh" />
    </Stack>
  );
};

export default SkeletonLoader;
