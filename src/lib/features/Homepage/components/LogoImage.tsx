import { Image, ResponsiveValue } from "@chakra-ui/react";
import { AppConstants } from "src/domain/constants/AppConstants";
import logo from "@assets/ourolink_logo.png";
import { RoutePaths } from "src/lib/navigation/route_paths";
import { Link } from "react-router-dom";

interface Props {
  onClick?: () => void;
  height?: ResponsiveValue<number | (string & {})>;
}

const LogoImage = (props: Props) => {
  return (
    <Link to={RoutePaths.HOMEPAGE}>
      <Image
        onClick={() => {
          if (props.onClick) {
            props.onClick();
          }
        }}
        cursor="pointer"
        src={logo}
        alt={AppConstants.LOGO_ALT_TEXT}
        height={props.height}
      />
    </Link>
  );
};

export default LogoImage;
