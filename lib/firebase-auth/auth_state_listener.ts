import { getAuth, onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase-app";


export const authState = () =>
  onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/auth.user
     // const uid = user?.uid;
      console.log(user)
      return {user}
      // ...
    } else {
      // User is signed out
      // ...
    }
  });
