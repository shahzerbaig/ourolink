import BasePage from "src/lib/base/BasePage";
import ContactUsHeroSection from "./sections/ContactUsHeroSection";
import ContactUsInputDetailsSection from "./sections/ContactUsInputDetailsSection";
import { Box } from "@chakra-ui/react";
import { useEffect } from "react";
import { useContactUsViewModel } from "src/lib/providers/ContactUsViewModelProvider";

export const ContactUs = () => {
  const viewmodel = useContactUsViewModel();

  useEffect(() => {
    return () => {
      viewmodel.dispose();
    };
  }, []);

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
