"use client";

import { useState, useEffect } from "react";
import { Navbar } from "./navbar";
import { TemplatesGallery } from "./templates-gallery";

import { api } from "../../../convex/_generated/api";
import { usePaginatedQuery } from "convex/react";
import { DocumentsView, SortOption } from "./documents-view";
import { useSearchParam } from "@/hooks/use-search-param";

const Home = () => {
  const [search] = useSearchParam();

  // Load saved sort option from localStorage, default to newest
  const [sortOption, setSortOption] = useState<SortOption>(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("documents-sort-option");
      return (saved as SortOption) || "newest";
    }
    return "newest";
  });

  // Save sort option to localStorage when it changes
  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("documents-sort-option", sortOption);
    }
  }, [sortOption]);

  const { results, status, loadMore } = usePaginatedQuery(
    api.documents.get,
    { search, sortBy: sortOption },
    { initialNumItems: 6 }
  );

  return (
    <div className="flex min-h-screen flex-col">
      <div className="fixed top-0 left-0 right-0 z-10 h-16 bg-white p-4">
        <Navbar />
      </div>
      <div className="mt-16">
        <TemplatesGallery />
        <DocumentsView
          documents={results}
          loadMore={loadMore}
          status={status}
          search={search}
          sortOption={sortOption}
          onSortOptionChange={setSortOption}
        />
      </div>
    </div>
  );
};

export default Home;
