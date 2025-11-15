export function LoadingSkeleton() {
  return (
    <div className="space-y-8 animate-pulse">
      {/* Stats Cards Skeleton */}
      <section className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="rounded-3xl border-2 border-slate-100 bg-white p-6 shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <div className="h-12 w-12 rounded-2xl bg-slate-200" />
            </div>
            <div className="space-y-3">
              <div className="h-3 w-20 bg-slate-200 rounded" />
              <div className="h-8 w-16 bg-slate-200 rounded" />
              <div className="h-2 w-24 bg-slate-200 rounded" />
            </div>
          </div>
        ))}
      </section>

      {/* Main Content Grid Skeleton */}
      <div className="grid lg:grid-cols-3 gap-6">
        {/* Left Column */}
        <div className="lg:col-span-2 space-y-6">
          {/* Chart Skeleton */}
          <div className="rounded-3xl border-2 border-slate-100 bg-white p-6 shadow-sm">
            <div className="flex items-center justify-between mb-6">
              <div className="space-y-2">
                <div className="h-3 w-32 bg-slate-200 rounded" />
                <div className="h-6 w-48 bg-slate-200 rounded" />
              </div>
              <div className="h-12 w-12 rounded-xl bg-slate-200" />
            </div>
            <div className="h-64 bg-slate-100 rounded-2xl" />
          </div>

          {/* Content Block Skeleton */}
          <div className="rounded-3xl border-2 border-slate-100 bg-white p-6 shadow-sm">
            <div className="h-6 w-40 bg-slate-200 rounded mb-4" />
            <div className="space-y-3">
              {[1, 2, 3].map((i) => (
                <div key={i} className="h-20 bg-slate-100 rounded-2xl" />
              ))}
            </div>
          </div>
        </div>

        {/* Right Sidebar Skeleton */}
        <div className="space-y-6">
          <div className="rounded-3xl border-2 border-slate-100 bg-white p-6 shadow-sm">
            <div className="h-6 w-32 bg-slate-200 rounded mb-4" />
            <div className="space-y-3">
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className="h-16 bg-slate-100 rounded-2xl" />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function StatsCardSkeleton() {
  return (
    <div className="rounded-3xl border-2 border-slate-100 bg-white p-6 shadow-sm animate-pulse">
      <div className="flex items-center justify-between mb-4">
        <div className="h-12 w-12 rounded-2xl bg-slate-200" />
      </div>
      <div className="space-y-3">
        <div className="h-3 w-20 bg-slate-200 rounded" />
        <div className="h-8 w-16 bg-slate-200 rounded" />
        <div className="h-2 w-24 bg-slate-200 rounded" />
      </div>
    </div>
  );
}

export function ChartSkeleton() {
  return (
    <div className="rounded-3xl border-2 border-slate-100 bg-white p-6 shadow-sm animate-pulse">
      <div className="flex items-center justify-between mb-6">
        <div className="space-y-2">
          <div className="h-3 w-32 bg-slate-200 rounded" />
          <div className="h-6 w-48 bg-slate-200 rounded" />
        </div>
        <div className="h-12 w-12 rounded-xl bg-slate-200" />
      </div>
      <div className="h-64 bg-slate-100 rounded-2xl" />
    </div>
  );
}

export function ListSkeleton({ items = 3 }: { items?: number }) {
  return (
    <div className="space-y-3 animate-pulse">
      {Array.from({ length: items }).map((_, i) => (
        <div key={i} className="h-24 bg-slate-100 rounded-2xl" />
      ))}
    </div>
  );
}

export function TableSkeleton({ rows = 5 }: { rows?: number }) {
  return (
    <div className="animate-pulse">
      <div className="space-y-3">
        {/* Header */}
        <div className="flex gap-4 pb-3 border-b border-slate-200">
          <div className="h-4 w-32 bg-slate-200 rounded" />
          <div className="h-4 w-24 bg-slate-200 rounded" />
          <div className="h-4 w-20 bg-slate-200 rounded" />
          <div className="h-4 w-40 bg-slate-200 rounded" />
          <div className="h-4 w-20 bg-slate-200 rounded ml-auto" />
        </div>
        {/* Rows */}
        {Array.from({ length: rows }).map((_, i) => (
          <div key={i} className="flex gap-4 py-3">
            <div className="h-5 w-32 bg-slate-100 rounded" />
            <div className="h-5 w-24 bg-slate-100 rounded" />
            <div className="h-5 w-20 bg-slate-100 rounded" />
            <div className="h-5 w-40 bg-slate-100 rounded" />
            <div className="flex gap-2 ml-auto">
              <div className="h-8 w-8 bg-slate-100 rounded-lg" />
              <div className="h-8 w-8 bg-slate-100 rounded-lg" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
