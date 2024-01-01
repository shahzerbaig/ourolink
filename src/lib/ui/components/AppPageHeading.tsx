import { Box, Text } from "@chakra-ui/react";
import "@fontsource/poppins/500.css";

interface Props {
  children: string;
}

const AppPageHeading = (props: Props) => {
  return (
    <Box position="relative">
      <Text
        lineHeight="1.3"
        maxWidth={{
          base: "75%",
        }}
        fontWeight="500"
        fontSize={{
          base: 32,
          md: 38,
        }}
      >
        {props.children}
      </Text>

      <Box
        top={0}
        left={3}
        position="absolute"
        bg="white"
        opacity={0.6}
        height="100%"
        width="10%"
      ></Box>
    </Box>
  );
};

export default AppPageHeading;
