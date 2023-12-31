import { useTheme, Text } from "@chakra-ui/react";
import { CustomTheme } from "src/theme";

interface Props {
  children: string;
  fontSize?: number | string;
}

const FooterText = ({ children, fontSize = 12 }: Props) => {
  const theme = useTheme<CustomTheme>();

  return (
    <Text letterSpacing={1} color={theme.colors.footerText} fontSize={fontSize}>
      {children}
    </Text>
  );
};

export default FooterText;
