import { extendTheme, ThemeConfig } from "@chakra-ui/react";
import "@fontsource/poppins";
import { AppColor } from "./domain/constants/AppColor";

export interface CustomTheme {
  config?: ThemeConfig;
  colors: {
    primary: string;
    secondary: string;
    accent: string;
    tableDivider: string;
    appDivider: string;
    footer: string;
    footerText: string;
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
    primary: AppColor.WHITE,
    secondary: AppColor.BLACK,
    accent: AppColor.DARK_BLUE,
    tableDivider: AppColor.GRAY_300,
    footer: AppColor.OFFWHITE,
    appDivider: "#c1c1c1",
    footerText: "#4F4F4F",
    workTech: "#7F7F7F",
    inputBorderColor: "#ABABAB",
  },
  styles: {
    global: {
      "html, body": {
        bg: AppColor.WHITE,
        color: AppColor.BLACK,
      },
    },
  },
  fonts: {
    heading: `'Poppins', sans-serif`,
    body: `'Poppins', sans-serif`,
  },
} as CustomTheme);

export default theme;
