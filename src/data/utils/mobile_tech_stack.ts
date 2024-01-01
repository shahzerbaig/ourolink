import iconFlutter from "@assets/icon_flutter.svg";
import iconReactNative from "@assets/icon_react_native.png";
import iconFirebase from "@assets/icon_firebase.png";
import iconAwsAmplify from "@assets/icon_aws_amplify.svg";
import { TechStackEnum } from "src/domain/enums/tech_stack_enum";
import { TechStackProps } from "./tech_stack_props";

export default [
  {
    src: iconFlutter,
    type: TechStackEnum.MOBILE,
    typeString: "Mobile",
    slug: "flutter",
    layoutProps: {
      src: iconFlutter,
      minWidth: "90px",
      padding: "3%",
      top: "15%",
      left: "20%",
      width: {
        base: "23%",
        lg: "28%",
        xl: "20%",
        "2xl": "16%",
      },
    },
  },

  {
    src: iconReactNative,
    type: TechStackEnum.MOBILE,
    typeString: "Mobile",
    slug: "reactnative",
    layoutProps: {
      src: iconReactNative,
      minWidth: "60px",
      padding: "3%",
      top: "25%",
      right: "25%",
      width: {
        base: "15%",
        lg: "20%",
        xl: "13%",
        "2xl": "11%",
      },
    },
  },

  {
    src: iconFirebase,
    type: TechStackEnum.MOBILE,
    typeString: "Mobile",
    slug: "firebase",
    layoutProps: {
      src: iconFirebase,
      bottom: "10%",
      right: "15%",
      minWidth: "90px",
      padding: "1%",
      width: {
        base: "23%",
        lg: "28%",
        xl: "20%",
        "2xl": "16%",
      },
    },
  },

  {
    src: iconAwsAmplify,
    type: TechStackEnum.MOBILE,
    typeString: "Mobile",
    slug: "awsAmplify",
    layoutProps: {
      src: iconAwsAmplify,
      minWidth: "110px",
      padding: "3%",
      top: "55%",
      left: "15%",

      width: {
        base: "20%",
        lg: "25%",
        xl: "17%",
        "2xl": "12%",
      },
    },
  },
] as TechStackProps[];
