// components/ui/todo-list.tsx

"use client";
import { Card } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";
import type { Todo } from "../types/todo";
import { TodoItem } from "./todo-item";
import { EmptyState } from "./empty-state";
import { TodoItemSkeleton } from "./todo-skeleton";

interface TodoListProps {
  todos: Todo[];
  onDeleteTodo: (id: string) => void;
  onEditTodo: (todo: Todo) => void;
  loading: boolean;
}

export function TodoList({
  todos,
  onDeleteTodo,
  onEditTodo,
  loading,
}: TodoListProps) {
  return (
    <Card className="border-0 shadow-lg rounded-3xl bg-white/30 backdrop-blur-sm overflow-hidden p-0 md:p-6">
      {loading ? (
        <div className="space-y-4">
          {[1, 2, 3].map((i) => (
            <TodoItemSkeleton key={i} />
          ))}
        </div>
      ) : todos.length === 0 ? (
        <EmptyState
          icon={<CheckCircle2 className="size-16" />}
          title="No tasks yet"
          description={"Add your first task above to get started!"}
        />
      ) : (
        <div className="w-full grid gap-4 grid-cols-1">
          {todos.map((todo) => (
            <TodoItem
              key={todo.id}
              todo={todo}
              onDelete={onDeleteTodo}
              onEdit={onEditTodo}
            />
          ))}
        </div>
      )}
    </Card>
  );
}
