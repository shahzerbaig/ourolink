import { Text } from "@chakra-ui/react";
import "@fontsource/poppins/500.css";

interface Props {
  children: string;
}

const AppSectionHeading = (props: Props) => {
  return (
    <Text
      lineHeight="1.3"
      maxWidth={{
        base: "75%",
      }}
      fontWeight="600"
      fontSize={22}
    >
      {props.children}
    </Text>
  );
};

export default AppSectionHeading;
