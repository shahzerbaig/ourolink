import { HStack, Hide, Image, Show } from "@chakra-ui/react";
import hamburger_icon from "../../../assets/hamburger_icon.svg";
import TextButton from "../../ui/components/TextButton";
import AppMaterialButton from "../../ui/components/AppMaterialButton";
import AppDivider from "../../ui/components/AppDivider";
import { AppConstants } from "../../../domain/constants/AppConstants";
import "./NavBar.css";
import LogoImage from "src/lib/features/Homepage/components/LogoImage";

const NavBar = () => {
  return (
    <>
      <HStack className="navbar-container" justify="space-between">
        <LogoImage
          height={{
            base: "25px",
            md: "35px",
          }}
        />

        {/* TODO */}
        {/* <Show above="md">
          <HStack
            className="desktop-menu"
            width={{
              md: "425px",
              lg: "500px",
            }}
          >
            <TextButton onClick={() => {}}>Work</TextButton>
            <TextButton onClick={() => {}}>Services</TextButton>
            <TextButton onClick={() => {}}>About us</TextButton>
            <AppMaterialButton onClick={() => {}}>Contact us</AppMaterialButton>
          </HStack>
        </Show>

        <Hide above="md">
          <Image
            className="hamburger-icon"
            alt={AppConstants.HAMBURGER_ALT_TEXT}
            src={hamburger_icon}
          ></Image>
        </Hide> */}
      </HStack>

      <AppDivider />
    </>
  );
};

export default NavBar;
