import { useTheme, Text } from "@chakra-ui/react";
import { CustomTheme } from "src/theme";

export interface FooterTextButtonProps {
  children?: string;
  onClick: () => void;
  label?: string;
  fontSize?: number | string;
}

const FooterTextButton = ({
  children,
  onClick,
  label,
  fontSize = 12,
}: FooterTextButtonProps) => {
  const theme = useTheme<CustomTheme>();

  return (
    <Text
      cursor="pointer"
      onClick={() => {
        onClick();
      }}
      // fontWeight="500"
      // color={theme.colors.footerText}
      color={theme.colors.accent}
      letterSpacing={1}
      fontSize={fontSize}
    >
      {children}
    </Text>
  );
};

export default FooterTextButton;
