"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Edit3, Trash2 } from "lucide-react";
import type { Todo } from "@/types/todo";

interface ItemProps {
  todo: Todo;
  onDelete: (id: string) => void;
  onEdit: (todo: Todo) => void;
}

export function Item({ todo, onDelete, onEdit }: ItemProps) {
  return (
    <Card className="border-0 shadow-md hover:shadow-lg transition rounded-2xl bg-white/90 backdrop-blur-sm">
      <CardContent className="p-6">
        <div className="flex items-start justify-between">
          <h3 className="font-semibold text-lg text-slate-900">{todo.title}</h3>
          <div className="flex gap-2">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => onEdit(todo)}
              className="text-green-600 hover:bg-green-50 rounded-xl"
            >
              <Edit3 className="size-5" />
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => onDelete(todo.id)}
              className="text-red-500 hover:bg-red-50 rounded-xl"
            >
              <Trash2 className="size-5" />
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
