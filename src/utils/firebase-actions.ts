// utils/firebase-actions.ts

import { db } from "@/utils/firebase";
import {
  doc,
  updateDoc,
  deleteDoc,
  addDoc,
  collection,
  getDocs,
  Timestamp,
  orderBy,
  query,
} from "firebase/firestore";

//function for creating a todo
export const addTodo = async (title: string) => {
  const todo = {
    title,
    createdAt: Timestamp.now(), // ✅ Firestore-compatible timestamp
  };

  await addDoc(collection(db, "todos"), todo);
};

// updating todo function
export const updateTodo = async (id: string, newTitle: string) => {
  const todoRef = doc(db, "todos", id);
  await updateDoc(todoRef, { title: newTitle });
};

// Deleting function for todo app
export const deleteTodo = async (id: string) => {
  const todoRef = doc(db, "todos", id);
  await deleteDoc(todoRef);
};

export const fetchTodos = async () => {
  const todosRef = collection(db, "todos");
  const todosQuery = query(todosRef, orderBy("createdAt", "desc")); // sort by createdAt descending
  const snapshot = await getDocs(todosQuery);

  return snapshot.docs.map((doc) => {
    const data = doc.data();
    return {
      id: doc.id,
      title: data.title || "",
      createdAt: data.createdAt?.toDate() || new Date(),
    };
  });
};
