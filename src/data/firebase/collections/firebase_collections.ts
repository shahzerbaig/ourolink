import { collection } from "firebase/firestore/lite";
import { firestore } from "../utils/firebase_config";
import { AppConstants } from "src/domain/constants/AppConstants";

export const contactUsRef = collection(
  firestore,
  AppConstants.CONTACT_US_COLLECTION
);
