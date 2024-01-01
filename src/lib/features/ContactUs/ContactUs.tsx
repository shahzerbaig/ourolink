import BasePage from "src/lib/base/BasePage";
import ContactUsHeroSection from "./sections/ContactUsHeroSection";
import { SectionSpacing } from "src/lib/ui/components/SectionSpacing";
import ContactUsInputDetailsSection from "./sections/ContactUsInputDetailsSection";
import { Box } from "@chakra-ui/react";

export const ContactUs = () => {
  return (
    <BasePage>
      {/* Hero Section */}
      <ContactUsHeroSection />
      <Box height="100px" />
      {/* <SectionSpacing /> */}

      <ContactUsInputDetailsSection />
    </BasePage>
  );
};
