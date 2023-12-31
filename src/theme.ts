import { extendTheme, ThemeConfig } from "@chakra-ui/react";
import "@fontsource/poppins";

export interface CustomTheme {
  config?: ThemeConfig;
  colors: {
    tableDivider: string;
    appDivider: string;
    buttonColor: string;
    buttonTextColor: string;
    footer: string;
    footerText: string;
    footerHeading: string;

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
  initialColorMode: "system",
};

const theme = extendTheme({
  config,
  colors: {
    tableDivider: "gray.300",
    appDivider: "#c1c1c1",
    buttonColor: "#022B57",
    buttonTextColor: "white",
    footer: "#F8F8F8",
    footerText: "#4F4F4F",
    footerHeading: "#000000", // BLACK
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
