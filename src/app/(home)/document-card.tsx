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
      className="group hover:shadow-xl transition-all duration-300 cursor-pointer border-gray-200/60 hover:border-blue-200 hover:scale-[1.02] rounded-xl shadow-sm bg-white"
      onClick={() => router.push(`/documents/${document._id}`)}
    >
      <CardHeader className="p-0">
        <div className="aspect-[4/5] bg-gradient-to-br from-gray-50 to-gray-100/50 border-b border-gray-100/60 rounded-t-xl relative overflow-hidden">
          {/* 真实文档首页预览 - 占满整个区域 */}
          <DocumentFirstPagePreview
            content={document.initialContent}
            title={document.title}
            className="absolute inset-0 group-hover:shadow-md transition-all duration-300"
          />
          {/* 悬停遮罩 */}
          <div className="absolute inset-0 bg-black/0 group-hover:bg-blue-500/5 transition-all duration-300 rounded-t-xl z-5" />

          {/* 微妙的渐变边框效果 */}
          <div className="absolute inset-0 rounded-t-xl border border-white/20 pointer-events-none" />
        </div>
      </CardHeader>{" "}
      <CardContent className="p-5 relative">
        <div className="space-y-3">
          <h3
            className="font-semibold text-sm text-gray-900 truncate group-hover:text-blue-600 transition-colors leading-tight"
            title={document.title}
          >
            {document.title}
          </h3>

          <div className="flex items-center gap-2 text-xs text-gray-500">
            {document.organizationId ? (
              <Building2Icon className="size-3.5 text-blue-500" />
            ) : (
              <CircleUserIcon className="size-3.5 text-green-500" />
            )}
            <span className="truncate font-medium">
              {document.organizationId ? "Organization" : "Personal"}
            </span>
          </div>

          <div className="flex items-center justify-between pt-1">
            <div className="text-xs text-gray-400 font-medium">
              创建于 {format(new Date(document._creationTime), "MMM dd, yyyy")}
            </div>

            {/* 菜单按钮 - 放在创建时间的右侧 */}
            <div
              className="opacity-0 group-hover:opacity-100 transition-all duration-200 transform group-hover:scale-105"
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
