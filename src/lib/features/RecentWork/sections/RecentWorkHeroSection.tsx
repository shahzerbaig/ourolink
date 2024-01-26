import { Box, Flex } from "@chakra-ui/react";
import AnimateOnLoad from "@components/AnimateOnLoad";
import AppPageHeading from "@components/AppPageHeading";
import AppPageSubheading from "@components/AppPageSubheading";
import { WorkStackProps } from "@datautils/work_stack";
import { useRecentWorkViewModel } from "src/lib/providers/RecentWorkViewModelProvider";

interface RecentWorkHeroSectionProps {
  projectDetails: WorkStackProps | undefined;
}

const RecentWorkHeroSection = (props: RecentWorkHeroSectionProps) => {
  const contactUsVM = useRecentWorkViewModel();
  const animationOnLoadProps = contactUsVM.animationOnLoadProps;

  return (
    <Flex flexDirection="column">
      <AnimateOnLoad delay={animationOnLoadProps.delay()} translateY={50}>
        <AppPageHeading>
          {props.projectDetails?.projectName ?? ""}
        </AppPageHeading>
      </AnimateOnLoad>
    </Flex>
  );
};

export default RecentWorkHeroSection;
