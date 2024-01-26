import { Text, Image, Box, Flex, useTheme } from "@chakra-ui/react";
import { CustomTheme } from "src/theme";
import iconCaretUp from "@assets/icon_caret_up.png";
import techStack from "@datautils/tech_stack";
import { TechnologiesProps } from "../sections/TechnologyExpertiseSection";

interface TechItemProps {
  text: string;
  isSelected?: boolean;
  onClick?: () => void;
}

const _TechItem = ({ onClick, text, isSelected = false }: TechItemProps) => {
  const theme = useTheme<CustomTheme>();

  const paddingX = "70px";
  const paddingY = "16px";
  const fontSize = 19;

  if (isSelected) {
    return (
      <Box
        borderRadius={5}
        textAlign="center"
        paddingX={paddingX}
        paddingY={paddingY}
        bg={theme.colors.accent}
      >
        <Text
          fontSize={fontSize}
          color={theme.colors.primary}
          fontWeight="bold"
        >
          {text}
        </Text>
      </Box>
    );
  }

  return (
    <Box
      onClick={onClick}
      cursor="pointer"
      borderWidth="1px"
      borderStyle="solid"
      borderColor="black"
      borderRadius={5}
      textAlign="center"
      paddingX={paddingX}
      paddingY={paddingY}
      bg="white"
    >
      <Text fontSize={fontSize} fontWeight="bold">
        {text}
      </Text>
    </Box>
  );
};

interface Props {
  techProps: TechnologiesProps;
}

const TechnologiesDesktopView = ({ techProps }: Props) => {
  // ITERATE THROUGH TECH STACK AND CREATE A LIST OF TECH ITEMS
  const techItems = techStack.map((tech, index) => {
    return (
      <_TechItem
        isSelected={techProps.selectedTechStack === tech.type}
        onClick={() => {
          techProps.onTechStackSelected(tech.type);
        }}
        key={index}
        text={tech.typeString}
      />
    );
  });

  return (
    <Flex flexDir="column" flex={1} bg="">
      {/* List of Technologies */}
      <Box pos="relative" bg="" flex={1}>
        <Box
          borderRadius={5}
          marginX="auto"
          bg="black"
          height="100%"
          width="5px"
        ></Box>

        <Flex
          alignItems="center"
          flexDir="column"
          top={0}
          pos="absolute"
          height="100%"
          width="100%"
          bg=""
        >
          <Flex
            justifyContent="space-evenly"
            bg=""
            height="100%"
            flexDir="column"
          >
            {/* Tech Items */}
            {techItems}
          </Flex>
        </Flex>
      </Box>

      {/* Spacing */}
      <Box height="2px"></Box>

      {/* Caret Image */}
      <Flex flexDir="column" bg="">
        <Image width={120} marginX="auto" src={iconCaretUp}></Image>
        <Box height="10px"></Box>
        <Box
          marginX="auto"
          borderRadius="2px"
          width="165px"
          height="10px"
          bg="black"
        ></Box>
      </Flex>
    </Flex>
  );
};

export default TechnologiesDesktopView;
