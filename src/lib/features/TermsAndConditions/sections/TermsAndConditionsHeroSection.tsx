import { Box, Flex, Text, useTheme } from "@chakra-ui/react";
import AppPageHeading from "src/lib/ui/components/AppPageHeading";
import AppPageSubheading from "src/lib/ui/components/AppPageSubheading";
import { CustomTheme } from "src/theme";
import ConditionsSection from "./ConditionsSection";
import SectionHeadingSpacing from "src/lib/ui/components/SectionHeadingSpacing";

const TermsAndConditionsHeroSection = () => {
  const theme = useTheme<CustomTheme>();

  return (
    <Flex flexDirection="column">
      {/* Effective Date */}
      <Text textColor={theme.colors.workTech} fontSize={12} fontWeight="600">
        Effective date: 23, July 2023
      </Text>

      <Box height="15px" />

      {/* The heading of the Hero */}
      <AppPageHeading>Terms and conditions</AppPageHeading>

      <Box height="30px" />

      {/* Last Updated Date */}
      <Text fontSize={12}>Last updated: 23, July 2023</Text>

      <Box height="50px" />

      {/* The Sub heading of the Hero */}
      <AppPageSubheading>
        This Privacy Policy describes how [Your Company/Your Name] ("we," "us,"
        or "our") collects, uses, and shares information about you and explains
        the choices you have concerning the information. By using our
        [website/application], you agree to the terms of this Privacy Policy.
      </AppPageSubheading>

      <SectionHeadingSpacing />

      {/* The following are the main sections of this Privacy Policy: */}
      <ConditionsSection />
    </Flex>
  );
};

export default TermsAndConditionsHeroSection;
