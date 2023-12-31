import { Box } from "@chakra-ui/react";
import BasePage from "../../base/BasePage";
import HomepageViewModel from "./HomepageViewModel";
import "@fontsource/comfortaa/700.css";
import HeroSection from "./sections/HeroSection";
import EngineeringServicesSection from "./sections/EngineeringServicesSection";
import OurWorkSection from "./sections/OurWorkSection";

const Homepage = () => {
  const viewModel = new HomepageViewModel();

  return (
    <BasePage>
      {/* HERO SECTION */}
      <HeroSection viewModel={viewModel} />

      <Box
        height={{
          base: "100px",
          md: "200px",
        }}
      />

      {/* ENGINEERING SERVICES SECTION */}
      <EngineeringServicesSection />

      <Box
        height={{
          base: "100px",
          md: "200px",
        }}
      />

      {/* OUR WORK SECTION */}
      <OurWorkSection />
    </BasePage>
  );
};

export default Homepage;
