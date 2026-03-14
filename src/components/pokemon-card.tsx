import Link from "next/link";
import { getPokemonId, getPokemonSpriteUrl, formatPokemonId } from "@/lib/api";
import { PokemonListItem } from "@/types/pokemon";
import { PokemonImage } from "./pokemon-image";

interface PokemonCardProps {
  pokemon: PokemonListItem;
  backHref?: string;
}

export function PokemonCard({ pokemon, backHref }: PokemonCardProps) {
  const id = getPokemonId(pokemon.url);
  const spriteUrl = getPokemonSpriteUrl(id);
  const formattedId = formatPokemonId(id);
  const href = backHref ? `/pokemon/${id}?from=${encodeURIComponent(backHref)}` : `/pokemon/${id}`;

  return (
    <Link href={href}>
      <div className="card group cursor-pointer p-4 transition-shadow duration-200 hover:shadow-md">
        <div className="relative flex aspect-square w-full items-center justify-center overflow-hidden rounded-lg bg-gray-50">
          <PokemonImage
            id={id}
            name={pokemon.name}
            src={spriteUrl}
            width={200}
            height={200}
            sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, 25vw"
            quality={60}
            className="object-contain p-2 transition-transform duration-200 group-hover:scale-110"
          />
        </div>
        <div className="mt-3 text-center">
          <h3 className="text-sm font-semibold capitalize md:text-base">{pokemon.name}</h3>
          <p className="text-xs text-gray-500 md:text-sm">{formattedId}</p>
        </div>
      </div>
    </Link>
  );
}
