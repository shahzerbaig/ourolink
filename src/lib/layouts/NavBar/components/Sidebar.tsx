import {
  Image,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  VStack,
  HStack,
  Box,
  useTheme,
} from "@chakra-ui/react";
import iconClose from "@assets/icon_close.png";
import LogoImage from "src/lib/features/Homepage/components/LogoImage";
import TextButton from "src/lib/ui/components/TextButton";
import { useNavigate } from "react-router-dom";
import { RoutePaths } from "src/lib/navigation/route_paths";
import scrollToEndOfPage from "src/lib/utils/scroll_to_end_of_page";
import scrollToComponent from "src/lib/utils/scroll_to_component";
import { useHomepageViewModel } from "src/lib/providers/HomepageViewModelProvider";
import { CustomTheme } from "src/theme";

interface Props {
  onClose: () => void;
  isOpen: boolean;
}

const _Header = ({ onClose }: Props) => {
  const navigate = useNavigate();

  const onClickHomepage = () => {
    onClose();
    navigate(RoutePaths.HOMEPAGE);
  };

  return (
    <HStack justifyContent="space-between">
      {/* Logo Image */}
      <LogoImage
        onClick={onClickHomepage}
        height={{
          base: "25px",
          md: "35px",
        }}
      />

      {/* Close Button Image */}
      <Image onClick={onClose} width="25px" src={iconClose}></Image>
    </HStack>
  );
};

const SidebarContent = (props: Props) => {
  const navigate = useNavigate();
  const homepageVm = useHomepageViewModel();

  const onClickWork = () => {
    props.onClose();
    navigate(RoutePaths.WORK);
  };

  const onClickAboutUs = () => {
    props.onClose();
    scrollToEndOfPage();
  };

  const onClickServices = async () => {
    props.onClose();
    navigate(RoutePaths.HOMEPAGE);
    scrollToComponent(homepageVm.engineeringServicesRefObj, "center");
  };

  const onClickContactUs = () => {
    props.onClose();
    navigate(RoutePaths.CONTACT_US);
  };

  return (
    <VStack paddingLeft="20px" alignItems="start" justifyContent="space-around">
      <TextButton onClick={onClickWork}>Work</TextButton>
      <Box height="20px" />
      <TextButton onClick={onClickServices}>Services</TextButton>
      <Box height="20px" />
      <TextButton onClick={onClickAboutUs}>About us</TextButton>
      <Box height="20px" />
      <TextButton onClick={onClickContactUs}>Contact us</TextButton>
    </VStack>
  );
};

const Sidebar = ({ isOpen, onClose }: Props) => {
  const theme = useTheme<CustomTheme>();

  return (
    <Drawer
      isFullHeight={true}
      placement="right"
      isOpen={isOpen}
      onClose={onClose}
    >
      <DrawerOverlay width="100%" height="100%">
        <DrawerContent
          bg={theme.colors.primary}
          paddingX="20px"
          paddingTop="20px"
          paddingBottom="25px"
        >
          {/* Drawer HEading */}
          <_Header isOpen={isOpen} onClose={onClose} />

          <Box height="60px"></Box>

          {/* Drawer Content */}
          <SidebarContent isOpen={isOpen} onClose={onClose} />
        </DrawerContent>
      </DrawerOverlay>
    </Drawer>
  );
};

export default Sidebar;
