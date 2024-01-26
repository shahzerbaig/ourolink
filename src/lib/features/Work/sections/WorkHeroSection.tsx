import { Box, Flex } from "@chakra-ui/react";
import AnimateOnLoad from "@components/AnimateOnLoad";
import { useWorkViewModel } from "src/lib/providers/WorkViewModelProvider";
import AppPageHeading from "src/lib/ui/components/AppPageHeading";
import AppPageSubheading from "src/lib/ui/components/AppPageSubheading";

const WorkHeroSection = () => {
  const contactUsVM = useWorkViewModel();
  const animationOnLoadProps = contactUsVM.animationOnLoadProps;

  return (
    <Flex flexDirection="column">
      <AnimateOnLoad delay={animationOnLoadProps.delay()} translateY={50}>
        <AppPageHeading>Our Work</AppPageHeading>
      </AnimateOnLoad>
      <Box height="30px" />

      <AnimateOnLoad delay={animationOnLoadProps.delay()} translateY={50}>
        <AppPageSubheading>
          We build beautiful apps with a focus on stunning UI, satisfying UX,
          and client delight
        </AppPageSubheading>
      </AnimateOnLoad>
    </Flex>
  );
};

export default WorkHeroSection;
