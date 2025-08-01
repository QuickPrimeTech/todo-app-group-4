"use client";
import { useState } from "react";
import { useTodos } from "@/hooks/use-todos";
import { AppHeader } from "@/components/app-header";
import { AddItem } from "@/components/add-item";
import { ItemList } from "@/components/item-list";
import { EditItemDialog } from "@/components/edit-item-dialog";
import type { Todo } from "@/types/todo";

export default function ShoppingListApp() {
  const { todos, addTodo, deleteTodo, updateTodo, loading } = useTodos();
  const [editingItem, setEditingItem] = useState<Todo | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [title, setTitle] = useState<string>("");

  const handleEditItem = (item: Todo) => {
    setEditingItem(item);
    setTitle(item.title);
    setIsDialogOpen(true);
  };

  const handleSaveEdit = () => {
    if (editingItem && title.trim() !== "") {
      updateTodo(editingItem.id, { title });
      setIsDialogOpen(false);
      setEditingItem(null);
    }
  };

  const handleCloseDialog = () => {
    setIsDialogOpen(false);
    setEditingItem(null);
  };

  const updateItem = (title: string) => {
    setTitle(title);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-lime-50 p-3 md:p-6">
      <div className="max-w-4xl mx-auto space-y-8">
        <AppHeader />

        <AddItem onAddItem={addTodo} />

        <ItemList
          todos={todos}
          loading={loading}
          onDeleteItem={deleteTodo}
          onEditItem={handleEditItem}
        />

        <EditItemDialog
          isOpen={isDialogOpen}
          onClose={handleCloseDialog}
          editingItem={editingItem}
          title={title}
          updateItem={updateItem}
          onSave={handleSaveEdit}
        />
      </div>
    </div>
  );
}
