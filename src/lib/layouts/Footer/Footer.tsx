import { Grid, GridItem, useTheme, Text, Box } from "@chakra-ui/react";
import { CustomTheme } from "../../../theme";

import LogoImage from "src/lib/features/Homepage/components/LogoImage";
import FooterSocialAccounts from "./components/FooterSocialAccounts";
import FooterLegals from "./components/FooterLegals";
import FooterServices from "./components/FooterServices";
import FooterAboutUs from "./components/FooterAboutUs";

export const Footer = () => {
  const theme = useTheme<CustomTheme>();

  const borderStyle = `1px solid ${theme.colors.appDivider}`;

  return (
    <Grid
      gridTemplateRows="auto auto auto auto"
      paddingX={{
        base: "20px",
        md: "60px",
      }}
      paddingTop={{
        base: "30px",
        md: "40px",
      }}
      paddingBottom={{
        base: "30px",
        lg: "0",
      }}
      backgroundColor={theme.colors.footer}
      borderTop={borderStyle}
      templateRows={{
        base: "repeat(1, 1fr)",
        sm: "repeat(5, 1fr)",
        lg: "repeat(3, 1fr)",
      }}
      templateColumns={{
        base: "repeat(2, 1fr)",
        sm: "repeat(2, 1fr)",
        lg: "repeat(3, 1fr)",
      }}
      rowGap="50px"
      columnGap={10}
    >
      <GridItem
        paddingBottom="20px"
        colSpan={{
          base: 1,
          sm: 1,
          lg: 2,
        }}
        bg=""
      >
        {/* Ourolink Logo Image */}
        <LogoImage
          height={{
            base: "30px",
            md: "30px",
          }}
        />
      </GridItem>

      <GridItem
        paddingBottom="20px"
        flexDir="column"
        alignItems="end"
        justifyContent="flex-end"
        display="flex"
        colSpan={{
          base: 1,
          sm: 1,
          lg: 2,
        }}
        bg=""
      >
        {/* TODO */}
        {/* Logo of Social Accounts like Facebook, Instagram, LinkedIn */}
        {/* <FooterSocialAccounts /> */}
      </GridItem>

      <GridItem
        colSpan={{
          base: 2,
          sm: 1,
          lg: 1,
        }}
        bg=""
      >
        {/* Footer Engineering Services */}
        <FooterServices />
      </GridItem>

      <GridItem
        colSpan={{
          base: 2,
          sm: 1,
          lg: 1,
        }}
        bg=""
      >
        {/* Footer Legals like Contact Us, Privacy Policy, T&C */}
        <FooterLegals />
      </GridItem>

      <GridItem
        colSpan={{
          base: 2,
          sm: 2,
          lg: 1,
        }}
        bg=""
      >
        {/* Footer About Us */}
        <FooterAboutUs />
      </GridItem>

      <GridItem
        colSpan={{
          base: 2,
          sm: 2,
          lg: 4,
        }}
        bg=""
      >
        {/* Footer Copywrite Text */}
        <Text color={theme.colors.footerText} fontSize={12}>
          © 2023 Ourolink
        </Text>
      </GridItem>
    </Grid>
  );
};
