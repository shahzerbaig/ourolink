import { Box, Flex, Text, Image, CircularProgress } from "@chakra-ui/react";
import { useTheme } from "@chakra-ui/react";
import { CustomTheme } from "src/theme";
import iconPostOffice from "@assets/icon_post_office.png";
import iconSmartPhone from "@assets/icon_smartphone.png";
import AppMaterialButton from "src/lib/ui/components/AppMaterialButton";
import AppTextField from "src/lib/ui/components/AppTextField";
import { AppConstants } from "src/domain/constants/AppConstants";
import {
  FieldValues,
  useForm,
  UseFormRegister,
  FieldErrors,
} from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import contactUsSchema, {
  ContactUsDetailsFormData,
} from "src/lib/validation_schemas/contact_us_schema";
import { useContactUsViewModel } from "src/lib/providers/ContactUsViewModelProvider";
import { useState } from "react";
import AppFirebaseError from "src/domain/error/app_firebase_error";
import AppAlertDialog from "src/lib/ui/dialogs/AlertDialog";
import { useNavigate } from "react-router-dom";
import { RoutePaths } from "src/lib/navigation/route_paths";
import iconClear from "@assets/icon_clear.png";
import iconCheck from "@assets/icon_check.png";
import AnimateOnLoad from "@components/AnimateOnLoad";
import AnimationOnLoadProperties from "src/lib/utils/animation_on_load_properties";

// ---------------------------------------------------------------------------------------------

interface TextFieldProps {
  register: UseFormRegister<ContactUsDetailsFormData>;
  errors: FieldErrors<ContactUsDetailsFormData>;
}

const _SubmitButton = ({ isLoading }: { isLoading: boolean }) => {
  const contactUsVm = useContactUsViewModel();

  // The animation on load properties
  const animationOnLoadProps = contactUsVm.animationOnLoadProps;

  const _loader = (
    <CircularProgress isIndeterminate trackColor="" color="white" size="20px" />
  );

  const _text = <Text>Submit</Text>;

  const _buttonContent = isLoading ? _loader : _text;

  return (
    <Box bg="" flex={4}>
      <AnimateOnLoad
        delay={animationOnLoadProps.delay()}
        translateY={animationOnLoadProps.translateY}
      >
        <AppMaterialButton
          isDisabled={isLoading}
          width="100px"
          type="submit"
          onClick={() => null}
        >
          {_buttonContent}
        </AppMaterialButton>
      </AnimateOnLoad>
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
        textColor={theme.colors.accent}
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
      <Text textColor={theme.colors.accent} fontWeight={500} fontSize={14}>
        {title}
      </Text>
    </Flex>
  );
};

const _ContactDetails = () => {
  const contactUsVm = useContactUsViewModel();

  // The animation on load properties
  const animationOnLoadProps = contactUsVm.animationOnLoadProps;

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
      <AnimateOnLoad
        delay={animationOnLoadProps.delay()}
        translateY={animationOnLoadProps.translateY}
      >
        {email}
        <Box height="15px" />
        {phone}
      </AnimateOnLoad>
    </Flex>
  );
};

