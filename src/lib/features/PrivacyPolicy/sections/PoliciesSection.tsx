import { Box, Flex, Text } from "@chakra-ui/react";
import AppPageSubheading from "src/lib/ui/components/AppPageSubheading";
import AppSectionHeading from "src/lib/ui/components/AppSectionHeading";
import SectionHeadingSpacing from "src/lib/ui/components/SectionHeadingSpacing";
import privacyPolicy, { PrivacyPolicyContent } from "@datautils/privacy_policy";

const PoliciesSection = () => {
  const isLastItem = (index: number, listLength: number): boolean => {
    return index === listLength - 1;
  };

  const policyContent = (list: PrivacyPolicyContent[]) => {
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

  const privacyPolicyMappedComponent: JSX.Element = (
    <>
      {privacyPolicy.map((item, index) => {
        return (
          <Flex key={index} flexDir="column">
            <AppSectionHeading>{item.policy}</AppSectionHeading>
            <SectionHeadingSpacing />

            {policyContent(item.policyContent)}

            {/* <Box height="60px" /> */}
            {!isLastItem(index, privacyPolicy.length) && <Box height="60px" />}
          </Flex>
        );
      })}
    </>
  );

  return privacyPolicyMappedComponent;
};

export default PoliciesSection;
