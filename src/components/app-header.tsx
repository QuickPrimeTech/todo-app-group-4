import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { Sparkles } from "lucide-react";

export function AppHeader() {
  return (
    <Card className="border-0 shadow-lg bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-3xl">
      <CardHeader className="text-center py-6">
        <div className="flex items-center justify-center gap-3 mb-4">
          <div className="p-3 bg-white/20 rounded-2xl">
            <Sparkles className="w-8 h-8" />
          </div>
        </div>
        <CardTitle className="text-4xl font-bold mb-2">My Todo App</CardTitle>
        <p className="text-indigo-100 text-lg">
          Stay organized and accomplish your goals
        </p>
      </CardHeader>
    </Card>
  );
}
