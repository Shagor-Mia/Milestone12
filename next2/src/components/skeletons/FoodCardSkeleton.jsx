export default function FoodCardSkeleton() {
  return (
    <div className="bg-white dark:bg-stone-900 rounded-2xl shadow-md overflow-hidden animate-pulse">
      {/* Image skeleton */}
      <div className="h-48 bg-stone-200 dark:bg-stone-800" />

      {/* Content skeleton */}
      <div className="p-4 flex flex-col gap-3">
        <div className="h-5 w-3/4 bg-stone-200 dark:bg-stone-800 rounded" />
        <div className="h-4 w-1/2 bg-stone-200 dark:bg-stone-800 rounded" />
        <div className="h-6 w-1/3 bg-stone-200 dark:bg-stone-800 rounded" />

        <div className="mt-4 flex gap-3">
          <div className="h-10 flex-1 bg-stone-200 dark:bg-stone-800 rounded-xl" />
          <div className="h-10 flex-1 bg-stone-200 dark:bg-stone-800 rounded-xl" />
        </div>
      </div>
    </div>
  );
}
