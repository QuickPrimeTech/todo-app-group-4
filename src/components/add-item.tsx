"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Loader, Plus } from "lucide-react";

interface AddItemProps {
  onAddItem: (title: string) => Promise<void>;
}

export function AddItem({ onAddItem }: AddItemProps) {
  const [itemName, setItemName] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    if (itemName.trim() === "") return;

    setLoading(true);
    try {
      await onAddItem(itemName.trim());
      setItemName("");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card className="sticky top-0 z-50 border-0 shadow-lg rounded-3xl bg-white/80 backdrop-blur-sm">
      <CardContent className="p-2 md:p-8">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1">
            <Input
              type="text"
              placeholder="Enter an item to buy..."
              value={itemName}
              onChange={(e) => setItemName(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
              disabled={loading}
              className="h-14 text-sm md:text-lg rounded-2xl border-2 border-green-100 focus:border-green-400 focus:ring-4 focus:ring-green-100 bg-white/70"
            />
          </div>
          <Button
            onClick={handleSubmit}
            size="lg"
            disabled={itemName.trim() === "" || loading}
            className="h-14 px-8 bg-gradient-to-r from-green-500 to-lime-500 text-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-200 disabled:opacity-50"
          >
            {loading ? (
              <Loader className="animate-spin size-5" />
            ) : (
              <Plus className="size-5" />
            )}
            {loading ? "Adding..." : "Add Item"}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
