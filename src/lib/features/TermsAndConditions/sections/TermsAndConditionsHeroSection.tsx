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
        Effective date: 23 July, 2023
      </Text>

      <Box height="15px" />

      {/* The heading of the Hero */}
      <AppPageHeading>Terms and conditions</AppPageHeading>

      <Box height="30px" />

      {/* Last Updated Date */}
      <Text fontSize={12}>Last updated: 1 December, 2023</Text>

      <Box height="50px" />

      {/* The Sub heading of the Hero */}
      <AppPageSubheading>
        Welcome to Ourolink (“Company”, “we”, “us”, or “our”). We provide
        Software as a Service (SaaS) solutions to businesses, subject to the
        following Terms and Conditions. By accessing or using our service, you
        agree to be bound by these terms.
      </AppPageSubheading>

      <SectionHeadingSpacing />

      {/* The following are the main sections of this Privacy Policy: */}
      <ConditionsSection />
    </Flex>
  );
};

export default TermsAndConditionsHeroSection;
