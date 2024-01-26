import { Box, useTheme } from "@chakra-ui/react";
import { CustomTheme } from "../../../theme";

interface Props {
  children: string | JSX.Element;
  onClick: () => void | null;
  type?: "button" | "submit" | "reset";
  height?: string;
  width?: string;
  isDisabled?: boolean;
}

const AppMaterialButton = (props: Props) => {
  const theme = useTheme<CustomTheme>();

  return (
    <Box
      disabled={props.isDisabled}
      type={props.type}
      onClick={() => props.onClick()}
      width={props.width === undefined ? "fit-content" : props.width}
      height={props.height}
      paddingX="25px"
      paddingY="10px"
      backgroundColor={theme.colors.accent}
      textColor={theme.colors.primary}
      borderRadius="6px"
      boxSizing="border-box"
      fontWeight={600}
      fontSize="13px"
      as="button"
      cursor={props.isDisabled ? "not-allowed" : "pointer"}
    >
      {props.children}
    </Box>
  );
};

export default AppMaterialButton;
