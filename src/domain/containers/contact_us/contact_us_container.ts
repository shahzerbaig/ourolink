import ContactUsQueries from "@datafirebase/queries/contact_us_queries";

class ContactUsContainer {
  private static instance: ContactUsQueries;

  private constructor() {} // Private constructor to prevent external instantiation

  static getInstance(): ContactUsQueries {
    if (!ContactUsContainer.instance) {
      ContactUsContainer.instance = new ContactUsQueries();
    }

    return ContactUsContainer.instance;
  }
}

export default ContactUsContainer;
