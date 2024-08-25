import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../firebase-app";

export const signup = (name: string, email: string, password: string) =>
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed up
      const user: any = userCredential.user;

      return { user };
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      return { errorCode, errorMessage };
    });
