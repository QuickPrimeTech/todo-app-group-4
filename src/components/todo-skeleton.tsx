import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export function TodoItemSkeleton() {
  return (
    <Card className="w-full border-0 shadow-md rounded-2xl bg-white/90 backdrop-blur-sm">
      <CardContent className="p-6">
        <div className="flex items-start gap-4">
          <div className="flex-1 min-w-0">
            <div className="flex items-center justify-between gap-3">
              {/* Title skeleton */}
              <Skeleton className="h-5 w-2/3 rounded-md" />

              {/* Action buttons skeleton */}
              <div className="flex gap-2">
                <Skeleton className="h-10 w-10 rounded-xl" />
                <Skeleton className="h-10 w-10 rounded-xl" />
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
