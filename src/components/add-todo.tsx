// components/ui/add-todo.tsx

"use client";

import type React from "react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Loader, Plus } from "lucide-react";

interface AddTodoProps {
  onAddTodo: (title: string) => Promise<void>;
}

export function AddTodo({ onAddTodo }: AddTodoProps) {
  const [newTodo, setNewTodo] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    if (newTodo.trim() === "") return;

    setLoading(true);
    try {
      await onAddTodo(newTodo.trim()); // uses context-based logic
      setNewTodo("");
    } finally {
      setLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSubmit();
    }
  };

  return (
    <Card className="sticky top-0 z-50 border-0 shadow-lg rounded-3xl bg-white/80 backdrop-blur-sm">
      <CardContent className="p-2 md:p-8">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1">
            <Input
              type="text"
              placeholder="What would you like to accomplish today?"
              value={newTodo}
              onChange={(e) => setNewTodo(e.target.value)}
              onKeyDown={handleKeyDown}
              disabled={loading}
              className="h-14 text-sm md:text-lg rounded-2xl border-2 border-indigo-100 focus:border-indigo-400 focus:ring-4 focus:ring-indigo-100 bg-white/70"
            />
          </div>
          <Button
            onClick={handleSubmit}
            size="lg"
            disabled={newTodo.trim() === "" || loading}
            className="h-14 px-8 bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
          >
            {loading ? (
              <Loader className="animate-spin rounded-full size-5" />
            ) : (
              <Plus className="size-5" />
            )}
            {loading ? "Adding Task..." : "Add Task"}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
