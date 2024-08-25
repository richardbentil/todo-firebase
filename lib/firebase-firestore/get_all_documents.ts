import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../firebase-app";

export const getAllTodos = async (userId: string) => {
  try {
    // use the user id as filter
    const q = query(collection(db, "todos"), where("userId", "==", userId));

    // get the documents
    const querySnapshot = await getDocs(q);
    console.log(querySnapshot);
    // extract data by mapping
    const todos = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    console.log(todos);

    return todos;
  } catch (error) {
    console.error("Error retrieving todos: ", error);
    throw error;
  }
};
