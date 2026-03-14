import { ViewMode } from "@/types/pokemon";
import { Header } from "@/components/header";
import { PaginationGrid } from "@/components/pagination-grid";
import { InfiniteScrollView } from "@/components/infinite-scroll-view";

interface HomeProps {
  searchParams: Promise<{ view?: string; page?: string }>;
}

export default async function Home({ searchParams }: HomeProps) {
  const { view, page } = await searchParams;
  const viewMode: ViewMode = view === "infinite" ? "infinite" : "pagination";
  const currentPage = Math.max(1, parseInt(page || "1", 10) || 1);

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${
        viewMode === "pagination" ? "bg-bg-pagination" : "bg-bg-infinite"
      }`}
    >
      <Header activeView={viewMode} />
      <main id="main-content" className="pb-12">
        {viewMode === "pagination" ? <PaginationGrid page={currentPage} /> : <InfiniteScrollView />}
      </main>
    </div>
  );
}
