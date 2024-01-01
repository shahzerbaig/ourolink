import iconElectronJs from "@assets/icon_electronjs.svg";
import iconFlutter from "@assets/icon_flutter.svg";
import { TechStackEnum } from "src/domain/enums/tech_stack_enum";
import { TechStackProps } from "./tech_stack_props";

export default [
  {
    src: iconFlutter,
    type: TechStackEnum.DESKTOP,
    typeString: "Desktop",
    slug: "flutter",
    layoutProps: {
      src: iconFlutter,
      minWidth: "120px",
      padding: "3%",
      top: "15%",
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
    src: iconElectronJs,
    type: TechStackEnum.DESKTOP,
    typeString: "Desktop",
    slug: "electronjs",
    layoutProps: {
      src: iconElectronJs,
      bottom: "15%",
      right: "15%",
      minWidth: "120px",
      padding: "4%",
      width: {
        base: "28%",
        lg: "33%",
        xl: "25%",
        "2xl": "21%",
      },
    },
  },
] as TechStackProps[];
