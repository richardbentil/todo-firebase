import { doc, deleteDoc } from "firebase/firestore";
import { db } from "../firebase-app";

export const deleteDocument = async (col: string, id: string) => {
  const response = await deleteDoc(doc(db, col, id));
  return response;
};
