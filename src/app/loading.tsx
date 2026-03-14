import { PokemonGridSkeleton } from "@/components/pokemon-card-skeleton";

export default function HomeLoading() {
  return (
    <div className="bg-bg-pagination min-h-screen">
      <header className="py-8 text-center md:py-12">
        <div className="skeleton mx-auto h-10 w-48 rounded-lg" />
        <div className="skeleton mx-auto mt-3 h-4 w-72 rounded" />
        <div className="mt-4 flex justify-center gap-2">
          <div className="skeleton h-10 w-32 rounded-lg" />
          <div className="skeleton h-10 w-32 rounded-lg" />
        </div>
      </header>
      <div className="container-grid">
        <PokemonGridSkeleton count={20} />
      </div>
    </div>
  );
}
