import { Flex, useTheme, Text, Box, useMediaQuery } from "@chakra-ui/react";
import AnimateOnLoad from "@components/AnimateOnLoad";
import AppPageSubheading from "@components/AppPageSubheading";
import { WorkStackProps } from "@datautils/work_stack";
import { useRecentWorkViewModel } from "src/lib/providers/RecentWorkViewModelProvider";
import { CustomTheme } from "src/theme";
import { projectImagesList } from "../../Work/sections/ProjectsSection";
import { DeviceTypeEnum } from "src/domain/enums/device_type_enum";
import { SectionSpacing } from "@components/SectionSpacing";
import MobileProjectCarousel from "../../Work/components/MobileProjectCarousel";

interface RecentWorkProjectDetailsProps {
  projectDetails: WorkStackProps | undefined;
}

interface _TechItemProps {
  children: string;
}

const _TechItem = (props: _TechItemProps) => {
  const theme = useTheme<CustomTheme>();

  return (
    <Text
      height="35px"
      marginRight="40px"
      fontWeight="500"
      fontSize="13px"
      textColor={theme.colors.workTech}
    >
      {props.children}
    </Text>
  );
};

const RecentWorkProjectDetails = (props: RecentWorkProjectDetailsProps) => {
  const contactUsVM = useRecentWorkViewModel();
  const animationOnLoadProps = contactUsVM.animationOnLoadProps;

  const techStackList = (list: string[]) => {
    return list.map((item, index) => {
      return <_TechItem key={index}>{item}</_TechItem>;
    });
  };

  const [isTabletOrSmaller] = useMediaQuery("(max-width: 768px)");

  const ProjectView: React.FC = () => {
    if (isTabletOrSmaller) {
      return (
        <AnimateOnLoad delay={0.4} translateY={animationOnLoadProps.translateY}>
          <Box bg="" width="90vw">
            <MobileProjectCarousel
              images={props.projectDetails?.images ?? []}
            />
          </Box>
        </AnimateOnLoad>
      );
    }

    /* IMAGES */
    return (
      <AnimateOnLoad delay={0.4} translateY={animationOnLoadProps.translateY}>
        <Flex
          // paddingX="7%"
          // paddingY="7%"
          paddingBottom="8%"
          width="100%"
          boxShadow="0px 2px 10px rgba(0, 0, 0, 0.3)"
          bg={props.projectDetails?.backgroundColor}
          borderRadius={{
            // RESPONSIVE
            base: "10px",
            sm: "15px",
            md: "20px",
            lg: "40px",
            "2xl": "60px",
          }}
        >
          {projectImagesList(
            props.projectDetails?.images ?? [],
            props.projectDetails?.deviceType ?? DeviceTypeEnum.DESKTOP
          )}
        </Flex>
      </AnimateOnLoad>
    );
  };

  return (
    <>
      <AnimateOnLoad delay={0.2} translateY={animationOnLoadProps.translateY}>
        <Flex bg="" flexWrap="wrap">
          {/* TECH STACK USED */}
          {techStackList(props.projectDetails?.techStack ?? [])}
        </Flex>
      </AnimateOnLoad>
      <Box height="50px" />

      <AnimateOnLoad delay={animationOnLoadProps.delay()} translateY={50}>
        <AppPageSubheading>
          {props.projectDetails?.description ?? ""}
        </AppPageSubheading>
      </AnimateOnLoad>

      <Box height="50px" />

      <ProjectView />

      <SectionSpacing />
    </>
  );
};

export default RecentWorkProjectDetails;
