import { Box, Flex } from "@chakra-ui/react";
import React from "react";

const CssExample = () => {
  return (
    <Box>
      <Box bg="red" height="300px"></Box>
      <Box bg="yellow" height="300px"></Box>
      <Box
        top={10}
        position="absolute"
        bg="green"
        height="300px"
        width="100%"
      ></Box>
    </Box>
  );
};

export default CssExample;
