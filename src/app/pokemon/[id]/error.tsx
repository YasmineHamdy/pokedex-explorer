"use client";

import { ErrorContent } from "@/components/error-content";

export default function DetailError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <ErrorContent
      title="Failed to load Pokémon"
      message={error.message || "Could not fetch Pokémon details. Please try again."}
      onRetry={reset}
    />
  );
}
