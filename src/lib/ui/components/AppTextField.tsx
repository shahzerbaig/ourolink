import { Box, Input, Text, useTheme } from "@chakra-ui/react";
import { CustomTheme } from "src/theme";
import { useForm, UseFormRegisterReturn, FieldError } from "react-hook-form";

interface Props {
  label: string;
  placeholder: string;
  register?: UseFormRegisterReturn<string>;
  error?: FieldError;
  type?: string;
}

const _ErrorText = ({
  error,
  errMsg,
}: {
  error: FieldError | undefined;
  errMsg: string | undefined;
}) => {
  if (error === undefined) {
    return null;
  }

  return (
    <Text
      fontWeight="400"
      marginTop="10px"
      marginLeft="7px"
      fontSize="12px"
      textColor="red"
    >
      {errMsg ?? ""}
    </Text>
  );
};

const AppTextField = (props: Props) => {
  const theme = useTheme<CustomTheme>();

  return (
    <Box>
      <Text fontWeight="bold">{props.label}</Text>

      <Box height="20px" />

      <Input
        {...props.register}
        type={props.type}
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

      <_ErrorText error={props.error} errMsg={props.error?.message} />
    </Box>
  );
};

export default AppTextField;
