import { useTheme, Text } from "@chakra-ui/react";
import { CustomTheme } from "src/theme";

interface FooterHeadingProps {
  children: string;
}

const FooterHeading = (props: FooterHeadingProps) => {
  const theme = useTheme<CustomTheme>();

  return (
    <Text fontWeight="500" color={theme.colors.secondary} fontSize={14}>
      {props.children}
    </Text>
  );
};

export default FooterHeading;
