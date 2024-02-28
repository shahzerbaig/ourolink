export default [
  {
    policy: "Collection and Utilization of Information.",
    policyContent: [
      {
        title: "Personal Information",
        description:
          "To optimize our service delivery, we gather personal information such as names, email addresses, and other contact details. This facilitates effective service provision, efficient communication with clients, and robust client support.",
      },

      {
        title: "Usage Information",
        description:
          "Ourolink tracks how our services are engaged and utilized. This encompasses data like your device’s Internet Protocol (IP) address, browser specifics, service pages visited, along with the time and dates of such visits, complemented by additional diagnostic information.",
      },

      {
        title: "Cookies and Similar Technologies",
        description:
          "For activity tracking on our service, Ourolink employs cookies and comparable technologies to maintain and access certain information.",
      },

      {
        title: "Usage of Data",
        description:
          "The data we collect is used for several key purposes:\nTo maintain and enhance our service\nTo inform you of updates to our service\nTo enable interactive features within our service at your discretion To offer customer support\nTo conduct analysis and garner insights for service improvement To oversee the usage of our service\nTo identify, prevent, and tackle technical challenges",
      },

      {
        title: "Data Retention Policy",
        description:
          "Your Personal Data is held only as long as necessary for the objectives stated in this Privacy Policy.",
      },

      {
        title: "Security of Data",
        description:
          "Ourolink prioritizes the security of your data. To guard against unauthorized access, unlawful processing, accidental loss, destruction, or damage, we have implemented suitable technical and organizational measures.",
      },

      {
        title: "Sharing and Disclosure of Data",
        description:
          "Under certain circumstances, Ourolink might share personal data:To meet legal requirements. To safeguard and defend our rights or property. To prevent or investigate potential misconduct related to our service To ensure the personal safety of our service users and the public. To guard against legal liability",
      },

      {
        title: "Your Rights Regarding Data Protection",
        description:
          "You are entitled to access, modify, or erase the personal information Ourolink holds about you. You can usually alter your Personal Data directly within your account settings.",
      },

      {
        title: "Policy Updates",
        description:
          "Ourolink’s Privacy Policy may undergo updates periodically. We will notify you of any changes by publishing the revised policy on this webpage.",
      },

      {
        title: "Contact Information",
        description:
          "For any inquiries regarding this Privacy Policy, please reach out to us at +91 9167410616.",
      },
    ],
  },

  // {
  //   policy: "How we use your information",
  //   policyContent: [
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
] as PrivacyPolicyProps[];

export interface PrivacyPolicyProps {
  policy: string;
  policyContent: PrivacyPolicyContent[];
}

export interface PrivacyPolicyContent {
  title: string;
  description: string;
}
