// hooks/use-todos.ts

"use client";

import { useEffect, useState } from "react";
import type { Todo } from "@/types/todo";
import { toast } from "sonner";
import {
  addTodo as firebaseAdd,
  deleteTodo as firebaseDelete,
  updateTodo as firebaseUpdate,
  fetchTodos,
} from "@/utils/firebase-actions";

export function useTodos() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [loading, setLoading] = useState(true); // ✅ new state
  useEffect(() => {
    const loadTodos = async () => {
      setLoading(true);
      const todosFromFirebase = await fetchTodos();
      setTodos(todosFromFirebase as Todo[]);
      setLoading(false);
    };
    loadTodos();
  }, []);

  const addTodo = async (title: string) => {
    try {
      await firebaseAdd(title);
      const updated = await fetchTodos();
      setTodos(updated as Todo[]);
      toast.success("Task added successfully");
    } catch {
      toast.error("Failed to add task. Please check you internet");
    }
  };

  const deleteTodo = async (id: string) => {
    try {
      await firebaseDelete(id);
      setTodos((prev) => prev.filter((todo) => todo.id !== id));
      toast.success("Task deleted successfully");
    } catch {
      toast.error("Failed to delete task");
    }
  };

  const updateTodo = async (id: string, updates: Partial<Todo>) => {
    try {
      if (updates.title) {
        await firebaseUpdate(id, updates.title);
        const updated = await fetchTodos();
        setTodos(updated as Todo[]);
        toast.success("Task updated successfully");
      }
    } catch {
      toast.error("Failed to update task. Please check your internet");
    }
  };

  return {
    todos,
    loading,
    addTodo,
    deleteTodo,
    updateTodo,
  };
}
