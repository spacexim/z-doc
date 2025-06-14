"use client";

import { useState, useEffect } from "react";
import { PaginationStatus, useQuery } from "convex/react";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Doc } from "../../../convex/_generated/dataModel";
import { DocumentRow } from "./docuement-row";
import { DocumentCard } from "./document-card";
import { ViewToggle, ViewMode } from "./view-toggle";
import { Button } from "@/components/ui/button";
import { api } from "../../../convex/_generated/api";

interface DocumentsViewProps {
  documents: Doc<"documents">[] | undefined;
  loadMore: (numItems: number) => void;
  status: PaginationStatus;
  search?: string;
}

export const DocumentsView = ({
  documents,
  loadMore,
  status,
  search,
}: DocumentsViewProps) => {
  // Get total document count
  const totalCount = useQuery(api.documents.getCount, { search });

  // Load saved view mode from localStorage, default to list
  const [viewMode, setViewMode] = useState<ViewMode>(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("documents-view-mode");
      return (saved as ViewMode) || "list";
    }
    return "list";
  });

  // Save view mode to localStorage when it changes
  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("documents-view-mode", viewMode);
    }
  }, [viewMode]);

  const renderLoadingState = () => {
    if (viewMode === "list") {
      return (
        <div className="w-full">
          <Table className="w-full">
            <TableHeader>
              <TableRow className="hover:bg-transparent border-none">
                <TableHead>Name</TableHead>
                <TableHead>&nbsp;</TableHead>
                <TableHead className="hidden md:table-cell">Shared</TableHead>
                <TableHead className="hidden md:table-cell">
                  Created at
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {[...Array(3)].map((_, i) => (
                <TableRow key={i} className="hover:bg-transparent">
                  <TableCell className="w-[50px]">
                    <div className="size-6 bg-gray-200 rounded animate-pulse" />
                  </TableCell>
                  <TableCell>
                    <div className="h-4 bg-gray-200 rounded w-48 animate-pulse" />
                  </TableCell>
                  <TableCell className="hidden md:table-cell">
                    <div className="h-4 bg-gray-200 rounded w-24 animate-pulse" />
                  </TableCell>
                  <TableCell className="hidden md:table-cell">
                    <div className="h-4 bg-gray-200 rounded w-20 animate-pulse" />
                  </TableCell>
                  <TableCell>
                    <div className="h-4 bg-gray-200 rounded w-6 animate-pulse ml-auto" />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      );
    } else {
      return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-6">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="border rounded-lg overflow-hidden animate-pulse"
            >
              <div className="aspect-[3/4] bg-gray-200" />
              <div className="p-4 space-y-2">
                <div className="h-4 bg-gray-200 rounded w-3/4" />
                <div className="h-3 bg-gray-200 rounded w-1/2" />
                <div className="h-3 bg-gray-200 rounded w-2/3" />
              </div>
            </div>
          ))}
        </div>
      );
    }
  };
  const renderListView = () => (
    <div className="w-full">
      <Table className="w-full">
        <TableHeader>
          <TableRow className="hover:bg-transparent border-none">
            <TableHead>名称</TableHead>
            <TableHead>&nbsp;</TableHead>
            <TableHead className="hidden md:table-cell">共享</TableHead>
            <TableHead className="hidden md:table-cell">创建时间</TableHead>
          </TableRow>
        </TableHeader>
        {documents?.length === 0 ? (
          <TableBody>
            <TableRow className="hover:bg-transparent">
              <TableCell
                colSpan={4}
                className="h-24 text-center text-muted-foreground"
              >
                未找到文档
              </TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableBody>
        ) : (
          <TableBody>
            {documents?.map((document) => (
              <DocumentRow key={document._id} document={document} />
            ))}
          </TableBody>
        )}
      </Table>
    </div>
  );

  const renderGridView = () => (
    <div className="w-full">
      {documents?.length === 0 ? (
        <div className="text-center text-muted-foreground py-12">
          <div className="mb-4">
            <svg
              className="mx-auto size-12 text-gray-300"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M6 2c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 2 2h8l6-6V8l-6-6H6zm7 7V3.5L18.5 9H13z" />
            </svg>
          </div>
          <p className="text-lg font-medium text-gray-900 mb-2">暂无文档</p>
          <p className="text-sm text-gray-500">开始创建您的第一个文档</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-6">
          {documents?.map((document) => (
            <DocumentCard key={document._id} document={document} />
          ))}
        </div>
      )}
    </div>
  );
  return (
    <div className="max-w-screen-xl mx-auto px-16 py-6 flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-medium text-gray-900">最近的文档</h2>
          <p className="text-sm text-gray-500 mt-1">
            {totalCount !== undefined ? `${totalCount} 个文档` : ""}
          </p>
        </div>
        <ViewToggle viewMode={viewMode} onViewModeChange={setViewMode} />
      </div>
      {documents === undefined ? (
        renderLoadingState()
      ) : (
        <>{viewMode === "list" ? renderListView() : renderGridView()}</>
      )}
      <div className="flex items-center justify-center">
        <Button
          variant={"ghost"}
          size={"sm"}
          onClick={() => loadMore(5)}
          disabled={status !== "CanLoadMore"}
          className="text-blue-600 hover:text-blue-700 hover:bg-blue-50"
        >
          {status === "CanLoadMore" ? "加载更多" : "已显示全部"}
        </Button>
      </div>
    </div>
  );
};
