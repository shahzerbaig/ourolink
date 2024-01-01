import {
  Box,
  Flex,
  Image,
  ResponsiveValue,
  useBreakpointValue,
} from "@chakra-ui/react";
import { ReactElement, useState } from "react";
import AppSectionHeading from "src/lib/ui/components/AppSectionHeading";
import SectionHeadingSpacing from "src/lib/ui/components/SectionHeadingSpacing";
import TicTacToeDividers from "../components/TicTacToeDividers";
import TechnologiesMobileView from "../components/TechnologiesMobileView";
import TechnologiesDesktopView from "../components/TechnologiesDesktopView";
import webTechStack from "@datautils/web_tech_stack";
import mobileTechStack from "@datautils/mobile_tech_stack";
import desktopTechStack from "@datautils/desktop_tech_stack";
import cloudTechStack from "@datautils/cloud_tech_stack";
import { TechStackEnum } from "src/domain/enums/tech_stack_enum";

export interface TechStackLayoutProps {
  src: string;
  alt?: string;
  top?: ResponsiveValue<number | (string & {})>;
  left?: ResponsiveValue<number | (string & {})>;
  right?: ResponsiveValue<number | (string & {})>;
  bottom?: ResponsiveValue<number | (string & {})>;
  width: ResponsiveValue<number | (string & {})>;
  minWidth: ResponsiveValue<number | (string & {})>;
  padding: ResponsiveValue<number | (string & {})>;
}

export interface TechnologiesProps {
  selectedTechStack: TechStackEnum;
  onTechStackSelected: (techStack: TechStackEnum) => void;
}

const _Technologies = (props: TechnologiesProps): ReactElement => {
  const isMobile = useBreakpointValue({
    base: true,
    lg: false,
  });

  if (isMobile === true) {
    return <TechnologiesMobileView techProps={props} />;
  }

  return <TechnologiesDesktopView techProps={props} />;
};

const _Technology = (props: TechStackLayoutProps) => {
  return (
    <Image
      top={props.top}
      left={props.left}
      right={props.right}
      bottom={props.bottom}
      padding={props.padding}
      minWidth={props.minWidth}
      aspectRatio={1 / 1}
      width={props.width}
      src={props.src}
      objectFit="contain"
      bg="white"
      borderRadius="50%"
      position="absolute"
      border="1px solid black"
      boxShadow="-8px 13px 5px 0px rgba(0,0,0,0.25)"
    />
  );
};

const TechnologyExpertiseSection = () => {
  const [currentTech, onTechStackSelected] = useState<TechStackEnum>(
    TechStackEnum.MOBILE
  );

  const webTechStackMappedComponent = webTechStack.map((tech, i) => {
    return (
      <_Technology
        key={i}
        width={tech.layoutProps.width}
        minWidth={tech.layoutProps.minWidth}
        padding={tech.layoutProps.padding}
        top={tech.layoutProps.top}
        right={tech.layoutProps.right}
        left={tech.layoutProps.left}
        bottom={tech.layoutProps.bottom}
        src={tech.src}
      />
    );
  });

  const mobileTechStackMappedComponent = mobileTechStack.map((tech, i) => {
    return (
      <_Technology
        key={i}
        width={tech.layoutProps.width}
        minWidth={tech.layoutProps.minWidth}
        padding={tech.layoutProps.padding}
        top={tech.layoutProps.top}
        right={tech.layoutProps.right}
        left={tech.layoutProps.left}
        bottom={tech.layoutProps.bottom}
        src={tech.src}
      />
    );
  });

  const desktopTechStackMappedComponent = desktopTechStack.map((tech, i) => {
    return (
      <_Technology
        key={i}
        width={tech.layoutProps.width}
        minWidth={tech.layoutProps.minWidth}
        padding={tech.layoutProps.padding}
        top={tech.layoutProps.top}
        right={tech.layoutProps.right}
        left={tech.layoutProps.left}
        bottom={tech.layoutProps.bottom}
        src={tech.src}
      />
    );
  });

  const cloudTechStackMappedComponent = cloudTechStack.map((tech, i) => {
    return (
      <_Technology
        key={i}
        width={tech.layoutProps.width}
        minWidth={tech.layoutProps.minWidth}
        padding={tech.layoutProps.padding}
        top={tech.layoutProps.top}
        right={tech.layoutProps.right}
        left={tech.layoutProps.left}
        bottom={tech.layoutProps.bottom}
        src={tech.src}
      />
    );
  });

  const getCurrentSelectedTechStack = () => {
    switch (currentTech) {
      case TechStackEnum.WEB:
        return webTechStackMappedComponent;

      case TechStackEnum.MOBILE:
        return mobileTechStackMappedComponent;

      case TechStackEnum.DESKTOP:
        return desktopTechStackMappedComponent;

      case TechStackEnum.CLOUD:
        return cloudTechStackMappedComponent;

      default:
        return mobileTechStackMappedComponent;
    }
  };

  return (
    <Box>
      <AppSectionHeading>Our Technology Expertise</AppSectionHeading>
      <SectionHeadingSpacing />

      <Flex
        bg=""
        height={{
          lg: "700px",
        }}
        flexDir={{
          base: "column",
          lg: "row",
        }}
      >
        <_Technologies
          selectedTechStack={currentTech}
          onTechStackSelected={onTechStackSelected}
        />

        {/* Spacing */}
        <Box
          width={{
            lg: "80px",
          }}
          height={{
            base: "100px",
            lg: "0px",
          }}
        />

        <Box position="relative" flex={2} bg="">
          <Box>
            <TicTacToeDividers
              height={{
                base: "400px",
                sm: "500px",
                lg: "700px",
              }}
            />
          </Box>

          {getCurrentSelectedTechStack()}
        </Box>
      </Flex>
    </Box>
  );
};

export default TechnologyExpertiseSection;
