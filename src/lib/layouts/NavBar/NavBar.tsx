import { HStack, Hide, Image, Show, Box } from "@chakra-ui/react";
import hamburger_icon from "../../../assets/hamburger_icon.svg";
import TextButton from "../../ui/components/TextButton";
import AppMaterialButton from "../../ui/components/AppMaterialButton";
import AppDivider from "../../ui/components/AppDivider";
import { AppConstants } from "../../../domain/constants/AppConstants";
import "./NavBar.css";
import LogoImage from "src/lib/features/Homepage/components/LogoImage";
import { Link, useNavigate } from "react-router-dom";
import { RoutePaths } from "src/lib/navigation/route_paths";
import { useState } from "react";
import Sidebar from "./components/Sidebar";
import { useHomepageViewModel } from "src/lib/providers/HomepageViewModelProvider";
import scrollToComponent from "src/lib/utils/scroll_to_component";
import scrollToEndOfPage from "src/lib/utils/scroll_to_end_of_page";

interface HamburguerIconButtonProps {
  onClick: () => void;
}

const _ContactUsButton = () => {
  return (
    <Link to={RoutePaths.CONTACT_US}>
      <AppMaterialButton onClick={() => {}}>Contact us</AppMaterialButton>
    </Link>
  );
};

const _HamburgerIconButton = (props: HamburguerIconButtonProps) => {
  return (
    <Image
      onClick={props.onClick}
      cursor="pointer"
      className="hamburger-icon"
      alt={AppConstants.HAMBURGER_ALT_TEXT}
      src={hamburger_icon}
    />
  );
};

const _MobileSideComponents = () => {
  const [isSideBarOpen, setSideBar] = useState<boolean>(false);

  const openSideBar = () => {
    setSideBar(true);
  };

  const closeSideBar = () => {
    setSideBar(false);
  };

  return (
    <Hide above="md">
      <HStack>
        <Show above="sm">
          <_ContactUsButton />
          <Box width="20px"></Box>
        </Show>

        {/* Drawer only visible on Mobile devices */}
        <Sidebar
          isOpen={isSideBarOpen}
          onClose={() => {
            closeSideBar();
          }}
        />

        {/* Hamburger Icon to toggle Sidebar */}
        <_HamburgerIconButton
          onClick={() => {
            openSideBar();
          }}
        />
      </HStack>
    </Hide>
  );
};

const _DesktopSideComponents = () => {
  const homepageVm = useHomepageViewModel();
  const navigate = useNavigate();

  const onClickWork = () => {
    navigate(RoutePaths.WORK);
  };

  const onClickServices = () => {
    navigate(RoutePaths.HOMEPAGE);
    scrollToComponent(homepageVm.engineeringServicesRefObj, "center");
  };

  const onClickAboutUs = () => {
    scrollToEndOfPage();
  };

  return (
    <Show above="md">
      <HStack
        className="desktop-menu"
        width={{
          md: "425px",
          lg: "500px",
        }}
      >
        {/* Work Page */}

        <TextButton onClick={onClickWork}>Work</TextButton>

        {/* Services Page */}
        <TextButton onClick={onClickServices}>Services</TextButton>

        {/* About Us Page */}
        <TextButton onClick={onClickAboutUs}>About us</TextButton>

        <_ContactUsButton />
      </HStack>
    </Show>
  );
};

const NavBar = () => {
  return (
    <Box
      bg="rgba(255, 255, 255, 0.4)"
      width="100%"
      pos="fixed"
      // bg="white"
      zIndex={1}
      style={{
        WebkitBackdropFilter: "blur(5px)",
        backdropFilter: "blur(5px)",
      }}
    >
      <HStack className="navbar-container" justify="space-between">
        <LogoImage
          height={{
            base: "25px",
            md: "35px",
          }}
        />

        {/* Desktop Side Render Components */}
        <_DesktopSideComponents />

        {/* Mobile Side Render Components */}
        <_MobileSideComponents />
      </HStack>

      <AppDivider />
    </Box>
  );
};

export default NavBar;
