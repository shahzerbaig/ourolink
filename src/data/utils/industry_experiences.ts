import iconAccountBal from "@assets/icon_account_balance.png";
import iconBriefCase from "@assets/icon_briefcase_medical.png";
import iconSchool from "@assets/icon_school.png";
import iconShipping from "@assets/icon_shipping.png";
import iconStethoscope from "@assets/icon_stethoscope.png";
import iconBarcode from "@assets/icon_barcode.png";
import iconChart from "@assets/icon_chart.png";
import iconDomain from "@assets/icon_domain.png";
import iconFestival from "@assets/icon_festival.png";
import { IndustryExperience } from "./industry_experience_props";

export default [
  {
    industry: "Financial Services",
    slug: "financial-services",
    src: iconAccountBal,
  },

  {
    industry: "Healthcare",
    slug: "healthcare",
    src: iconBriefCase,
  },

  {
    industry: "Retail and E-commerce Retail",
    slug: "retail-and-ecommerce",
    src: iconBarcode,
  },

  {
    industry: "Education",
    slug: "education",
    src: iconSchool,
  },

  {
    industry: "Logistic Tech",
    slug: "logistic-tech",
    src: iconChart,
  },

  {
    industry: "Hospitality",
    slug: "hospitality",
    src: iconStethoscope,
  },

  {
    industry: "Transportation",
    slug: "transportation",
    src: iconShipping,
  },

  {
    industry: "Real Estate",
    slug: "real-estate",
    src: iconDomain,
  },

  {
    industry: "Tourism",
    slug: "tourism",
    src: iconFestival,
  },
] as IndustryExperience[];
