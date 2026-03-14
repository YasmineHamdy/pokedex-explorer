export const BASE_URL = "https://pokeapi.co/api/v2";

export const ITEMS_PER_PAGE = 20;

export const SPRITE_BASE_URL =
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon";

export const OFFICIAL_ARTWORK_URL = `${SPRITE_BASE_URL}/other/official-artwork`;

export const MAX_STAT = 255;

export const TYPE_COLORS: Record<string, string> = {
  normal: "bg-gray-400",
  fire: "bg-red-500",
  water: "bg-blue-500",
  electric: "bg-yellow-400",
  grass: "bg-green-500",
  ice: "bg-cyan-300",
  fighting: "bg-red-700",
  poison: "bg-purple-500",
  ground: "bg-amber-600",
  flying: "bg-indigo-300",
  psychic: "bg-pink-500",
  bug: "bg-lime-500",
  rock: "bg-amber-700",
  ghost: "bg-purple-700",
  dragon: "bg-indigo-600",
  dark: "bg-gray-700",
  steel: "bg-gray-400",
  fairy: "bg-pink-300",
};

export const STAT_NAMES: Record<string, string> = {
  hp: "HP",
  attack: "Attack",
  defense: "Defense",
  "special-attack": "Sp. Attack",
  "special-defense": "Sp. Defense",
  speed: "Speed",
};

// Cache durations (in seconds)
export const REVALIDATE_INTERVAL = 60 * 60 * 24; // 24 hours

// Number of Pokémon to pre-generate at build time
export const STATIC_POKEMON_COUNT = 151;

// React Query cache durations (in milliseconds)
export const QUERY_STALE_TIME = Infinity;
export const QUERY_GC_TIME = 1000 * 60 * 30; // 30 minutes
