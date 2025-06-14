"use client";

import { Navbar } from "./navbar";
import { TemplatesGallery } from "./templates-gallery";

import { api } from "../../../convex/_generated/api";
import { usePaginatedQuery } from "convex/react";
import { DocumentsView } from "./documents-view";
import { useSearchParam } from "@/hooks/use-search-param";

const Home = () => {
  const [search] = useSearchParam();
  const { results, status, loadMore } = usePaginatedQuery(
    api.documents.get,
    { search },
    { initialNumItems: 5 }
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
        />
      </div>
    </div>
  );
};

export default Home;
