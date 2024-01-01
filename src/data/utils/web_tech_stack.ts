import iconNextJs from "@assets/icon_nextjs.svg";
import iconReact from "@assets/react.svg";
import iconAws from "@assets/icon_aws.png";
import iconNodeJs from "@assets/icon_nodejs.svg";
import { TechStackEnum } from "src/domain/enums/tech_stack_enum";
import { TechStackProps } from "./tech_stack_props";

export default [
  {
    src: iconNextJs,
    type: TechStackEnum.WEB,
    typeString: "Web",
    slug: "nextjs",
    layoutProps: {
      src: iconNextJs,
      minWidth: "60px",
      padding: "3%",
      top: "15%",
      left: "20%",
      width: {
        base: "15%",
        lg: "20%",
        xl: "13%",
        "2xl": "11%",
      },
    },
  },

  {
    src: iconAws,
    type: TechStackEnum.WEB,
    typeString: "Web",
    slug: "aws",
    layoutProps: {
      src: iconAws,
      minWidth: "80px",
      padding: "4%",
      top: "45%",
      left: "10%",
      width: {
        base: "17%",
        lg: "22%",
        xl: "15%",
        "2xl": "13%",
      },
    },
  },

  {
    src: iconReact,
    type: TechStackEnum.WEB,
    typeString: "Web",
    slug: "react",
    layoutProps: {
      src: iconReact,
      minWidth: "90px",
      padding: "4%",
      top: "25%",
      right: "20%",
      width: {
        base: "23%",
        lg: "28%",
        xl: "20%",
        "2xl": "16%",
      },
    },
  },

  {
    src: iconNodeJs,
    type: TechStackEnum.WEB,
    typeString: "Web",
    slug: "nodejs",
    layoutProps: {
      src: iconNodeJs,
      minWidth: "110px",
      padding: "3%",
      bottom: "10%",
      right: "15%",
      width: {
        base: "20%",
        lg: "25%",
        xl: "17%",
        "2xl": "12%",
      },
    },
  },
] as TechStackProps[];
