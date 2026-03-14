import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { fetchPokemonDetail } from "@/lib/api";
import { PokemonDetailCard } from "@/components/pokemon-detail";
import { STATIC_POKEMON_COUNT } from "@/constants/config";

interface PokemonDetailPageProps {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({ params }: PokemonDetailPageProps): Promise<Metadata> {
  const { id } = await params;
  const pokemon = await fetchPokemonDetail(id);

  if (!pokemon) {
    return { title: "Pokémon Not Found" };
  }

  const name = pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1);
  const types = pokemon.types.map((t) => t.type.name).join(", ");

  return {
    title: `${name} #${String(pokemon.id).padStart(3, "0")} — Pokédex`,
    description: `View ${name}'s stats, abilities, and details. Type: ${types}. Height: ${(pokemon.height / 10).toFixed(1)}m, Weight: ${(pokemon.weight / 10).toFixed(1)}kg.`,
  };
}

export async function generateStaticParams() {
  return Array.from({ length: STATIC_POKEMON_COUNT }, (_, i) => ({
    id: String(i + 1),
  }));
}

export default async function PokemonDetailPage({ params }: PokemonDetailPageProps) {
  const { id } = await params;
  const pokemon = await fetchPokemonDetail(id);

  if (!pokemon) {
    return notFound();
  }

  return <PokemonDetailCard pokemon={pokemon} />;
}
