export default [
  {
    condition: "Cookies",
    conditionsContent: [
      {
        title: "Personal Information",
        description:
          "This Privacy Policy describes how [Your Company/Your Name]  collects, uses, and shares information about you and explains the choices you have concerning the information. By using our [website/application], you agree to the terms of this Privacy Policy.",
      },

      {
        title: "Non Personal Information",
        description:
          "This Privacy Policy describes how [Your Company/Your Name] collects, uses, and shares information about you and explains the choices you have concerning the information. By using our [website/application], you agree to the terms of this Privacy Policy.",
      },
    ],
  },

  {
    condition: "License",
    conditionsContent: [
      {
        title: "Personal Information",
        description:
          "This Privacy Policy describes how [Your Company/Your Name]  collects, uses, and shares information about you and explains the choices you have concerning the information. By using our [website/application], you agree to the terms of this Privacy Policy.",
      },

      {
        title: "Non Personal Information",
        description:
          "This Privacy Policy describes how [Your Company/Your Name]  collects, uses, and shares information about you and explains the choices you have concerning the information. By using our [website/application], you agree to the terms of this Privacy Policy.",
      },
    ],
  },
] as TermsAndConditionsProps[];

export interface TermsAndConditionsProps {
  condition: string;
  conditionsContent: TermsAndConditionsContent[];
}

export interface TermsAndConditionsContent {
  title: string;
  description: string;
}
