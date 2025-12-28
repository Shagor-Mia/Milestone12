export default function Loading() {
  return (
    <div className="max-w-5xl mx-auto p-6 grid grid-cols-1 md:grid-cols-2 gap-8 animate-pulse">
      {/* Image skeleton */}
      <div className="h-[350px] bg-stone-200 rounded-2xl" />

      {/* Content skeleton */}
      <div className="flex flex-col gap-4">
        <div className="h-8 w-3/4 bg-stone-200 rounded" />
        <div className="h-5 w-1/2 bg-stone-200 rounded" />
        <div className="h-5 w-1/3 bg-stone-200 rounded" />
        <div className="h-8 w-1/4 bg-stone-200 rounded" />

        <div className="flex gap-4 mt-4">
          <div className="h-12 w-32 bg-stone-200 rounded-xl" />
          <div className="h-12 w-32 bg-stone-200 rounded-xl" />
        </div>
      </div>
    </div>
  );
}
