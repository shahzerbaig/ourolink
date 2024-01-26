import BasePage from "../../base/BasePage";
import "@fontsource/comfortaa/700.css";
import HeroSection from "./sections/HeroSection";
import EngineeringServicesSection from "./sections/EngineeringServicesSection";
import OurWorkSection from "./sections/OurWorkSection";
import IndustryExperienceSection from "./sections/IndustryExperienceSection";
import { SectionSpacing } from "src/lib/ui/components/SectionSpacing";
import TechnologyExpertiseSection from "./sections/TechnologyExpertiseSection";
import LetsGetInTouch from "src/lib/ui/components/LetsGetInTouch";
import { useHomepageViewModel } from "src/lib/providers/HomepageViewModelProvider";
import { useEffect } from "react";

const Homepage = () => {
  const viewmodel = useHomepageViewModel();

  useEffect(() => {
    return () => {
      viewmodel.dispose();
    };
  }, []);

  return (
    <BasePage>
      {/* HERO SECTION */}
      <HeroSection />
      <SectionSpacing />

      {/* ENGINEERING SERVICES SECTION */}
      <EngineeringServicesSection />
      <SectionSpacing />

      {/* OUR WORK SECTION */}
      <OurWorkSection />
      <SectionSpacing />

      {/* INDUSTRY EXPERIENCE SECTION */}
      <IndustryExperienceSection />
      <SectionSpacing />

      {/* TECHNOLOGY EXPERTISE SECTION */}
      <TechnologyExpertiseSection />
      <SectionSpacing />

      <LetsGetInTouch />
    </BasePage>
  );
};

export default Homepage;
