import { PokemonDetail, PokemonListResponse } from "@/types/pokemon";
import {
  BASE_URL,
  ITEMS_PER_PAGE,
  OFFICIAL_ARTWORK_URL,
  REVALIDATE_INTERVAL,
} from "@/constants/config";

export async function fetchPokemonList(
  offset: number,
  limit: number = ITEMS_PER_PAGE
): Promise<PokemonListResponse> {
  const response = await fetch(`${BASE_URL}/pokemon?limit=${limit}&offset=${offset}`, {
    next: { revalidate: REVALIDATE_INTERVAL },
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch Pokémon list: ${response.statusText}`);
  }

  return response.json();
}

export async function fetchPokemonDetail(idOrName: string | number): Promise<PokemonDetail | null> {
  const response = await fetch(`${BASE_URL}/pokemon/${idOrName}`, {
    next: { revalidate: REVALIDATE_INTERVAL },
  });

  if (response.status === 404) {
    return null;
  }

  if (!response.ok) {
    throw new Error(`Failed to fetch Pokémon details: ${response.statusText}`);
  }

  return response.json();
}

export function getPokemonId(url: string): number {
  const segments = url.replace(/\/$/, "").split("/");
  return parseInt(segments[segments.length - 1], 10);
}

export function getPokemonSpriteUrl(id: number): string {
  return `${OFFICIAL_ARTWORK_URL}/${id}.png`;
}

export function formatPokemonId(id: number): string {
  return `#${String(id).padStart(3, "0")}`;
}
