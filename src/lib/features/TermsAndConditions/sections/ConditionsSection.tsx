import { Box, Flex, Text } from "@chakra-ui/react";
import AppPageSubheading from "src/lib/ui/components/AppPageSubheading";
import AppSectionHeading from "src/lib/ui/components/AppSectionHeading";
import SectionHeadingSpacing from "src/lib/ui/components/SectionHeadingSpacing";
import termsAndConditions, {
  TermsAndConditionsContent,
} from "@datautils/terms_and_conditions";

const ConditionsSection = () => {
  const isLastItem = (index: number, listLength: number): boolean => {
    return index === listLength - 1;
  };

  const policyContent = (list: TermsAndConditionsContent[]) => {
    return list.map((item, index) => {
      return (
        <Box key={index}>
          <Text fontWeight="bold">{item.title}</Text>
          <Box height="30px" />
          <AppPageSubheading>{item.description}</AppPageSubheading>
          <Box height="60px" />

          {/* {!isLastItem(index, list.length) && <Box height="60px" />} */}
        </Box>
      );
    });
  };

  const termsAndConditionsMappedComponent: JSX.Element = (
    <>
      {termsAndConditions.map((item, index) => {
        return (
          <Flex key={index} flexDir="column">
            <AppSectionHeading>{item.condition}</AppSectionHeading>
            <SectionHeadingSpacing />

            {policyContent(item.conditionsContent)}

            {/* <Box height="60px" /> */}
            {!isLastItem(index, termsAndConditions.length) && (
              <Box height="60px" />
            )}
          </Flex>
        );
      })}
    </>
  );

  return termsAndConditionsMappedComponent;
};

export default ConditionsSection;
