"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { ArrowLeft } from "lucide-react";

export function BackToList() {
  const searchParams = useSearchParams();
  const from = searchParams.get("from");
  const href = from && from.startsWith("/") ? from : "/";

  return (
    <Link
      href={href}
      className="mb-6 inline-flex items-center gap-2 rounded-lg bg-white px-4 py-2 text-sm font-semibold text-gray-800 shadow-sm transition-all hover:text-purple-600 hover:shadow"
    >
      <ArrowLeft size={16} />
      Back to List
    </Link>
  );
}
