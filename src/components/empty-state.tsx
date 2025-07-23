import type React from "react";
import { Card, CardContent } from "@/components/ui/card";

interface EmptyStateProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export function EmptyState({ icon, title, description }: EmptyStateProps) {
  return (
    <Card className="border-0 bg-gradient-to-br from-indigo-50 to-purple-50 rounded-3xl">
      <CardContent className="p-12 text-center">
        <div className="text-indigo-300 mb-6 flex justify-center">{icon}</div>
        <h3 className="text-xl font-semibold text-indigo-900 mb-2">{title}</h3>
        <p className="text-indigo-600">{description}</p>
      </CardContent>
    </Card>
  );
}
