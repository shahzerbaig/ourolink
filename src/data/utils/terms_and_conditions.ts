export default [
  {
    condition: "Use of Service",
    conditionsContent: [
      {
        title: "Eligibility",
        description:
          "You must be at least 18 years old to use our service. Account Registration: To access certain features of our service, you may be required to create an account and provide accurate and complete information. Acceptable Use: You agree not to use the service for any unlawful purpose or in any way that interrupts, damages, or impairs the service.",
      },

      {
        title: "Understanding Intellectual Property Rights",
        description:
          "All intellectual property rights in the service and its content are owned by or licensed to us. Your use of the service does not grant you ownership of any intellectual property in the service or the content you access.",
      },

      {
        title: "Transparent Payment and Billing Policies",
        description:
          "Fees for our SaaS solutions are set forth in your service agreement. Payment terms shall be as per the agreed terms in the contract between you and our link.",
      },

      {
        title: "Termination of Service Access",
        description:
          "We may terminate or suspend access to our service immediately, without prior notice or liability, for any reason, including without limitation if you breach the Terms and Conditions.",
      },

      {
        title: "Limitation of Liability",
        description:
          "To the fullest extent permitted by law, our link shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, or any loss of data, use, goodwill, or other intangible losses.",
      },

      {
        title: "Changes to Terms and Conditions",
        description:
          "We reserve the right to modify or replace these Terms at any time. We will provide notice of any changes by posting the new Terms and Conditions on this page.",
      },

      {
        title: "Governing Law",
        description:
          "These Terms shall be governed and construed in accordance with the laws of The Republic of India, without regard to its conflict of law provisions.",
      },

      {
        title: "Contact Us",
        description:
          "For any questions about these Terms and Conditions, please contact us at +91 9167410616",
      },
    ],
  },

  // {
  //   condition: "License",
  //   conditionsContent: [
  //     {
  //       title: "Personal Information",
  //       description:
  //         "This Privacy Policy describes how [Your Company/Your Name]  collects, uses, and shares information about you and explains the choices you have concerning the information. By using our [website/application], you agree to the terms of this Privacy Policy.",
  //     },

  //     {
  //       title: "Non Personal Information",
  //       description:
  //         "This Privacy Policy describes how [Your Company/Your Name]  collects, uses, and shares information about you and explains the choices you have concerning the information. By using our [website/application], you agree to the terms of this Privacy Policy.",
  //     },
  //   ],
  // },
] as TermsAndConditionsProps[];

export interface TermsAndConditionsProps {
  condition: string;
  conditionsContent: TermsAndConditionsContent[];
}

export interface TermsAndConditionsContent {
  title: string;
  description: string;
}
