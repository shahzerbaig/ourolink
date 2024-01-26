import { FirebaseError } from "firebase/app";

class AppFirebaseError {
  constructor(firebaseError: FirebaseError) {
    this.firebaseError = firebaseError;
  }

  firebaseError: FirebaseError;

  transform() {}
}

export default AppFirebaseError;
