import { FirebaseError } from "firebase/app";
import AppFirebaseError from "src/domain/error/app_firebase_error";

const safeFirebaseApiCall = async <T>(
  promise: Promise<T>
): Promise<T | AppFirebaseError> => {
  try {
    const result = await promise;
    return result;
  } catch (error) {
    if (error instanceof FirebaseError) {
      // Handle FirebaseError

      return new AppFirebaseError(error);
    }

    throw "Unhandled Exception. Please contact the developer.";
  }
};

export default safeFirebaseApiCall;
