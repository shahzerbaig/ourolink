import { Box, Flex } from "@chakra-ui/react";
import AppPageHeading from "src/lib/ui/components/AppPageHeading";
import AppPageSubheading from "src/lib/ui/components/AppPageSubheading";

const WorkHeroSection = () => {
  return (
    <Flex flexDirection="column">
      <AppPageHeading>Our Work</AppPageHeading>
      <Box height="30px" />
      <AppPageSubheading>
        We build beautiful apps with a focus on stunning UI, satisfying UX, and
        client delight
      </AppPageSubheading>
    </Flex>
  );
};

export default WorkHeroSection;
