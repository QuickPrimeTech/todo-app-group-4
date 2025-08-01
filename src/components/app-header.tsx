import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { ShoppingCart } from "lucide-react";

export function AppHeader() {
  return (
    <Card className="border-0 shadow-lg bg-gradient-to-r from-green-500 to-lime-500 text-white rounded-3xl">
      <CardHeader className="text-center py-6">
        <div className="flex items-center justify-center gap-3 mb-4">
          <div className="p-3 bg-white/20 rounded-2xl">
            <ShoppingCart className="w-8 h-8" />
          </div>
        </div>
        <CardTitle className="text-4xl font-bold mb-2">Shopping List</CardTitle>
        <p className="text-green-100 text-lg">
          Plan your purchases and track your items
        </p>
      </CardHeader>
    </Card>
  );
}
