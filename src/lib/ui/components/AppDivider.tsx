import { useTheme } from "@chakra-ui/react";
import { CustomTheme } from "../../../theme";

const AppDivider = () => {
  const theme = useTheme<CustomTheme>();

  const dividerStyle = {
    height: "1px",
    width: "100%",
    backgroundColor: theme.colors.appDivider,
  };

  return <div style={dividerStyle}></div>;
};

export default AppDivider;
