"use client";

import { Grid3X3Icon, ListIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

export type ViewMode = "list" | "grid";

interface ViewToggleProps {
  viewMode: ViewMode;
  onViewModeChange: (mode: ViewMode) => void;
}

export const ViewToggle = ({ viewMode, onViewModeChange }: ViewToggleProps) => {
  return (
    <div className="flex items-center gap-0 border rounded-md overflow-hidden">
      <Button
        variant={viewMode === "list" ? "default" : "ghost"}
        size="sm"
        onClick={() => onViewModeChange("list")}
        className="h-9 px-3 rounded-none border-r"
        title="列表视图"
      >
        <ListIcon className="size-4 mr-2" />
        列表
      </Button>
      <Button
        variant={viewMode === "grid" ? "default" : "ghost"}
        size="sm"
        onClick={() => onViewModeChange("grid")}
        className="h-9 px-3 rounded-none"
        title="网格视图"
      >
        <Grid3X3Icon className="size-4 mr-2" />
        网格
      </Button>
    </div>
  );
};
