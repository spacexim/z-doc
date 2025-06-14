"use client";

import { useEffect, useState } from "react";

interface DocumentFirstPagePreviewProps {
  content?: string;
  title: string;
  className?: string;
}

export const DocumentFirstPagePreview = ({
  content,
  title,
  className = "",
}: DocumentFirstPagePreviewProps) => {
  const [previewContent, setPreviewContent] = useState<string>("");
  useEffect(() => {
    if (!content) {
      setPreviewContent(
        `<h1 style="font-size: 2em; font-weight: bold; margin-bottom: 0.5em;">${title}</h1><p style="margin-bottom: 1em; line-height: 1.5; color: #666;">这是一个空白文档。点击打开开始编辑。</p>`
      );
      return;
    }

    // 处理文档内容，提取首页内容
    const processContent = () => {
      try {
        if (typeof window !== "undefined") {
          // 创建临时容器来解析HTML
          const tempDiv = document.createElement("div");
          tempDiv.innerHTML = content;

          // 移除不需要的元素
          const elementsToRemove = tempDiv.querySelectorAll(
            "script, style, meta, link"
          );
          elementsToRemove.forEach((el) => el.remove());

          // 获取所有内容元素
          const elements = tempDiv.querySelectorAll(
            "p, h1, h2, h3, h4, h5, h6, ul, ol, li, blockquote, table, img"
          );

          // 限制显示的元素数量，模拟首页效果（大约显示首页的内容）
          const firstPageElements = Array.from(elements).slice(0, 20);

          // 重新构建HTML
          const previewDiv = document.createElement("div");
          firstPageElements.forEach((element) => {
            const clonedElement = element.cloneNode(true) as HTMLElement;

            // 清理和标准化样式
            clonedElement.removeAttribute("style");
            clonedElement.removeAttribute("class");

            // 为不同元素添加基本样式
            if (clonedElement.tagName.startsWith("H")) {
              const level = parseInt(clonedElement.tagName.charAt(1));
              clonedElement.style.fontSize = `${Math.max(1.5, 2.5 - level * 0.3)}em`;
              clonedElement.style.fontWeight = "bold";
              clonedElement.style.marginBottom = "0.5em";
              clonedElement.style.marginTop = level === 1 ? "0" : "1em";
            } else if (clonedElement.tagName === "P") {
              clonedElement.style.marginBottom = "1em";
              clonedElement.style.lineHeight = "1.5";
            } else if (
              clonedElement.tagName === "UL" ||
              clonedElement.tagName === "OL"
            ) {
              clonedElement.style.marginBottom = "1em";
              clonedElement.style.paddingLeft = "1.5em";
            } else if (clonedElement.tagName === "BLOCKQUOTE") {
              clonedElement.style.borderLeft = "3px solid #ccc";
              clonedElement.style.paddingLeft = "1em";
              clonedElement.style.fontStyle = "italic";
              clonedElement.style.marginBottom = "1em";
            }

            previewDiv.appendChild(clonedElement);
          });
          const finalContent = previewDiv.innerHTML.trim();
          setPreviewContent(
            finalContent ||
              `<h1 style="font-size: 2em; font-weight: bold; margin-bottom: 0.5em;">${title}</h1><p style="margin-bottom: 1em; line-height: 1.5;">这是一个空白文档。点击打开开始编辑。</p>`
          );
        }
      } catch (error) {
        console.error("Error processing document content:", error);
        setPreviewContent(
          `<h1 style="font-size: 2em; font-weight: bold; margin-bottom: 0.5em;">${title}</h1><p style="margin-bottom: 1em; line-height: 1.5; color: #ef4444;">无法加载文档内容</p>`
        );
      }
    };

    processContent();
  }, [content, title]);
  return (
    <div
      className={`w-full h-full bg-white rounded overflow-hidden border border-gray-200 ${className}`}
    >
      <div className="w-full h-full overflow-hidden bg-white flex items-start justify-center">
        <div
          style={{
            // 缩放内容以适应预览区域，确保完整显示
            transform: "scale(0.26)",
            transformOrigin: "top center",
          }}
        >
          <div
            className="bg-white p-8 text-sm leading-relaxed text-gray-900 shadow-sm border"
            style={{
              width: "816px", // 标准A4宽度
              minHeight: "1054px", // 标准A4高度
              fontFamily: "Arial, sans-serif",
            }}
          >
            {previewContent ? (
              <div dangerouslySetInnerHTML={{ __html: previewContent }} />
            ) : (
              <div>
                <h1
                  style={{
                    fontSize: "2em",
                    fontWeight: "bold",
                    marginBottom: "0.5em",
                  }}
                >
                  {title}
                </h1>
                <p
                  style={{
                    marginBottom: "1em",
                    lineHeight: "1.5",
                    color: "#666",
                  }}
                >
                  这是一个空白文档。点击打开开始编辑。
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
