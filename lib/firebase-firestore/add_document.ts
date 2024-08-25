import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase-app";

export const addDocument = async (data: any, col: string) => {
  // Add a new document with a generated id.
  const docRef = await addDoc(collection(db, col), data);
  return { id: docRef.id };
  //console.log("Document written with ID: ", docRef.id);
};
