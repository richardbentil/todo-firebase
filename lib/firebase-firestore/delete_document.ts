import { doc, deleteDoc } from "firebase/firestore";
import { db } from "../firebase-app";

export const deleteDocument = async (id: string) => {
  const response = await deleteDoc(doc(db, "todos", id));
  console.log("Document successfully deleted!", response);
  return response;
};
