"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Edit3, Trash2 } from "lucide-react";
import type { Todo } from "../types/todo";

interface TodoItemProps {
  todo: Todo;
  onDelete: (id: string) => void;
  onEdit: (todo: Todo) => void;
}

export function TodoItem({ todo, onDelete, onEdit }: TodoItemProps) {
  return (
    <Card
      className={`w-full border-0 shadow-md hover:shadow-lg transition-all duration-200 rounded-2xl bg-white/90 backdrop-blur-sm
      }`}
    >
      <CardContent className="p-6">
        <div className="flex items-start gap-4">
          <div className="flex-1 min-w-0">
            <div className="flex items-center justify-between gap-3">
              <h3
                className={`font-semibold text-lg leading-tight text-slate-900`}
              >
                {todo.title}
              </h3>

              <div className="flex gap-2">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => onEdit(todo)}
                  className="h-10 w-10 p-0 text-indigo-500 hover:text-indigo-600 hover:bg-indigo-50 rounded-xl transition-all duration-200"
                >
                  <Edit3 className="size-5" />
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => onDelete(todo.id)}
                  className="h-10 w-10 p-0 text-red-500 hover:text-red-600 hover:bg-red-50 rounded-xl transition-all duration-200"
                >
                  <Trash2 className="size-5" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
