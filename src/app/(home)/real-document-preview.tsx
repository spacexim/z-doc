"use client";

interface RealDocumentPreviewProps {
  content?: string;
  title: string;
  className?: string;
}

export const RealDocumentPreview = ({
  content,
  title,
  className = "",
}: RealDocumentPreviewProps) => {
  // 解析文档内容，提取前几行文本
  const parseContent = (htmlContent?: string) => {
    if (!htmlContent) {
      return {
        title: title || "无标题文档",
        lines: [],
      };
    }
    try {
      // 在客户端环境中解析HTML
      if (typeof window !== "undefined") {
        const tempDiv = document.createElement("div");
        tempDiv.innerHTML = htmlContent;

        // 提取纯文本
        const textContent = tempDiv.textContent || tempDiv.innerText || "";

        // 分割成行，过滤空行
        const lines = textContent
          .split("\n")
          .map((line) => line.trim())
          .filter((line) => line.length > 0)
          .slice(0, 8); // 只取前8行

        return {
          title: title || "无标题文档",
          lines,
        };
      } else {
        // 服务器端简单处理
        const simpleText = htmlContent
          .replace(/<[^>]*>/g, " ") // 移除HTML标签
          .replace(/\s+/g, " ") // 合并空格
          .trim();

        const lines = simpleText
          .split(" ")
          .reduce((acc: string[], word, index) => {
            if (index % 8 === 0) {
              acc.push(word);
            } else if (acc.length > 0) {
              acc[acc.length - 1] += " " + word;
            }
            return acc;
          }, [])
          .slice(0, 8);

        return {
          title: title || "无标题文档",
          lines,
        };
      }
    } catch {
      return {
        title: title || "无标题文档",
        lines: [],
      };
    }
  };

  const { lines } = parseContent(content);

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
      <div className="flex-1 p-3 space-y-1 overflow-hidden">
        {lines.length > 0 ? (
          lines.map((line, index) => {
            // 根据行内容长度和位置确定样式
            const isFirstLine = index === 0;
            const lineLength = line.length;

            // 第一行通常是标题，显示为粗体
            if (isFirstLine && lineLength > 10) {
              return (
                <div
                  key={index}
                  className="h-2 bg-gray-800 rounded"
                  style={{
                    width: `${Math.min(85, Math.max(40, lineLength * 2))}%`,
                  }}
                />
              );
            }

            // 其他行根据长度显示不同宽度
            const width = Math.min(90, Math.max(30, lineLength * 1.5));
            const opacity =
              index < 3
                ? "bg-gray-600"
                : index < 6
                  ? "bg-gray-400"
                  : "bg-gray-300";

            return (
              <div
                key={index}
                className={`h-1.5 ${opacity} rounded`}
                style={{ width: `${width}%` }}
              />
            );
          })
        ) : (
          // 如果没有内容，显示空文档样式
          <>
            <div className="h-2 bg-gray-300 rounded w-3/5"></div>
            <div className="h-1 bg-gray-200 rounded w-1/3"></div>
            <div className="h-0.5"></div>
            <div className="h-1.5 bg-gray-300 rounded w-full"></div>
            <div className="h-1.5 bg-gray-300 rounded w-4/5"></div>
            <div className="h-1.5 bg-gray-300 rounded w-3/5"></div>
            <div className="h-1.5 bg-gray-200 rounded w-2/3"></div>
          </>
        )}
      </div>
    </div>
  );
};
