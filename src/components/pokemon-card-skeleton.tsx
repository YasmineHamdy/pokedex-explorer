export function PokemonCardSkeleton() {
  return (
    <div className="card p-4">
      <div className="skeleton aspect-square w-full rounded-lg" />
      <div className="mt-3 space-y-2">
        <div className="skeleton h-4 w-3/4" />
        <div className="skeleton h-3 w-1/2" />
      </div>
    </div>
  );
}

export function PokemonGridSkeleton({ count = 8 }: { count?: number }) {
  return (
    <div className="pokemon-grid">
      {Array.from({ length: count }).map((_, i) => (
        <PokemonCardSkeleton key={i} />
      ))}
    </div>
  );
}
