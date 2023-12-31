import { Text } from "@chakra-ui/react";
import "@fontsource/poppins/500.css";

interface Props {
  children: string;
}

const AppPageHeading = (props: Props) => {
  return (
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
  );
};

export default AppPageHeading;
