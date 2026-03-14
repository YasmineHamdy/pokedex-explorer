"use client";

import { useInfiniteQuery } from "@tanstack/react-query";
import { fetchPokemonList } from "@/lib/api";
import { ITEMS_PER_PAGE } from "@/constants/config";

export function usePokemonInfinite() {
  return useInfiniteQuery({
    queryKey: ["pokemon-infinite"],
    queryFn: ({ pageParam = 0 }) => fetchPokemonList(pageParam),
    initialPageParam: 0,
    getNextPageParam: (lastPage, _allPages, lastPageParam) => {
      if (!lastPage.next) return undefined;
      return (lastPageParam as number) + ITEMS_PER_PAGE;
    },
  });
}
