import {
  Box,
  Flex,
  Image,
  Text,
  useBreakpointValue,
  useTheme,
} from "@chakra-ui/react";
import AppSectionHeading from "src/lib/ui/components/AppSectionHeading";
import { CustomTheme } from "src/theme";
import workStack, { WorkStackImageProps } from "@datautils/work_stack";
import { DeviceTypeEnum } from "src/domain/enums/device_type_enum";

interface _TechItemProps {
  children: string;
}

// Props if the device is a mobile
interface _ProjectImageBoxProps {
  src: string;
  alt: string;
  paddingX: string;
  paddingTop: string;
  bg: string;
  deviceType: DeviceTypeEnum;
}

const _ProjectDesktopImageBox = (props: _ProjectImageBoxProps) => {
  return (
    <Box
      paddingTop={props.paddingTop}
      paddingX={props.paddingX}
      flex={1}
      bg={props.bg}
    >
      <Image
        bg=""
        boxShadow={{
          // RESPONSIVE
          base: "5px 10px 15px rgba(0, 0, 0, 0.3)",
          sm: "5px 10px 15px rgba(0, 0, 0, 0.3)",
          md: "5px 10px 15px rgba(0, 0, 0, 0.3)",
          lg: "10px 15px 20px rgba(0, 0, 0, 0.3)",
          "2xl": "15px 20px 30px rgba(0, 0, 0, 0.3)",
        }}
        borderRadius={{
          // RESPONSIVE
          base: "10px",
          sm: "15px",
          md: "20px",
          lg: "40px",
          "2xl": "60px",
        }}
        border={{
          // RESPONSIVE
          base: "3px solid black",
          sm: "4px solid black",
          md: "5px solid black",
          lg: "10px solid black",
          "2xl": "15px solid black",
        }}
        fit="contain"
        src={props.src}
      ></Image>
    </Box>
  );
};

const _ProjectMobileImageBox = (props: _ProjectImageBoxProps) => {
  return (
    <Box
      paddingTop={props.paddingTop}
      paddingX={props.paddingX}
      flex={1}
      bg={props.bg}
    >
      <Image
        boxShadow={{
          // RESPONSIVE
          base: "5px 10px 15px rgba(0, 0, 0, 0.3)",
          sm: "5px 10px 15px rgba(0, 0, 0, 0.3)",
          md: "5px 10px 15px rgba(0, 0, 0, 0.3)",
          lg: "10px 15px 20px rgba(0, 0, 0, 0.3)",
          "2xl": "15px 20px 30px rgba(0, 0, 0, 0.3)",
        }}
        borderRadius={{
          // RESPONSIVE
          base: "10px",
          sm: "15px",
          md: "20px",
          lg: "40px",
          "2xl": "60px",
        }}
        border={{
          // RESPONSIVE
          base: "3px solid black",
          sm: "4px solid black",
          md: "5px solid black",
          lg: "10px solid black",
          "2xl": "15px solid black",
        }}
        fit="contain"
        src={props.src}
      ></Image>
    </Box>
  );
};

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

const ProjectsSection: React.FC = () => {
  const techStackList = (list: string[]) => {
    return list.map((item, index) => {
      return <_TechItem key={index}>{item}</_TechItem>;
    });
  };

  const projectImagesList = (
    list: WorkStackImageProps[],
    deviceType: DeviceTypeEnum
  ): JSX.Element => {
    const paddingTopList = ["10%", "20%", "15%"];
    const paddingTopDesktopList = ["5%", "30%"];

    const mappedProjects: JSX.Element = (
      <>
        {list.map((item, index) => {
          // If the device is a desktop
          if (deviceType === DeviceTypeEnum.DESKTOP) {
            return (
              <_ProjectDesktopImageBox
                key={index}
                src={item.src}
                alt={item.alt}
                paddingX="5%"
                paddingTop={paddingTopDesktopList[index]}
                // bg={bgColor[index]}
                bg=""
                deviceType={deviceType}
              />
            );
          }

          // If the device is a mobile
          return (
            <_ProjectMobileImageBox
              key={index}
              src={item.src}
              alt={item.alt}
              paddingX="5%"
              paddingTop={paddingTopList[index]}
              bg=""
              deviceType={deviceType}
            />
          );
        })}
      </>
    );

    return mappedProjects;
  };

  const projects: JSX.Element[] = workStack.map((item, index) => {
    // Margin bottom between projects
    // The last project should not have a margin bottom

    const getMarginBottom = () => {
      if (index === workStack.length - 1) {
        return "0px";
      }

      return useBreakpointValue({
        base: "200px",
        md: "250px",
        lg: "300px",
      });
    };

    return (
      <Flex marginBottom={getMarginBottom()} key={index} flexDir="column">
        {/* PROJECT NAME */}
        <AppSectionHeading>{item.projectName}</AppSectionHeading>
        <Box height="50px" />

        <Flex bg="" flexWrap="wrap">
          {/* TECH STACK USED */}
          {techStackList(item.techStack)}
        </Flex>
        {item.techStack.length !== 0 && <Box height="40px" />}

        {/* DESCRIPTION */}
        <Text>{item.description}</Text>

        <Box height="50px" />

        {/* IMAGES */}
        <Flex
          // paddingX="7%"
          // paddingY="7%"
          paddingBottom="8%"
          width="100%"
          boxShadow="0px 2px 10px rgba(0, 0, 0, 0.3)"
          bg={item.backgroundColor}
          borderRadius={{
            // RESPONSIVE
            base: "10px",
            sm: "15px",
            md: "20px",
            lg: "40px",
            "2xl": "60px",
          }}
        >
          {projectImagesList(item.images, item.deviceType)}
        </Flex>
      </Flex>
    );
  });

  return <>{projects}</>;
};

export default ProjectsSection;
