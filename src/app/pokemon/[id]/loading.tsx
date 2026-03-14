export default function DetailLoading() {
  return (
    <div className="card-detail">
      {/* Gradient Header Skeleton */}
      <div className="bg-gradient-to-r from-purple-500 via-fuchsia-500 to-pink-500 px-4 py-6 text-center sm:px-6 sm:py-8">
        <div className="skeleton mx-auto h-7 w-40 bg-white/20 sm:h-8 sm:w-48 md:h-10 md:w-56" />
        <div className="skeleton mx-auto mt-2 h-4 w-12 bg-white/20 sm:h-5 sm:w-16" />
      </div>

      {/* Content */}
      <div className="grid grid-cols-1 gap-6 p-4 sm:p-6 md:grid-cols-2 md:gap-8 md:p-8">
        {/* Left column: Image, types, height/weight */}
        <div className="flex flex-col items-center">
          {/* Image skeleton */}
          <div className="skeleton h-64 w-64 rounded-full sm:h-72 sm:w-72 md:h-80 md:w-80" />

          {/* Types skeleton */}
          <div className="mt-4 flex gap-2 sm:mt-5">
            <div className="skeleton h-6 w-14 rounded-full sm:h-7 sm:w-16" />
            <div className="skeleton h-6 w-14 rounded-full sm:h-7 sm:w-16" />
          </div>

          {/* Height & Weight skeleton */}
          <div className="mt-4 flex gap-3 sm:mt-5 sm:gap-4">
            <div className="skeleton h-16 w-24 rounded-lg sm:h-18 sm:w-28 md:h-20 md:w-32" />
            <div className="skeleton h-16 w-24 rounded-lg sm:h-18 sm:w-28 md:h-20 md:w-32" />
          </div>
        </div>

        {/* Right column: Stats, Abilities, Base XP */}
        <div>
          {/* Base Stats skeleton */}
          <div className="skeleton mb-3 h-5 w-20 sm:mb-4 sm:h-6 sm:w-24" />
          <div className="space-y-3">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="space-y-1">
                <div className="flex items-center justify-between">
                  <div className="skeleton h-4 w-16 sm:w-20" />
                  <div className="skeleton h-4 w-6 sm:w-8" />
                </div>
                <div className="skeleton h-2.5 w-full rounded-full" />
              </div>
            ))}
          </div>

          {/* Abilities skeleton */}
          <div className="skeleton mt-5 mb-2 h-5 w-16 sm:mt-6 sm:mb-3 sm:h-6 sm:w-20" />
          <div className="flex flex-col gap-3">
            <div className="skeleton h-6 w-20 rounded-full sm:w-24" />
            <div className="skeleton h-6 w-28 rounded-full sm:w-32" />
          </div>

          {/* Base Experience skeleton */}
          <div className="skeleton mt-5 mb-2 h-5 w-28 sm:mt-6 sm:h-6 sm:w-32" />
          <div className="skeleton h-6 w-16 sm:h-7 sm:w-20" />
        </div>
      </div>
    </div>
  );
}
