import ContactUsContainer from "src/domain/containers/contact_us/contact_us_container";
import AppFirebaseError from "src/domain/error/app_firebase_error";
import ContactUs from "src/domain/model/contact_us";
import AnimationOnLoadProperties from "src/lib/utils/animation_on_load_properties";
import { ContactUsDetailsFormData } from "src/lib/validation_schemas/contact_us_schema";

class ContactUsViewModel {
  async saveUserContactUs(
    formData: ContactUsDetailsFormData
  ): Promise<void | AppFirebaseError> {
    const contactUsQueries = ContactUsContainer.getInstance();

    const getCurrentDate = new Date();

    // Create a new ContactUs object
    const contactUsData = new ContactUs({
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
      phone: formData.phone.toString(),
      organization: formData.organization,
      message: formData.message,
      timestamp: getCurrentDate,
      date: getCurrentDate,
    });

    // Send the object to firestore
    const response = await contactUsQueries.saveUserContactUs(contactUsData);

    return response;
  }

  public animationOnLoadProps = new AnimationOnLoadProperties();

  dispose(): void {
    this.animationOnLoadProps = new AnimationOnLoadProperties();
  }
}

export default ContactUsViewModel;
