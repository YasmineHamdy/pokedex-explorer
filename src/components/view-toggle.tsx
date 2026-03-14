import Link from "next/link";
import { ViewMode } from "@/types/pokemon";

interface ViewToggleProps {
  activeView: ViewMode;
}

export function ViewToggle({ activeView }: ViewToggleProps) {
  return (
    <nav aria-label="View mode" className="flex items-center gap-2">
      <Link
        href="/?view=pagination"
        aria-current={activeView === "pagination" ? "page" : undefined}
        className={`rounded-lg px-4 py-2 text-sm font-medium transition-colors duration-200 ${
          activeView === "pagination"
            ? "bg-gray-900 text-white"
            : "border border-gray-300 bg-white text-gray-700 hover:bg-gray-50"
        }`}
      >
        Page Controls
      </Link>
      <Link
        href="/?view=infinite"
        aria-current={activeView === "infinite" ? "page" : undefined}
        className={`rounded-lg px-4 py-2 text-sm font-medium transition-colors duration-200 ${
          activeView === "infinite"
            ? "bg-gray-900 text-white"
            : "border border-gray-300 bg-white text-gray-700 hover:bg-gray-50"
        }`}
      >
        Infinite Scroll
      </Link>
    </nav>
  );
}
