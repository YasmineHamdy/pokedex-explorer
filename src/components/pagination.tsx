import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { ITEMS_PER_PAGE } from "@/constants/config";

interface PaginationProps {
  currentPage: number;
  totalCount: number;
}

function pageHref(page: number) {
  return `/?view=pagination&page=${page}`;
}

export function Pagination({ currentPage, totalCount }: PaginationProps) {
  const totalPages = Math.ceil(totalCount / ITEMS_PER_PAGE);
  const shownCount = Math.min(ITEMS_PER_PAGE, totalCount - (currentPage - 1) * ITEMS_PER_PAGE);

  function getPageNumbers(): (number | "ellipsis")[] {
    const pages: (number | "ellipsis")[] = [];

    if (totalPages <= 7) {
      for (let i = 1; i <= totalPages; i++) pages.push(i);
      return pages;
    }

    pages.push(1);

    if (currentPage > 3) {
      pages.push("ellipsis");
    }

    const start = Math.max(2, currentPage - 1);
    const end = Math.min(totalPages - 1, currentPage + 1);

    for (let i = start; i <= end; i++) {
      pages.push(i);
    }

    if (currentPage < totalPages - 2) {
      pages.push("ellipsis");
    }

    pages.push(totalPages);

    return pages;
  }

  return (
    <nav aria-label="Pagination" className="mt-8 flex flex-col items-center gap-3">
      <div className="flex items-center gap-1">
        {currentPage === 1 ? (
          <span
            aria-disabled="true"
            className="flex cursor-not-allowed items-center gap-1 rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm opacity-40"
          >
            <ChevronLeft size={16} />
            Previous
          </span>
        ) : (
          <Link
            href={pageHref(currentPage - 1)}
            className="flex items-center gap-1 rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm transition-colors hover:bg-gray-50"
          >
            <ChevronLeft size={16} />
            Previous
          </Link>
        )}

        {getPageNumbers().map((page, index) =>
          page === "ellipsis" ? (
            <span key={`ellipsis-${index}`} className="px-2 text-gray-400">
              ...
            </span>
          ) : (
            <Link
              key={page}
              href={pageHref(page)}
              aria-current={currentPage === page ? "page" : undefined}
              className={`flex h-9 w-9 items-center justify-center rounded-lg text-sm transition-colors ${
                currentPage === page
                  ? "bg-gray-900 text-white"
                  : "border border-gray-300 bg-white hover:bg-gray-50"
              }`}
            >
              {page}
            </Link>
          )
        )}

        {currentPage === totalPages ? (
          <span
            aria-disabled="true"
            className="flex cursor-not-allowed items-center gap-1 rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm opacity-40"
          >
            Next
            <ChevronRight size={16} />
          </span>
        ) : (
          <Link
            href={pageHref(currentPage + 1)}
            className="flex items-center gap-1 rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm transition-colors hover:bg-gray-50"
          >
            Next
            <ChevronRight size={16} />
          </Link>
        )}
      </div>

      <p className="text-sm text-gray-500">
        Page {currentPage} of {totalPages} ({shownCount} Pokémon shown)
      </p>
    </nav>
  );
}
