import iconFirebase from "@assets/icon_firebase.png";
import iconAws from "@assets/icon_aws.png";
import { TechStackEnum } from "src/domain/enums/tech_stack_enum";
import { TechStackProps } from "./tech_stack_props";

export default [
  {
    src: iconFirebase,
    type: TechStackEnum.CLOUD,
    typeString: "Cloud",
    slug: "firebase",
    layoutProps: {
      src: iconFirebase,
      minWidth: "120px",
      padding: "1%",
      bottom: "15%",
      left: "15%",
      width: {
        base: "28%",
        lg: "33%",
        xl: "25%",
        "2xl": "21%",
      },
    },
  },

  {
    src: iconAws,
    type: TechStackEnum.CLOUD,
    typeString: "Cloud",
    slug: "aws",
    layoutProps: {
      src: iconAws,
      top: "15%",
      right: "15%",
      minWidth: "120px",
      padding: "7%",
      width: {
        base: "28%",
        lg: "33%",
        xl: "25%",
        "2xl": "21%",
      },
    },
  },
] as TechStackProps[];
