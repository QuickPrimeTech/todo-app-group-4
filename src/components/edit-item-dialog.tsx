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

interface EditItemDialogProps {
  isOpen: boolean;
  onClose: () => void;
  editingItem: Todo | null;
  onSave: (title: string) => void;
  title: string;
  updateItem: (title: string) => void;
}

export function EditItemDialog({
  isOpen,
  onClose,
  title,
  editingItem,
  updateItem,
  onSave,
}: EditItemDialogProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  if (!editingItem) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-lg rounded-3xl border-0 shadow-2xl">
        <DialogHeader className="pb-6">
          <DialogTitle className="text-2xl font-bold text-green-900 text-center">
            Edit Item
          </DialogTitle>
        </DialogHeader>
        <div className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="edit-title" className="text-sm font-medium">
              Item Name
            </Label>
            <Input
              id="edit-title"
              ref={inputRef}
              value={title}
              onKeyDown={(e) => e.key === "Enter" && onSave(title)}
              onChange={(e) => updateItem(e.target.value)}
              className="h-12 rounded-2xl border-2 border-green-100 focus:border-green-400 focus:ring-4 focus:ring-green-100"
              placeholder="Enter item name..."
            />
          </div>

          <Separator className="my-2" />

          <div className="flex gap-3 pt-2">
            <Button
              variant="outline"
              onClick={onClose}
              className="h-12 px-8 border-2 border-green-200 text-green-600 hover:bg-green-50 rounded-2xl"
            >
              Cancel
            </Button>
            <Button
              onClick={() => onSave(title)}
              className="flex-1 h-12 bg-gradient-to-r from-green-500 to-lime-500 text-white rounded-2xl shadow-lg hover:shadow-xl"
            >
              Save Changes
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
