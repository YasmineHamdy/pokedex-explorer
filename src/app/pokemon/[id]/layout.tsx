import { Suspense } from "react";
import { BackToList } from "@/components/back-to-list";

export default function PokemonDetailLayout({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="bg-bg-detail min-h-screen p-4 md:p-8"
      style={{ fontFamily: "var(--font-montserrat)" }}
    >
      <div className="mx-auto max-w-3xl">
        <Suspense>
          <BackToList />
        </Suspense>
        {children}
      </div>
    </div>
  );
}
