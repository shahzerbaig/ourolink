import { TechStackEnum } from "src/domain/enums/tech_stack_enum";
import { TechStackLayoutProps } from "src/lib/features/Homepage/sections/TechnologyExpertiseSection";

export interface TechStackProps {
  src: string;
  type: TechStackEnum;
  typeString: string;
  slug: string;
  layoutProps: TechStackLayoutProps;
}
