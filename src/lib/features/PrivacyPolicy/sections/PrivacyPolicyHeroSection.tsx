import { Box, Flex, Text, useTheme } from "@chakra-ui/react";
import AppPageHeading from "src/lib/ui/components/AppPageHeading";
import AppPageSubheading from "src/lib/ui/components/AppPageSubheading";
import { CustomTheme } from "src/theme";
import PoliciesSection from "./PoliciesSection";
import SectionHeadingSpacing from "src/lib/ui/components/SectionHeadingSpacing";

const PrivacyPolicyHeroSection = () => {
  const theme = useTheme<CustomTheme>();

  return (
    <Flex flexDirection="column">
      {/* Effective Date */}
      <Text textColor={theme.colors.workTech} fontSize={12} fontWeight="600">
        Effective date: 23 July, 2023
      </Text>

      <Box height="15px" />

      {/* The heading of the Hero */}
      <AppPageHeading>Privacy policy</AppPageHeading>

      <Box height="30px" />

      {/* Last Updated Date */}
      <Text fontSize={12}>Last updated: 1 December, 2023</Text>

      <Box height="50px" />

      {/* The Sub heading of the Hero */}
      <AppPageSubheading>
        Ourolink (“Company”, “we”, “us”, or “our”) specializes in providing
        Software as a Service (SaaS) solutions for businesses. This Privacy
        Policy is applicable to all personal data handled by Ourolink,
        encompassing data accumulated through our website, our services, and
        during regular business dealings. Our primary aim in collecting
        information is to enhance, deliver, and safeguard the services we offer:
      </AppPageSubheading>

      <SectionHeadingSpacing />

      {/* The following are the main sections of this Privacy Policy: */}
      <PoliciesSection />
    </Flex>
  );
};

export default PrivacyPolicyHeroSection;
