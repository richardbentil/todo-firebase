import { signOut } from "firebase/auth";
import { auth } from "../firebase-app";

export const signout = () =>
  signOut(auth)
    .then(() => {
      // Signed in
      window.location.href = "/";
    })
    .catch((error) => {});
