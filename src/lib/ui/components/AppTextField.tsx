import { Box, Input, Text, useTheme } from "@chakra-ui/react";
import { CustomTheme } from "src/theme";

interface Props {
  label: string;
  placeholder: string;
}

const AppTextField = (props: Props) => {
  const theme = useTheme<CustomTheme>();

  return (
    <Box>
      <Text fontWeight="bold">{props.label}</Text>

      <Box height="20px" />

      <Input
        paddingLeft="7px"
        paddingY="10px"
        // paddingBottom="10px"
        fontSize={14}
        _placeholder={{
          fontWeight: 400,
          fontSize: 14,
          color: theme.colors.workTech,
        }}
        focusBorderColor="black"
        borderColor={theme.colors.inputBorderColor}
        variant="flushed"
        placeholder={props.placeholder}
      />
    </Box>
  );
};

export default AppTextField;
