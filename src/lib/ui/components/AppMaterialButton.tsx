import { Box, useTheme } from "@chakra-ui/react";
import { CustomTheme } from "../../../theme";

interface Props {
  children: string;
  onClick: () => void;
}

const AppMaterialButton = (props: Props) => {
  const theme = useTheme<CustomTheme>();

  return (
    <Box
      onClick={() => props.onClick()}
      width="fit-content"
      paddingX="25px"
      paddingY="10px"
      backgroundColor={theme.colors.buttonColor}
      textColor={theme.colors.buttonTextColor}
      borderRadius="6px"
      boxSizing="border-box"
      fontWeight={600}
      fontSize="13px"
      as="button"
      cursor="pointer"
    >
      {props.children}
    </Box>
  );
};

export default AppMaterialButton;
