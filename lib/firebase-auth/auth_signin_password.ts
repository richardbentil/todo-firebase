import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase-app";

export const signin = (email: string, password: string) => 
signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log(user)
    return {user}
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    
    return {errorCode, errorMessage}
  });
