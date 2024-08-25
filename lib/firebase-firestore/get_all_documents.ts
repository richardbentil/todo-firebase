import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase-app";

export const getAllTodos = async (col: string) => {
  const querySnapshot = await getDocs(collection(db, col));
  return querySnapshot;
};
