import { Box, useBreakpointValue, Text, useTheme } from "@chakra-ui/react";
import React from "react";
import { CustomTheme } from "../../../../theme";
import list from "@datautils/engineering_services";
import {
  getNextMargin,
  getPrevMargin,
} from "src/lib/utils/get_assymetric_margins";

// If 2 VDivider then 3 Cells

// base 1 VDivider -> 2 Cells
// md 2 VDivider -> 3 Cells
// lg 3 VDivider -> 4 Cells
// xl 4 VDivider -> 5 Cells

// Eg List length = 10

const getLineBreakText = (text: string): string => {
  return text?.toUpperCase();
};

// BASE
// Item 1 | Item 2
// MD
// Item 1 | Item 2 | Item 3
// LG
// Item 1 | Item 2 | Item 3 | Item 4
const noOfRowItems = {
  base: 2,
  md: 3,
  lg: 4,
  xl: 5,
};

const noOfVDividers = {
  base: noOfRowItems.base - 1,
  md: noOfRowItems.md - 1,
  lg: noOfRowItems.lg - 1,
  xl: noOfRowItems.xl - 1,
};

// The whole section of RowItems
const noOfRows = {
  base: Math.round(list.length / noOfRowItems.base),
  md: Math.round(list.length / noOfRowItems.md),
  lg: Math.round(list.length / noOfRowItems.lg),
  xl: Math.round(list.length / noOfRowItems.xl),
};

interface RowProps {
  children: React.ReactNode;
}

const Row = (props: RowProps) => {
  return (
    <Box display="flex" flex={1}>
      {props.children}
    </Box>
  );
};

interface RowItemProps {
  children: string;
}

const RowItem = (props: RowItemProps) => {
  return (
    <Box
      fontSize="95%"
      textAlign="center"
      letterSpacing={1}
      whiteSpace="wrap"
      display="flex"
      justifyContent="center"
      flex={1}
      paddingX={{
        base: "10px",
        md: "20px",
        lg: "30px",
      }}
      alignItems="center"
    >
      <Text whiteSpace="pre-line">{props.children}</Text>
    </Box>
  );
};

interface HDividerProps {
  left?: string | number;
  right?: string | number;
}

const HDivider = (props: HDividerProps) => {
  const theme = useTheme<CustomTheme>();

  return (
    <Box
      marginLeft={props.left}
      marginRight={props.right}
      height="1px"
      backgroundColor={theme.colors.tableDivider}
    ></Box>
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
      backgroundColor={theme.colors.tableDivider}
      justifyContent="center"
      display="flex"
    ></Box>
  );
};

const VerticalDividers = () => {
  const count = useBreakpointValue({ ...noOfVDividers });

  let topMargin: number = 13;
  let bottomMargin: number = -10;

  return (
    <Box
      justifyContent="space-evenly"
      display="flex"
      flex={1}
      flexDirection="row"
    >
      <>
        {[...Array(count)].map((_, index) => {
          topMargin = getPrevMargin(topMargin);
          bottomMargin = getNextMargin(bottomMargin);

          return <VDivider key={index} top={topMargin} bottom={bottomMargin} />;
        })}
      </>
    </Box>
  );
};

const AsymmetricTable = () => {
  const noOfRowsCount: number = useBreakpointValue({ ...noOfRows }) ?? 0;
  const noOfRowItemsCount = useBreakpointValue({ ...noOfRowItems }) ?? 0;

  const getRows = (): React.ReactNode => {
    let index: number = -1;

    let leftMargin: number = 13;
    let rightMargin: number = -10;

    return (
      <>
        {[...Array(noOfRowsCount)].map((_, i) => {
          leftMargin = getPrevMargin(leftMargin);
          rightMargin = getNextMargin(rightMargin);

          return (
            <React.Fragment key={i}>
              <Row>
                <>
                  {[...Array(noOfRowItemsCount)].map((_, j) => {
                    index = index + 1;

                    const item: string = getLineBreakText(list[index]);

                    return <RowItem key={index}>{item}</RowItem>;
                  })}
                </>
              </Row>
              {i !== noOfRowsCount - 1 && (
                <HDivider key={i} left={leftMargin} right={rightMargin} />
              )}
            </React.Fragment>
          );
        })}
      </>
    );
  };

  return (
    <Box
      position="relative"
      display="flex"
      justifyContent="space-evenly"
      height={{
        base: "700px",
        md: "500px",
      }}
      backgroundColor=""
    >
      <VerticalDividers />

      <Box
        flexDirection="column"
        display="flex"
        height="100%"
        width="100%"
        position="absolute"
      >
        {getRows()}
      </Box>
    </Box>
  );
};

export default AsymmetricTable;
