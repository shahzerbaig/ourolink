import {
  Text,
  Image,
  Box,
  Flex,
  useTheme,
  useMediaQuery,
} from "@chakra-ui/react";
import iconCaretRight from "@assets/icon_caret_right.png";
import { CustomTheme } from "src/theme";
import techStack from "@datautils/tech_stack";
import { ReactElement } from "react";
import { TechnologiesProps } from "../sections/TechnologyExpertiseSection";

interface TechItemProps {
  text: string;
  isSelected?: boolean;
  onClick?: () => void;
}

interface Props {
  techProps: TechnologiesProps;
}

const _TechItem = ({ onClick, text, isSelected = false }: TechItemProps) => {
  const theme = useTheme<CustomTheme>();

  const paddingX = "40px";
  const fontSize = 13;

  if (isSelected) {
    return (
      <Flex
        borderRadius={5}
        onClick={onClick}
        alignItems="center"
        cursor="pointer"
        textAlign="center"
        paddingX={paddingX}
        bg={theme.colors.accent}
      >
        <Text
          color={theme.colors.primary}
          fontSize={fontSize}
          fontWeight="bold"
        >
          {text}
        </Text>
      </Flex>
    );
  }

  return (
    <Flex
      onClick={onClick}
      alignItems="center"
      cursor="pointer"
      borderWidth="1px"
      borderStyle="solid"
      borderColor="black"
      borderRadius={5}
      textAlign="center"
      paddingX={paddingX}
      bg="white"
    >
      <Text fontSize={fontSize} fontWeight="bold">
        {text}
      </Text>
    </Flex>
  );
};

const TechnologiesMobileView = ({ techProps }: Props) => {
  const [isBase, isSmall, isMedium] = useMediaQuery([
    "(min-width: 375px)",
    "(min-width: 425px)",
    "(min-width: 580px)",
  ]);

  // Base
  let noOfItemsInFirstRow = 1;
  let noOfItemsInSecondRow = 2;
  let noOfItemsInThirdRow = 2;

  if (isSmall) {
    noOfItemsInFirstRow = 2;
    noOfItemsInSecondRow = 2;
    noOfItemsInThirdRow = 2;
  }

  if (isMedium) {
    noOfItemsInFirstRow = 3;
    noOfItemsInSecondRow = 3;
    noOfItemsInThirdRow = 3;
  }

  const firstRowOfTechItems: ReactElement[] = [];
  const secondRowOfTechItems: ReactElement[] = [];
  const thirdRowOfTechItems: ReactElement[] = [];

  let index = 0;

  const isFull = (): boolean => {
    return techStack.length === index;
  };

  for (let i = 0; i < noOfItemsInFirstRow; i++) {
    if (isFull()) {
      break;
    }

    const tech = techStack[index];

    firstRowOfTechItems.push(
      <_TechItem
        onClick={() => {
          techProps.onTechStackSelected(tech.type);
        }}
        isSelected={techProps.selectedTechStack === tech.type}
        key={i}
        text={tech.typeString}
      />
    );
    index++;
  }

  for (let i = 0; i < noOfItemsInSecondRow; i++) {
    if (isFull()) {
      break;
    }

    const tech = techStack[index];

    secondRowOfTechItems.push(
      <_TechItem
        onClick={() => {
          techProps.onTechStackSelected(tech.type);
        }}
        isSelected={techProps.selectedTechStack === tech.type}
        key={i}
        text={tech.typeString}
      />
    );
    index++;
  }

  for (let i = 0; i < noOfItemsInThirdRow; i++) {
    if (isFull()) {
      break;
    }

    const tech = techStack[index];

    thirdRowOfTechItems.push(
      <_TechItem
        onClick={() => {
          techProps.onTechStackSelected(tech.type);
        }}
        isSelected={techProps.selectedTechStack === tech.type}
        key={i}
        text={tech.typeString}
      />
    );
    index++;
  }

  const buttonHeight: number = 50;
  const marginY: number = buttonHeight / 2;

  {
    return (
      <Flex
        pos="relative"
        justifyContent="center"
        flexDir="column"
        // bg="turquoise"
        height={thirdRowOfTechItems.length === 0 ? "160px" : "240px"} //   {/* Show/Hide */}
      >
        <Flex marginY={`${marginY}px`} flex={1} flexDir="column">
          <Box
            flex={1}
            borderTopRightRadius={5}
            borderBottomRightRadius={5}
            borderBottom="2px solid black"
            borderRight="2px solid black"
            borderTop="2px solid black"
            // bg="yellowgreen"
          ></Box>

          {thirdRowOfTechItems.length !== 0 && (
            <Box
              flex={1}
              borderBottomLeftRadius={5}
              borderBottom="2px solid black"
              borderLeft="2px solid black"
              // bg="tomato"
            ></Box>
          )}
          {/* Show/Hide */}
        </Flex>

        <Flex
          flexDir="column"
          top={0}
          justifyContent="space-between"
          width="100%"
          height="100%"
          pos="absolute"
          bg=""
        >
          <Flex
            width="100%"
            height={`${buttonHeight}px`}
            // bg="peru"
            // opacity={0.8}
          >
            {/* Caret Image */}
            <Flex alignItems="center" flexDir="row" bg="">
              {/* Caret Right Image Supporter Divider */}
              <Box
                marginRight="2px"
                borderRadius="2px"
                width="3px"
                height="100%"
                bg="black"
              ></Box>

              {/* Caret Right Image */}
              <Image
                marginY="2px"
                width="25px"
                bg=""
                src={iconCaretRight}
              ></Image>
            </Flex>

            <Flex justifyContent="space-evenly" flex={1}>
              {firstRowOfTechItems}
            </Flex>
          </Flex>

          <Flex
            width="100%"
            height={`${buttonHeight}px`}
            // bg="purple"
            // opacity={0.8}
            justifyContent="space-evenly"
          >
            {secondRowOfTechItems}
          </Flex>

          {/* Show/Hide */}
          {thirdRowOfTechItems.length !== 0 && (
            <Flex
              width="100%"
              height={`${buttonHeight}px`}
              // bg="black"
              // opacity={0.8}
              justifyContent="space-evenly"
            >
              {thirdRowOfTechItems}
            </Flex>
          )}
        </Flex>
      </Flex>
    );
  }
};

export default TechnologiesMobileView;
