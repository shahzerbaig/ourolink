import { Text } from "@chakra-ui/react";

interface Props {
  children: string;
}

const AppPageSubheading = (props: Props) => {
  return (
    <Text letterSpacing={1} fontSize={14}>
      {props.children}
    </Text>
  );
};

export default AppPageSubheading;
