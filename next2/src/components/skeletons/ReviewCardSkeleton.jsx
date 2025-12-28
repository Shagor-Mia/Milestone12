export default function ReviewCardSkeleton() {
  return (
    <div className="bg-white dark:bg-stone-900 rounded-2xl shadow-md p-5 animate-pulse flex flex-col gap-4">
      {/* Header skeleton */}
      <div className="flex items-center gap-4">
        <div className="h-12 w-12 bg-stone-200 dark:bg-stone-800 rounded-full" />

        <div className="flex-1 space-y-2">
          <div className="h-4 w-1/3 bg-stone-200 dark:bg-stone-800 rounded" />
          <div className="h-3 w-1/4 bg-stone-200 dark:bg-stone-800 rounded" />
        </div>

        <div className="flex gap-1">
          {Array.from({ length: 5 }).map((_, i) => (
            <div
              key={i}
              className="h-4 w-4 bg-stone-200 dark:bg-stone-800 rounded"
            />
          ))}
        </div>
      </div>

      {/* Review text skeleton */}
      <div className="space-y-2">
        <div className="h-4 w-full bg-stone-200 dark:bg-stone-800 rounded" />
        <div className="h-4 w-full bg-stone-200 dark:bg-stone-800 rounded" />
        <div className="h-4 w-3/4 bg-stone-200 dark:bg-stone-800 rounded" />
      </div>

      {/* Footer skeleton */}
      <div className="flex items-center gap-3">
        <div className="h-8 w-20 bg-stone-200 dark:bg-stone-800 rounded-full" />
        <div className="h-4 w-12 bg-stone-200 dark:bg-stone-800 rounded" />
      </div>
    </div>
  );
}
