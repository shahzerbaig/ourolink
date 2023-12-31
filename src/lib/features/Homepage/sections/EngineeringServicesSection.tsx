import AppSectionHeading from "../../../ui/components/AppSectionHeading";
import AsymmetricTable from "../components/AsymmetricTable";
import { Box } from "@chakra-ui/react";

const EngineeringServicesSection = () => {
  return (
    <>
      <AppSectionHeading>Things we can engineer for you</AppSectionHeading>
      <Box height="100px" />
      <AsymmetricTable />
    </>
  );
};

export default EngineeringServicesSection;
