"use client";

import { useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Separator } from "@/components/ui/separator";
import type { Todo } from "@/types/todo";

interface EditTodoDialogProps {
  isOpen: boolean;
  onClose: () => void;
  editingTodo: Todo | null;
  onSave: (title: string) => void;
  title: string;
  updateTodo: (title: string) => void;
}

export function EditTodoDialog({
  isOpen,
  onClose,
  title,
  editingTodo,
  updateTodo,
  onSave,
}: EditTodoDialogProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      onSave(title);
    }
  };

  if (!editingTodo) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-lg rounded-3xl border-0 shadow-2xl">
        <DialogHeader className="pb-6">
          <DialogTitle className="text-2xl font-bold text-indigo-900 text-center">
            Edit Task
          </DialogTitle>
        </DialogHeader>
        <div className="space-y-6">
          <div className="space-y-2">
            <Label
              htmlFor="edit-title"
              className="text-sm font-medium text-slate-700"
            >
              Task Title
            </Label>
            <Input
              id="edit-title"
              ref={inputRef}
              value={title}
              onKeyDown={handleKeyDown}
              onChange={(e) => updateTodo(e.target.value)}
              className="h-12 rounded-2xl border-2 border-indigo-100 focus:border-indigo-400 focus:ring-4 focus:ring-indigo-100"
              placeholder="Enter task title..."
            />
          </div>

          <Separator className="my-2" />

          <div className="flex gap-3 pt-2">
            <Button
              onClick={() => onSave(title)}
              className="flex-1 h-12 bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-200"
            >
              Save Changes
            </Button>
            <Button
              variant="outline"
              onClick={onClose}
              className="h-12 px-8 border-2 border-indigo-200 text-indigo-600 hover:bg-indigo-50 rounded-2xl transition-all duration-200 bg-transparent"
            >
              Cancel
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
