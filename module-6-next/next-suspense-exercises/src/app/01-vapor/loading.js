import React from "react";

import { range } from "@/utils";
import LibraryGameCardSkeleton from "@/components/LibraryGameCardSkeleton";

export const dynamic = "force-dynamic";

function VaporExercise() {
  return (
    <section className="max-width-wrapper">
      <header className="library-header">
        <h1>My games</h1>
        <p>Searching games...</p>
      </header>
      <div className="game-grid">
        {range(0, 12, 1).map((game, i) => (
          <LibraryGameCardSkeleton key={i} />
        ))}
      </div>
    </section>
  );
}

export default VaporExercise;
