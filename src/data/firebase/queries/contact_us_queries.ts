import { DocumentReference, doc, setDoc } from "firebase/firestore/lite";
import { contactUsRef } from "../collections/firebase_collections";
import ContactUs from "src/domain/model/contact_us";
import AppFirebaseError from "src/domain/error/app_firebase_error";
import { ErrorTypes } from "src/domain/enums/error_types";
import safeFirebaseApiCall from "@datafirebase/utils/safe_firebase_api_call";

class ContactUsQueries {
  async saveUserContactUs(
    contactUs: ContactUs
  ): Promise<void | AppFirebaseError> {
    const userDoc: DocumentReference = doc(contactUsRef);

    return safeFirebaseApiCall(setDoc(userDoc, contactUs.toObject()));
  }
}

export default ContactUsQueries;
