import { extendTheme, ThemeConfig } from "@chakra-ui/react";
import "@fontsource/poppins";

export interface CustomTheme {
  config?: ThemeConfig;
  colors: {
    primary: string;
    secondary: string;
    tableDivider: string;
    appDivider: string;
    buttonColor: string;
    buttonTextColor: string;
    footer: string;
    footerText: string;
    footerHeading: string;
    workTech: string;
    inputBorderColor?: string;

    // Add other color properties as needed
  };
  styles: {
    global: {
      "html, body": {
        bg: string;
        color: string;
      };
    };
  };
  fonts: {
    heading: string;
    body: string;
  };
}

const config: ThemeConfig = {
  initialColorMode: "light",
  useSystemColorMode: false,
};

const theme = extendTheme({
  config,
  colors: {
    primary: "#000000", // BLACK
    secondary: "#022B57", // BLUE
    tableDivider: "gray.300",
    appDivider: "#c1c1c1",
    buttonColor: "#022B57",
    buttonTextColor: "white",
    footer: "#F8F8F8",
    footerText: "#4F4F4F",
    footerHeading: "#000000", // BLACK
    workTech: "#7F7F7F",
    inputBorderColor: "#ABABAB",
  },
  styles: {
    global: {
      "html, body": {
        bg: "white",
        color: "black",
      },
    },
  },
  fonts: {
    heading: `'Poppins', sans-serif`,
    body: `'Poppins', sans-serif`,
  },
} as CustomTheme);

export default theme;
