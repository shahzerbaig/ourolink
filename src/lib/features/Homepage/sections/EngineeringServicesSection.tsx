import SectionHeadingSpacing from "src/lib/ui/components/SectionHeadingSpacing";
import AppSectionHeading from "../../../ui/components/AppSectionHeading";
import AsymmetricTable from "../components/AsymmetricTable";
import { useRef } from "react";
import { useHomepageViewModel } from "src/lib/providers/HomepageViewModelProvider";
import { Box } from "@chakra-ui/react";

const EngineeringServicesSection = () => {
  // Hooks
  const engineeringServicesRef = useRef(null);
  const hompageVm = useHomepageViewModel();

  // Set the ref object, so that we can access it in the navbar
  hompageVm.setEngineeringServicesRefObj(engineeringServicesRef);

  return (
    <Box ref={engineeringServicesRef}>
      <AppSectionHeading>Things we can engineer for you</AppSectionHeading>
      <SectionHeadingSpacing />
      <AsymmetricTable />
    </Box>
  );
};

export default EngineeringServicesSection;
