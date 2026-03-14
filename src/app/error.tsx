"use client";

import { ErrorContent } from "@/components/error-content";

export default function HomeError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <ErrorContent title="Oops! Something went wrong" message={error.message} onRetry={reset} />
  );
}
