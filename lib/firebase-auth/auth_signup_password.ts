import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, db } from "../firebase-app";
import {
  addDoc,
  collection,
  doc,
  serverTimestamp,
  Timestamp,
  updateDoc,
} from "firebase/firestore";

export const signup = (name: string, email: string, password: string) =>
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed up
      const user: any = userCredential.user;

      console.log(user);

      updateProfile(user, {
        displayName: name
      })

      return { user };
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      return { errorCode, errorMessage };
    });
