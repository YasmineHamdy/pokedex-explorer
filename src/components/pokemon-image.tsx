"use client";

import { useState } from "react";
import Image from "next/image";
import { SPRITE_BASE_URL } from "@/constants/config";

const BLUR_DATA_URL =
  "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBmaWxsPSIjZjNmNGY2IiByeD0iOCIvPjwvc3ZnPg==";

interface PokemonImageProps {
  id: number;
  name: string;
  src: string;
  width: number;
  height: number;
  className?: string;
  priority?: boolean;
  sizes?: string;
  quality?: number;
}

export function PokemonImage({
  id,
  name,
  src,
  width,
  height,
  className,
  priority = false,
  sizes,
  quality,
}: PokemonImageProps) {
  const [imgSrc, setImgSrc] = useState(src);
  const [hasError, setHasError] = useState(false);

  const handleError = () => {
    if (imgSrc !== `${SPRITE_BASE_URL}/${id}.png`) {
      setImgSrc(`${SPRITE_BASE_URL}/${id}.png`);
    } else {
      setHasError(true);
    }
  };

  if (hasError) {
    return (
      <div className="flex items-center justify-center text-gray-300" style={{ width, height }}>
        <span className="text-4xl">?</span>
      </div>
    );
  }

  return (
    <Image
      src={imgSrc}
      alt={name}
      width={width}
      height={height}
      className={className}
      priority={priority}
      loading={priority ? undefined : "lazy"}
      sizes={sizes}
      quality={quality}
      placeholder="blur"
      blurDataURL={BLUR_DATA_URL}
      onError={handleError}
    />
  );
}
