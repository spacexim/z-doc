"use client";

import { useMemo } from "react";

interface SmartDocumentPreviewProps {
  title: string;
  documentId: string;
  className?: string;
}

export const SmartDocumentPreview = ({
  title,
  documentId,
  className = "",
}: SmartDocumentPreviewProps) => {
  const previewData = useMemo(() => {
    const words = title
      .toLowerCase()
      .split(" ")
      .filter((word) => word.length > 0);

    // 根据标题推断文档类型
    let documentType = "document";
    if (
      words.some((word) =>
        ["resume", "简历", "cv", "curriculum"].includes(word)
      )
    ) {
      documentType = "resume";
    } else if (
      words.some((word) =>
        ["letter", "信件", "信", "cover", "dear"].includes(word)
      )
    ) {
      documentType = "letter";
    } else if (
      words.some((word) =>
        ["proposal", "提案", "建议", "project", "plan"].includes(word)
      )
    ) {
      documentType = "proposal";
    } else if (
      words.some((word) =>
        ["report", "报告", "分析", "analysis", "summary"].includes(word)
      )
    ) {
      documentType = "report";
    } else if (
      words.some((word) =>
        ["business", "商业", "业务", "company"].includes(word)
      )
    ) {
      documentType = "business";
    }

    // 基于文档ID生成一致的随机种子
    const hashCode = documentId.split("").reduce((a, b) => {
      a = (a << 5) - a + b.charCodeAt(0);
      return a & a;
    }, 0);

    return {
      documentType,
      seed: Math.abs(hashCode),
      titleWords: words.slice(0, 3),
    };
  }, [title, documentId]);

  const renderPreviewContent = () => {
    const { documentType, seed } = previewData;

    switch (documentType) {
      case "resume":
        return (
          <div className="flex-1 p-3 space-y-1 overflow-hidden">
            {/* 姓名 - 大标题 */}
            <div className="h-2.5 bg-gray-800 rounded w-3/5 mb-1"></div>
            {/* 联系信息 */}
            <div className="h-1 bg-gray-400 rounded w-2/5"></div>
            <div className="h-0.5"></div>

            {/* 工作经验 */}
            <div className="h-1.5 bg-gray-600 rounded w-2/3"></div>
            <div className="h-1 bg-gray-300 rounded w-4/5"></div>
            <div className="h-1 bg-gray-300 rounded w-3/5"></div>
            <div className="h-0.5"></div>

            {/* 教育背景 */}
            <div className="h-1.5 bg-gray-600 rounded w-1/2"></div>
            <div className="h-1 bg-gray-300 rounded w-3/4"></div>
          </div>
        );

      case "letter":
        return (
          <div className="flex-1 p-3 space-y-1 overflow-hidden">
            {/* 日期 */}
            <div className="h-1 bg-gray-300 rounded w-1/3 ml-auto"></div>
            <div className="h-1"></div>

            {/* 收件人地址 */}
            <div className="h-1 bg-gray-400 rounded w-2/5"></div>
            <div className="h-1 bg-gray-400 rounded w-1/3"></div>
            <div className="h-1"></div>

            {/* 称呼 */}
            <div className="h-1.5 bg-gray-600 rounded w-1/4"></div>
            <div className="h-0.5"></div>

            {/* 正文 */}
            <div className="h-1 bg-gray-300 rounded w-full"></div>
            <div className="h-1 bg-gray-300 rounded w-4/5"></div>
            <div className="h-1 bg-gray-300 rounded w-5/6"></div>
          </div>
        );

      case "proposal":
        return (
          <div className="flex-1 p-3 space-y-1 overflow-hidden">
            {/* 标题 */}
            <div className="h-2.5 bg-gray-800 rounded w-4/5 mb-1"></div>
            <div className="h-0.5"></div>

            {/* 概述 */}
            <div className="h-1.5 bg-gray-600 rounded w-1/3"></div>
            <div className="h-1 bg-gray-300 rounded w-full"></div>
            <div className="h-1 bg-gray-300 rounded w-3/4"></div>
            <div className="h-0.5"></div>

            {/* 目标 */}
            <div className="h-1.5 bg-gray-600 rounded w-1/4"></div>
            <div className="h-1 bg-gray-300 rounded w-5/6"></div>
            <div className="h-1 bg-gray-300 rounded w-2/3"></div>
          </div>
        );

      case "report":
        return (
          <div className="flex-1 p-3 space-y-1 overflow-hidden">
            {/* 报告标题 */}
            <div className="h-2.5 bg-gray-800 rounded w-3/4 mb-1"></div>
            {/* 副标题 */}
            <div className="h-1.5 bg-gray-600 rounded w-1/2 mb-1"></div>

            {/* 章节1 */}
            <div className="h-1.5 bg-gray-500 rounded w-2/5"></div>
            <div className="h-1 bg-gray-300 rounded w-full"></div>
            <div className="h-1 bg-gray-300 rounded w-4/5"></div>
            <div className="h-0.5"></div>

            {/* 章节2 */}
            <div className="h-1.5 bg-gray-500 rounded w-1/3"></div>
            <div className="h-1 bg-gray-300 rounded w-5/6"></div>
          </div>
        );

      case "business":
        return (
          <div className="flex-1 p-3 space-y-1 overflow-hidden">
            {/* 公司抬头 */}
            <div className="h-2 bg-blue-600 rounded w-2/3 mb-1"></div>
            <div className="h-0.5"></div>

            {/* 标题 */}
            <div className="h-2 bg-gray-800 rounded w-4/5"></div>
            <div className="h-0.5"></div>

            {/* 内容 */}
            <div className="h-1 bg-gray-400 rounded w-full"></div>
            <div className="h-1 bg-gray-400 rounded w-3/4"></div>
            <div className="h-1 bg-gray-300 rounded w-5/6"></div>
            <div className="h-1 bg-gray-300 rounded w-2/3"></div>

            {/* 签名区 */}
            <div className="h-0.5"></div>
            <div className="h-1 bg-gray-500 rounded w-1/3 ml-auto"></div>
          </div>
        );

      default:
        return (
          <div className="flex-1 p-3 space-y-1 overflow-hidden">
            {/* 标题行 */}
            <div className="h-2 bg-gray-800 rounded w-4/5"></div>
            <div className="h-0.5"></div>

            {/* 内容行 - 基于seed生成不同的图案 */}
            {Array.from({ length: 6 }, (_, index) => {
              const lineSeed = seed + index * 1000;
              const width = 35 + (lineSeed % 50); // 35-85% 宽度
              const opacity =
                index < 2
                  ? "bg-gray-600"
                  : index < 4
                    ? "bg-gray-400"
                    : "bg-gray-300";

              return (
                <div
                  key={index}
                  className={`h-1.5 ${opacity} rounded`}
                  style={{ width: `${width}%` }}
                />
              );
            })}
          </div>
        );
    }
  };

  return (
    <div
      className={`bg-white w-[85%] h-[90%] rounded shadow-sm border border-gray-200 flex flex-col overflow-hidden ${className}`}
    >
      {/* Google Docs 样式的顶部蓝色条 */}
      <div className="h-2 bg-blue-500 rounded-t flex-shrink-0"></div>

      {/* 工具栏区域 */}
      <div className="h-3 bg-gray-50 border-b border-gray-100 flex items-center px-2 flex-shrink-0">
        <div className="flex space-x-1">
          <div className="w-0.5 h-0.5 bg-gray-400 rounded-full"></div>
          <div className="w-0.5 h-0.5 bg-gray-400 rounded-full"></div>
          <div className="w-0.5 h-0.5 bg-gray-400 rounded-full"></div>
          <div className="w-0.5 h-0.5 bg-gray-400 rounded-full"></div>
        </div>
      </div>

      {/* 文档内容区域 */}
      {renderPreviewContent()}
    </div>
  );
};
