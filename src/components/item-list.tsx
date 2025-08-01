"use client";
import { Card } from "@/components/ui/card";
import { ShoppingBag } from "lucide-react";
import type { Todo } from "@/types/todo";
import { Item } from "./item";
import { EmptyState } from "./empty-state";
import { TodoItemSkeleton } from "./todo-skeleton";

interface ItemListProps {
  todos: Todo[];
  onDeleteItem: (id: string) => void;
  onEditItem: (todo: Todo) => void;
  loading: boolean;
}

export function ItemList({
  todos,
  onDeleteItem,
  onEditItem,
  loading,
}: ItemListProps) {
  return (
    <Card className="border-0 shadow-lg rounded-3xl bg-white/30 backdrop-blur-sm p-6">
      {loading ? (
        <div className="space-y-4">
          {[1, 2, 3].map((i) => (
            <TodoItemSkeleton key={i} />
          ))}
        </div>
      ) : todos.length === 0 ? (
        <EmptyState
          icon={<ShoppingBag className="size-16" />}
          title="Your shopping list is empty"
          description="Add your first item above to get started!"
        />
      ) : (
        <div className="grid gap-4">
          {todos.map((item) => (
            <Item
              key={item.id}
              todo={item}
              onDelete={onDeleteItem}
              onEdit={onEditItem}
            />
          ))}
        </div>
      )}
    </Card>
  );
}
