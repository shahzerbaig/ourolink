import { Image, ResponsiveValue } from "@chakra-ui/react";
import { AppConstants } from "src/domain/constants/AppConstants";
import logo from "@assets/ourolink_logo.png";

interface Props {
  onClick?: () => void;
  height?: ResponsiveValue<number | (string & {})>;
}

const LogoImage = (props: Props) => {
  return (
    <Image
      onClick={() => {
        if (props.onClick) {
          props.onClick();
        }
      }}
      // TODO
      // cursor="pointer"
      src={logo}
      alt={AppConstants.LOGO_ALT_TEXT}
      height={props.height}
    ></Image>
  );
};

export default LogoImage;
