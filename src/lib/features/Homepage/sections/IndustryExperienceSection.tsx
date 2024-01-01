import {
  Box,
  Text,
  useBreakpointValue,
  useTheme,
  Image,
  Flex,
} from "@chakra-ui/react";
import AppSectionHeading from "src/lib/ui/components/AppSectionHeading";
import SectionHeadingSpacing from "src/lib/ui/components/SectionHeadingSpacing";
import { CustomTheme } from "src/theme";
import React from "react";
import { useHomepageViewModel } from "src/lib/providers/HomepageViewModelProvider";
import listOfIndustryExperiences from "@datautils/industry_experiences";
import { IndustryExperience } from "@datautils/industry_experience_props";
import {
  getNextMargin,
  getPrevMargin,
} from "src/lib/utils/get_assymetric_margins";

const getLeftMargin = (value: number): number => {
  let margin: number = value;

  if (margin === 0) {
    margin = margin + 1;
  } else if (margin === 5) {
    margin = 0;
  } else {
    margin = margin + 2;
  }

  return margin;
};

const getRightMargin = (value: number): number => {
  let margin: number = value;

  if (margin === -10) {
    margin = -5;
  } else if (margin === -5) {
    margin = margin + 7;
  } else {
    margin = margin + 2;
  }

  return margin;
};

interface _ListItemProps {
  industryExp: IndustryExperience;
}

const _ListItem = ({ industryExp }: _ListItemProps) => {
  return (
    <Box marginBottom="10px" flex={2} bg="" border="">
      <Flex
        position="relative"
        flexDir="column"
        bg=""
        height={{
          base: "60px",
          md: "80px",
          lg: "90px", // RESPONSIVE
        }}
        paddingTop="15px"
      >
        <Flex
          alignItems="end"
          flex={1}
          width={{
            base: "45px",
            md: "65px",
            lg: "85px", // RESPONSIVE
          }}
          bg=""
        >
          <Image fit="contain" src={industryExp.src}></Image>
        </Flex>

        <Flex
          top={0}
          marginLeft={{
            base: "20px",
            md: "30px",
            lg: "40px", // RESPONSIVE
          }}
          width="85%"
          position="absolute"
          height={{
            base: "35px",
            md: "45px",
            lg: "55px", // RESPONSIVE
          }}
          // bg="teal"
          bg="white"
          alignItems="end"
          paddingBottom={{
            base: "7px",
            md: "10px",
            lg: "13px", // RESPONSIVE
          }}
          paddingLeft={{
            base: "7px",
            md: "10px",
            lg: "13px", // RESPONSIVE
          }}
          borderBottomLeftRadius={4}
        >
          <Text
            lineHeight={1}
            fontSize={{
              base: "11px",
              md: "14px",
              lg: "16px",
              xl: "18px", // RESPONSIVE
            }}
            textColor="black"
          >
            {industryExp.industry}
          </Text>
        </Flex>
      </Flex>
    </Box>
  );
};

const HorizontalSections = () => {
  const viewModel = useHomepageViewModel();

  const noOfRowsInIndustryExp: number =
    useBreakpointValue({ ...viewModel.noOfRowsInIndustryExp }) ?? 0;

  const noOfCellsInEachRowInIndustryExp: number =
    useBreakpointValue({ ...viewModel.noOfCellsInEachRowInIndustryExp }) ?? 0;

  let index: number = -1;

  const getListItem = (
    item: IndustryExperience | undefined,
    index: number
  ): React.ReactNode => {
    if (item === undefined) {
      return <Box flex={2}></Box>;
    }

    return <_ListItem industryExp={item} key={index} />;
  };

  let leftMargin: number = 3;
  let rightMargin: number = -10;

  const getHDivider = (
    index: number,
    left: number,
    right: number
  ): React.ReactNode => {
    if (index === noOfCellsInEachRowInIndustryExp - 1) {
      return null;
    }

    return <HDivider left={left} right={right} />;
  };

  return (
    <>
      {[...Array(noOfRowsInIndustryExp)].map((_, i) => {
        leftMargin = getLeftMargin(leftMargin);
        rightMargin = getRightMargin(rightMargin);

        return (
          <Box key={index} display="flex" flex={1} bg="" width="100%">
            {Array.from({ length: noOfCellsInEachRowInIndustryExp }, (_, i) => {
              index = index + 1;

              const item: IndustryExperience | undefined =
                listOfIndustryExperiences.at(index);

              return (
                <React.Fragment key={i}>
                  {getListItem(item, index)}

                  {getHDivider(i, leftMargin, rightMargin)}
                </React.Fragment>
              );
            })}
          </Box>
        );
      })}
    </>
  );
};

interface HDividerProps {
  left?: string | number;
  right?: string | number;
}

export const HDivider = (props: HDividerProps) => {
  const theme = useTheme<CustomTheme>();

  return (
    <Box flex={1} display="flex" flexDir="column" justifyContent="center" bg="">
      <Box
        marginLeft={props.left}
        marginRight={props.right}
        width="100%"
        height="1px"
        bg={theme.colors.tableDivider}
      ></Box>
    </Box>
  );
};

interface VDividerProps {
  top?: string | number;
  bottom?: string | number;
}

const VDivider = (props: VDividerProps) => {
  const theme = useTheme<CustomTheme>();

  return (
    <Box
      marginTop={props.top}
      marginBottom={props.bottom}
      width="1px"
      height="100%"
      backgroundColor={theme.colors.tableDivider} // RESPONSIVE
      justifyContent="center"
      display="flex"
    ></Box>
  );
};

const VerticalDividers = () => {
  const viewModel = useHomepageViewModel();

  const noOfVDividers = useBreakpointValue({
    ...viewModel.noOfVDividersInIndustryExp,
  });

  let topMargin: number = 13;
  let bottomMargin: number = -10;

  return (
    <>
      {[...Array(noOfVDividers)].map((_, index) => {
        topMargin = getPrevMargin(topMargin);
        bottomMargin = getNextMargin(bottomMargin);

        return <VDivider top={topMargin} bottom={bottomMargin} key={index} />;
      })}
    </>
  );
};

const IndustryExperienceSection = () => {
  return (
    <Box>
      <AppSectionHeading>Our Industry experience</AppSectionHeading>
      <SectionHeadingSpacing />

      <Box
        position="relative"
        justifyContent="space-evenly"
        display="flex"
        height={{
          base: "375px",
          md: "475px",
          lg: "320", // RESPONSIVE
        }}
        bg=""
        alignItems="center"
      >
        <VerticalDividers />

        <Box
          bg=""
          flexDirection="column"
          justifyContent="space-between"
          display="flex"
          width="100%"
          position="absolute"
        >
          <HorizontalSections />
        </Box>
      </Box>
    </Box>
  );
};

export default IndustryExperienceSection;
