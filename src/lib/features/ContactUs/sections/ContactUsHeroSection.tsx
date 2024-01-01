import { Box, Flex, Text, useTheme } from "@chakra-ui/react";
import AppPageHeading from "src/lib/ui/components/AppPageHeading";
import AppPageSubheading from "src/lib/ui/components/AppPageSubheading";
import { CustomTheme } from "src/theme";

const ContactUsHeroSection = () => {
  const theme = useTheme<CustomTheme>();

  return (
    <Flex flexDirection="column">
      <Text textColor={theme.colors.workTech} fontSize={12} fontWeight="600">
        Contact Us
      </Text>

      <Box height="15px" />

      <AppPageHeading>
        Let's work together and create something great
      </AppPageHeading>

      <Box height="30px" />

      <AppPageSubheading>
        Take the first step by filling out our project formbelow, and someone
        from our team will reach backto you within 2 business days.
      </AppPageSubheading>
    </Flex>
  );
};

export default ContactUsHeroSection;
