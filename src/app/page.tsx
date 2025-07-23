"use client";

import { useState } from "react";
import { useTodos } from "@/hooks/use-todos";
import { AppHeader } from "@/components/app-header";
import { AddTodo } from "@/components/add-todo";
import { TodoList } from "@/components/todo-list";
import { EditTodoDialog } from "@/components/edit-todo-dialog";
import type { Todo } from "@/types/todo";
import { toast } from "sonner";

export default function TodoApp() {
  const { todos, addTodo, deleteTodo, updateTodo, loading } = useTodos();
  const [editingTodo, setEditingTodo] = useState<Todo | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [title, setTitle] = useState<string>("");

  const handleEditTodo = (todo: Todo) => {
    setEditingTodo(todo);
    setTitle(todo.title);
    setIsDialogOpen(true);
  };

  const handleSaveEdit = () => {
    if (editingTodo && title.trim() !== "") {
      updateTodo(editingTodo.id, {
        title,
      });
      setIsDialogOpen(false);
      setEditingTodo(null);
      toast.success("Successfully edited the task");
    }
  };

  const handleCloseDialog = () => {
    setIsDialogOpen(false);
    setEditingTodo(null);
  };
  const updateTask = (title: string) => {
    setTitle(title);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 p-6">
      <div className="max-w-4xl mx-auto space-y-8">
        <AppHeader />

        <AddTodo onAddTodo={addTodo} />

        <TodoList
          todos={todos}
          loading={loading}
          onDeleteTodo={deleteTodo}
          onEditTodo={handleEditTodo}
        />

        <EditTodoDialog
          isOpen={isDialogOpen}
          onClose={handleCloseDialog}
          editingTodo={editingTodo}
          title={title}
          updateTodo={updateTask}
          onSave={handleSaveEdit}
        />
      </div>
    </div>
  );
}
