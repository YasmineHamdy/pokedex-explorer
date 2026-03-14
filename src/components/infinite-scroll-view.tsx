"use client";

import { useEffect, useRef, useCallback } from "react";
import { usePokemonInfinite } from "@/hooks/use-pokemon-infinite";
import { PokemonCard } from "./pokemon-card";
import { PokemonGridSkeleton } from "./pokemon-card-skeleton";
import { Loader2 } from "lucide-react";

export function InfiniteScrollView() {
  const { data, isLoading, isError, error, fetchNextPage, hasNextPage, isFetchingNextPage } =
    usePokemonInfinite();

  const observerRef = useRef<IntersectionObserver | null>(null);

  const lastElementRef = useCallback(
    (node: HTMLDivElement | null) => {
      if (isFetchingNextPage) return;
      if (observerRef.current) observerRef.current.disconnect();

      observerRef.current = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting && hasNextPage) {
            fetchNextPage();
          }
        },
        { threshold: 0.1 }
      );

      if (node) observerRef.current.observe(node);
    },
    [isFetchingNextPage, hasNextPage, fetchNextPage]
  );

  useEffect(() => {
    return () => {
      if (observerRef.current) observerRef.current.disconnect();
    };
  }, []);

  if (isLoading) {
    return (
      <div className="container-grid">
        <PokemonGridSkeleton count={20} />
      </div>
    );
  }

  if (isError) {
    throw error;
  }

  const allPokemon = data?.pages.flatMap((page) => page.results) ?? [];
  const totalShown = allPokemon.length;

  if (totalShown === 0) {
    return (
      <div className="container-grid">
        <div className="flex flex-col items-center justify-center px-4 py-16">
          <div className="max-w-md rounded-xl bg-white p-8 text-center shadow-sm">
            <p className="mb-4 text-4xl">🔍</p>
            <h2 className="mb-2 text-xl font-bold text-gray-900">No Pokémon Found</h2>
            <p className="mb-6 text-gray-500">
              We couldn&apos;t find any Pokémon. Please try again later.
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="container-grid">
      <div className="pokemon-grid">
        {allPokemon.map((pokemon) => (
          <PokemonCard key={pokemon.name} pokemon={pokemon} backHref="/?view=infinite" />
        ))}
      </div>

      <div ref={lastElementRef} className="h-4" />

      {isFetchingNextPage && (
        <div className="flex items-center justify-center gap-2 py-8 text-gray-500">
          <Loader2 className="text-accent-infinite animate-spin" size={20} />
          <span className="text-sm">Loading more Pokémon...</span>
        </div>
      )}

      <p className="pb-8 text-center text-sm text-gray-500">
        Showing {totalShown} Pokémon
        {!hasNextPage && " — You've reached the end!"}
      </p>
    </div>
  );
}
