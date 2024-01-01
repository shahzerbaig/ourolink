import { Box, Flex, Text, Image } from "@chakra-ui/react";
import { useTheme } from "@chakra-ui/react";
import { CustomTheme } from "src/theme";
import iconPostOffice from "@assets/icon_post_office.png";
import iconSmartPhone from "@assets/icon_smartphone.png";
import AppMaterialButton from "src/lib/ui/components/AppMaterialButton";
import AppTextField from "src/lib/ui/components/AppTextField";
import { AppConstants } from "src/domain/constants/AppConstants";

const _SubmitButton = () => {
  return (
    <Box bg="" flex={4}>
      <AppMaterialButton onClick={() => {}}>Submit</AppMaterialButton>
    </Box>
  );
};

const _BookACall = () => {
  const theme = useTheme<CustomTheme>();

  return (
    <Flex
      alignItems="center"
      order={{
        base: 1,
        lg: 0,
      }}
      bg=""
      flex={2}
    >
      {/* TODO: Uncomment this when the book a call feature is ready */}
      {/* <Text>Not a fan of forms?</Text>
      <Box width="10px" />
      <Text
        cursor="pointer"
        decoration="underline"
        textColor={theme.colors.secondary}
        fontWeight={500}
      >
        Book a call
      </Text> */}
    </Flex>
  );
};

const _ContactDetailsComponent = (title: string, imgSource: string) => {
  const theme = useTheme<CustomTheme>();

  return (
    <Flex alignItems="center">
      <Image src={imgSource} width="25px" />
      <Box width="15px" />
      <Text textColor={theme.colors.secondary} fontWeight={500} fontSize={14}>
        {title}
      </Text>
    </Flex>
  );
};

const _ContactDetails = () => {
  const email = _ContactDetailsComponent(
    AppConstants.CONTACT_US_EMAIL,
    iconPostOffice
  );

  const phone = _ContactDetailsComponent(
    AppConstants.CONTACT_US_PHONE,
    iconSmartPhone
  );

  return (
    <Flex flexDir="column" bg="" flex={2}>
      {email}
      <Box height="15px" />
      {phone}
    </Flex>
  );
};

const _TextFields = () => {
  // The height between the text fields
  const heightSpace = () => {
    return <Box height="40px" />;
  };

  // The width between the text fields
  const widthSpace = () => {
    return <Box width="25px" />;
  };

  const firstName = () => {
    return (
      <Box flex={1}>
        <AppTextField label="First Name" placeholder="First Name" />
      </Box>
    );
  };

  const lastName = () => {
    return (
      <Box flex={1}>
        <AppTextField label="Last Name" placeholder="Last Name" />
      </Box>
    );
  };

  const email = () => {
    return (
      <Box flex={1}>
        <AppTextField label="Email" placeholder="Email" />
      </Box>
    );
  };

  const phone = () => {
    return (
      <Box flex={1}>
        <AppTextField label="Phone" placeholder="Phone" />
      </Box>
    );
  };

  const organization = () => {
    return (
      <AppTextField
        label="Organization / Institute"
        placeholder="Organization / Institute"
      />
    );
  };

  const message = () => {
    return (
      <AppTextField
        label="How can we help you?"
        placeholder="Leave a message"
      />
    );
  };

  return (
    <Flex flexDir="column" bg="" flex={4}>
      <Flex
        flexDir={{
          base: "column",
          md: "row",
        }}
        flex={1}
      >
        {firstName()}

        {/* These are the spaces between the text fields
        The Box with width will get neglected if the Box with flex is column
        And the Box with height will get neglected if the Box with flex is row */}
        {widthSpace()}
        {heightSpace()}

        {lastName()}
      </Flex>

      {heightSpace()}

      <Flex
        flexDir={{
          base: "column",
          md: "row",
        }}
        flex={1}
      >
        {email()}

        {/* These are the spaces between the text fields
        The Box with width will get neglected if the Box with flex is column
        And the Box with height will get neglected if the Box with flex is row */}
        {widthSpace()}
        {heightSpace()}

        {phone()}
      </Flex>

      {heightSpace()}

      <Box flex={1}>
        {organization()}

        {heightSpace()}

        {message()}
      </Box>

      <Box height="50px" />
    </Flex>
  );
};

const ContactUsInputDetailsSection = () => {
  return (
    <Flex flexDir="column">
      <Flex
        flexDir={{
          base: "column",
          lg: "row",
        }}
      >
        <_ContactDetails />
        <Box height="75px" />
        <_TextFields />
      </Flex>

      <Flex
        flexDir={{
          base: "column",
          lg: "row",
        }}
      >
        <_BookACall />

        <_SubmitButton />
        <Box height="50px" />
      </Flex>
    </Flex>
  );
};

export default ContactUsInputDetailsSection;
