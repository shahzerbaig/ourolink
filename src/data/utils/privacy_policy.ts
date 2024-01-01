export default [
  {
    policy: "Collection and Utilization of Information",
    policyContent: [
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
    policy: "How we use your information",
    policyContent: [
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
] as PrivacyPolicyProps[];

export interface PrivacyPolicyProps {
  policy: string;
  policyContent: PrivacyPolicyContent[];
}

export interface PrivacyPolicyContent {
  title: string;
  description: string;
}
