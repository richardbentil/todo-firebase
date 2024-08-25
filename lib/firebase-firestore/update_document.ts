import { updateDoc, serverTimestamp, doc } from "firebase/firestore";
import { db } from "../firebase-app";

export const updateDocument = async (col: string, id: string, data: any) => {
  const docRef = doc(db, col, id);

  // Update the timestamp field with the value from the server
  const response = await updateDoc(docRef, {
    timestamp: serverTimestamp(),
    ...data,
  });
  return response;
};
