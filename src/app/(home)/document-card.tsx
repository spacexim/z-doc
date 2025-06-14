"use client";

import { format } from "date-fns";
import { Building2Icon, CircleUserIcon } from "lucide-react";
import { useRouter } from "next/navigation";

import { Doc } from "../../../convex/_generated/dataModel";
import { DocumentMenu } from "./document-menu";
import { DocumentFirstPagePreview } from "./document-first-page-preview";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

interface DocumentCardProps {
  document: Doc<"documents">;
}

export const DocumentCard = ({ document }: DocumentCardProps) => {
  const router = useRouter();

  return (
    <Card
      className="group hover:shadow-lg transition-all duration-200 cursor-pointer border-gray-200 hover:border-gray-300 hover:scale-[1.02]"
      onClick={() => router.push(`/documents/${document._id}`)}
    >
      <CardHeader className="p-0">
        <div className="aspect-[4/5] bg-gray-50 border-b border-gray-100 rounded-t-lg relative overflow-hidden">
          {/* 真实文档首页预览 - 占满整个区域 */}
          <DocumentFirstPagePreview
            content={document.initialContent}
            title={document.title}
            className="absolute inset-0 group-hover:shadow-md transition-shadow"
          />
          {/* 悬停遮罩 */}
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors rounded-t-lg z-5" />
        </div>
      </CardHeader>
      <CardContent className="p-4 relative">
        <div className="space-y-2">
          <h3
            className="font-medium text-sm text-gray-900 truncate hover:text-blue-600 transition-colors"
            title={document.title}
          >
            {document.title}
          </h3>

          <div className="flex items-center gap-2 text-xs text-gray-500">
            {document.organizationId ? (
              <Building2Icon className="size-3" />
            ) : (
              <CircleUserIcon className="size-3" />
            )}
            <span className="truncate">
              {document.organizationId ? "Organization" : "Personal"}
            </span>
          </div>

          <div className="flex items-center justify-between">
            <div className="text-xs text-gray-400">
              创建于 {format(new Date(document._creationTime), "MMM dd, yyyy")}
            </div>

            {/* 菜单按钮 - 放在创建时间的右侧 */}
            <div
              className="opacity-0 group-hover:opacity-100 transition-opacity"
              onClick={(e) => e.stopPropagation()}
            >
              <DocumentMenu
                documentId={document._id}
                title={document.title}
                onNewTab={() =>
                  window.open(`/documents/${document._id}`, "_blank")
                }
              />
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