const _TextFields = (props: TextFieldProps) => {
  const contactUsVm = useContactUsViewModel();

  // The animation on load properties
  const animationOnLoadProps = contactUsVm.animationOnLoadProps;

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
        <AnimateOnLoad
          delay={animationOnLoadProps.delay()}
          translateY={animationOnLoadProps.translateY}
        >
          <AppTextField
            register={props.register("firstName")}
            error={props.errors.firstName}
            label="First Name"
            placeholder="First Name"
          />
        </AnimateOnLoad>
      </Box>
    );
  };

  const lastName = () => {
    return (
      <Box flex={1}>
        <AnimateOnLoad
          delay={animationOnLoadProps.delay()}
          translateY={animationOnLoadProps.translateY}
        >
          <AppTextField
            register={props.register("lastName")}
            error={props.errors.lastName}
            label="Last Name"
            placeholder="Last Name"
          />
        </AnimateOnLoad>
      </Box>
    );
  };

  const email = () => {
    return (
      <Box flex={1}>
        <AnimateOnLoad
          delay={animationOnLoadProps.delay()}
          translateY={animationOnLoadProps.translateY}
        >
          <AppTextField
            register={props.register("email")}
            error={props.errors.email}
            label="Email"
            placeholder="Email"
          />
        </AnimateOnLoad>
      </Box>
    );
  };

  const phone = () => {
    return (
      <Box flex={1}>
        <AnimateOnLoad
          delay={animationOnLoadProps.delay()}
          translateY={animationOnLoadProps.translateY}
        >
          <AppTextField
            register={props.register("phone", { valueAsNumber: true })}
            error={props.errors.phone}
            label="Phone"
            placeholder="Phone"
            type="number"
          />
        </AnimateOnLoad>
      </Box>
    );
  };

  const organization = () => {
    return (
      <AnimateOnLoad
        delay={animationOnLoadProps.delay()}
        translateY={animationOnLoadProps.translateY}
      >
        <AppTextField
          register={props.register("organization")}
          error={props.errors.organization}
          label="Organization / Institute"
          placeholder="Organization / Institute"
        />
      </AnimateOnLoad>
    );
  };

  const message = () => {
    return (
      <AnimateOnLoad
        delay={animationOnLoadProps.delay()}
        translateY={animationOnLoadProps.translateY}
      >
        <AppTextField
          register={props.register("message")}
          error={props.errors.message}
          label="How can we help you?"
          placeholder="Leave a message"
        />
      </AnimateOnLoad>
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
  const contactUsVm = useContactUsViewModel();

  const [isLoading, setIsLoading] = useState(false);

  const [isDialogOpen, setDialogOpen] = useState(false);
  const [isSuccessDialogOpen, setSuccessDialogOpen] = useState(false);

  const navigate = useNavigate();

  // The animation on load properties
  const animationOnLoadProps = contactUsVm.animationOnLoadProps;

  const handleOpenSuccessDialog = (value: boolean) => {
    // if the user closes the dialog, then navigate to the homepage
    if (value === false) {
      navigate(RoutePaths.HOMEPAGE);
    }

    setSuccessDialogOpen(value);
  };

  const handleOpenDialog = () => {
    setDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setDialogOpen(false);
  };

  const onSubmit = async (data: FieldValues) => {
    // TODO - Data will go to the backend
    const formData = data as ContactUsDetailsFormData;

    setIsLoading(true);

    // Call the SaveUserContactUs API
    const response = await contactUsVm.saveUserContactUs(formData);

    setIsLoading(false);

    // If the response is an instance of AppFirebaseError, then show the dialog
    // means if response === AppFirebaseError, then show the dialog
    if (response instanceof AppFirebaseError) {
      handleOpenDialog();
      return;
    }

    // TODO - Show a success dialog
    handleOpenSuccessDialog(true);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactUsDetailsFormData>({
    resolver: zodResolver(contactUsSchema),
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <AppAlertDialog
        alt="Clear Icon"
        src={iconClear}
        isOpen={isDialogOpen}
        onClose={handleCloseDialog}
        message="Failed to submit. Please try again later."
      />

      <AppAlertDialog
        alt="Check Icon"
        src={iconCheck}
        isOpen={isSuccessDialogOpen}
        onClose={() => handleOpenSuccessDialog(false)}
        message="Thank you for contacting us. We will get back to you soon."
      />
      <Flex flexDir="column">
        <Flex
          flexDir={{
            base: "column",
            lg: "row",
          }}
        >
          <_ContactDetails />
          <Box height="75px" />
          <_TextFields register={register} errors={errors} />
        </Flex>

        <Flex
          flexDir={{
            base: "column",
            lg: "row",
          }}
        >
          <_BookACall />

          <_SubmitButton isLoading={isLoading} />
          <Box height="50px" />
        </Flex>
      </Flex>
    </form>
  );
};

export default ContactUsInputDetailsSection;
