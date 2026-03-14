import { Zap, Ruler, Weight } from "lucide-react";
import { formatPokemonId, getPokemonSpriteUrl } from "@/lib/api";
import { PokemonDetail } from "@/types/pokemon";
import { PokemonImage } from "./pokemon-image";
import { TYPE_COLORS, STAT_NAMES, MAX_STAT } from "@/constants/config";

function StatBar({ name, value }: { name: string; value: number }) {
  const percentage = Math.min((value / MAX_STAT) * 100, 100);

  return (
    <div className="space-y-1">
      <div className="flex items-center justify-between">
        <span className="text-sm font-semibold text-gray-800">{STAT_NAMES[name] || name}</span>
        <span className="text-sm font-semibold text-gray-600">{value}</span>
      </div>
      <div className="h-2.5 overflow-hidden rounded-full bg-gray-200">
        <div
          className="stat-bar h-full rounded-full bg-gray-900"
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
}

interface PokemonDetailProps {
  pokemon: PokemonDetail;
}

export function PokemonDetailCard({ pokemon }: PokemonDetailProps) {
  const spriteUrl = getPokemonSpriteUrl(pokemon.id);
  const formattedId = formatPokemonId(pokemon.id);

  return (
    <div className="card-detail">
      {/* Gradient Header */}
      <div className="bg-gradient-to-r from-purple-500 via-fuchsia-500 to-pink-500 px-4 py-6 text-center text-white sm:px-6 sm:py-8">
        <h1 className="flex items-center justify-center gap-2 text-xl font-bold capitalize sm:text-2xl md:text-3xl">
          <Zap className="h-5 w-5 sm:h-6 sm:w-6" />
          {pokemon.name}
        </h1>
        <p className="mt-1 text-sm text-white/80 sm:text-base">{formattedId}</p>
      </div>

      {/* Content */}
      <div className="grid grid-cols-1 gap-6 p-4 sm:p-6 md:grid-cols-2 md:gap-8 md:p-8">
        {/* Left column: Image, types, height/weight */}
        <div className="flex flex-col items-center">
          <div className="flex h-64 w-64 items-center justify-center rounded-full bg-gray-100/50 sm:h-72 sm:w-72 md:h-80 md:w-80">
            <PokemonImage
              id={pokemon.id}
              name={pokemon.name}
              src={spriteUrl}
              width={300}
              height={300}
              sizes="(max-width: 640px) 256px, (max-width: 768px) 288px, 320px"
              quality={90}
              className="object-contain"
              priority
            />
          </div>

          {/* Types */}
          <div className="mt-4 flex gap-2 sm:mt-5">
            {pokemon.types.map(({ type }) => (
              <span
                key={type.name}
                className={`rounded-full px-4 py-1.5 text-xs font-semibold text-white capitalize sm:px-5 ${
                  TYPE_COLORS[type.name] || "bg-gray-500"
                }`}
              >
                {type.name}
              </span>
            ))}
          </div>

          {/* Height & Weight */}
          <div className="mt-4 flex gap-3 sm:mt-5 sm:gap-4">
            <div className="flex min-w-[100px] flex-col items-center rounded-lg bg-gray-100/60 px-4 py-2.5 sm:min-w-[120px] sm:px-6 sm:py-3 md:px-8">
              <div className="mb-1 flex items-center gap-1 text-xs text-gray-400 sm:gap-1.5">
                <Ruler size={14} className="text-gray-400" />
                <span>Height</span>
              </div>
              <span className="text-base font-bold whitespace-nowrap text-gray-900 sm:text-lg">
                {(pokemon.height / 10).toFixed(1)} m
              </span>
            </div>
            <div className="flex min-w-[100px] flex-col items-center rounded-lg bg-gray-100/60 px-4 py-2.5 sm:min-w-[120px] sm:px-6 sm:py-3 md:px-8">
              <div className="mb-1 flex items-center gap-1 text-xs text-gray-400 sm:gap-1.5">
                <Weight size={14} className="text-gray-400" />
                <span>Weight</span>
              </div>
              <span className="text-base font-bold whitespace-nowrap text-gray-900 sm:text-lg">
                {(pokemon.weight / 10).toFixed(1)} kg
              </span>
            </div>
          </div>
        </div>

        {/* Right column: Stats, Abilities, Base XP */}
        <div>
          {pokemon.stats && pokemon.stats.length > 0 ? (
            <>
              <h2 className="mb-3 text-base font-bold text-gray-900 sm:mb-4 sm:text-lg">
                Base Stats
              </h2>
              <div className="space-y-3">
                {pokemon.stats.map((stat) => (
                  <StatBar key={stat.stat.name} name={stat.stat.name} value={stat.base_stat} />
                ))}
              </div>
            </>
          ) : (
            <>
              <h2 className="mb-3 text-base font-bold text-gray-900 sm:mb-4 sm:text-lg">
                Base Stats
              </h2>
              <p className="text-sm text-gray-500 italic">No stats available</p>
            </>
          )}

          {pokemon.abilities && pokemon.abilities.length > 0 ? (
            <>
              <h2 className="mt-5 mb-2 text-base font-bold text-gray-900 sm:mt-6 sm:mb-3 sm:text-lg">
                Abilities
              </h2>
              <div className="space-y-2">
                {pokemon.abilities.filter(({ is_hidden }) => !is_hidden).length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {pokemon.abilities
                      .filter(({ is_hidden }) => !is_hidden)
                      .map(({ ability }) => (
                        <span
                          key={ability.name}
                          className="rounded-full border border-gray-300 px-3 py-1 text-xs text-gray-800 capitalize"
                        >
                          {ability.name.replaceAll("-", " ")}
                        </span>
                      ))}
                  </div>
                )}
                {pokemon.abilities.filter(({ is_hidden }) => is_hidden).length > 0 && (
                  <div className="flex flex-wrap items-center gap-2">
                    {pokemon.abilities
                      .filter(({ is_hidden }) => is_hidden)
                      .map(({ ability }) => (
                        <span
                          key={ability.name}
                          className="rounded-full bg-gray-100 px-3 py-1 text-xs text-gray-500 capitalize"
                        >
                          {ability.name.replaceAll("-", " ")}
                        </span>
                      ))}
                    <span className="text-xs text-gray-400">(Hidden)</span>
                  </div>
                )}
              </div>
            </>
          ) : (
            <>
              <h2 className="mt-5 mb-2 text-base font-bold text-gray-900 sm:mt-6 sm:mb-3 sm:text-lg">
                Abilities
              </h2>
              <p className="text-sm text-gray-500 italic">No abilities available</p>
            </>
          )}

          <h2 className="mt-5 mb-2 text-base font-bold text-gray-900 sm:mt-6 sm:text-lg">
            Base Experience
          </h2>
          {pokemon.base_experience != null && pokemon.base_experience > 0 ? (
            <p className="text-lg font-bold text-purple-600 sm:text-xl">
              {pokemon.base_experience} XP
            </p>
          ) : (
            <p className="text-sm text-gray-500 italic">Not available</p>
          )}
        </div>
      </div>
    </div>
  );
}
