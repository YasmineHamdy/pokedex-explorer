import { fetchPokemonList } from "@/lib/api";
import { ITEMS_PER_PAGE } from "@/constants/config";
import { PokemonCard } from "./pokemon-card";
import { Pagination } from "./pagination";

interface PaginationGridProps {
  page: number;
}

export async function PaginationGrid({ page }: PaginationGridProps) {
  const offset = (page - 1) * ITEMS_PER_PAGE;
  const data = await fetchPokemonList(offset);

  if (!data.results || data.results.length === 0) {
    return (
      <div className="container-grid">
        <div className="flex flex-col items-center justify-center px-4 py-16">
          <div className="max-w-md rounded-xl bg-white p-8 text-center shadow-sm">
            <p className="mb-4 text-4xl">🔍</p>
            <h2 className="mb-2 text-xl font-bold text-gray-900">No Pokémon Found</h2>
            <p className="mb-6 text-gray-500">
              We couldn&apos;t find any Pokémon on this page. Please try again later.
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="container-grid">
      <div className="pokemon-grid">
        {data.results.map((pokemon) => (
          <PokemonCard
            key={pokemon.name}
            pokemon={pokemon}
            backHref={`/?view=pagination&page=${page}`}
          />
        ))}
      </div>

      <Pagination currentPage={page} totalCount={data.count} />
    </div>
  );
}
