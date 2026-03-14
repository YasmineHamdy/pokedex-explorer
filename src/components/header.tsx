import { Zap } from "lucide-react";
import { ViewMode } from "@/types/pokemon";
import { ViewToggle } from "./view-toggle";

interface HeaderProps {
  activeView: ViewMode;
}

export function Header({ activeView }: HeaderProps) {
  const subtitle =
    activeView === "pagination"
      ? "Discover and explore Pokemon with page controls"
      : "Discover and explore Pokemon with infinite scroll";

  return (
    <header className="py-8 text-center md:py-12">
      <h1 className="flex items-center justify-center gap-2 text-3xl font-bold md:text-4xl">
        <Zap className="text-yellow-500" size={32} />
        Pokédex
      </h1>
      <p className="mt-2 text-sm text-gray-500 md:text-base">{subtitle}</p>
      <div className="mt-4 flex justify-center">
        <ViewToggle activeView={activeView} />
      </div>
    </header>
  );
}
