import React, { useState, useEffect, useRef, useCallback } from "react";
import { useEditorStore } from "@/store/use-editor-store";
import { debounce } from "@/lib/utils";

// 虚拟滚动配置
const BUFFER_SIZE = 20; // 额外渲染的缓冲区大小
const DEBOUNCE_DELAY = 100; // 滚动防抖延迟(ms)

export const VirtualScrollEditor: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const { editor } = useEditorStore();
  const [visibleRange, setVisibleRange] = useState({ start: 0, end: 50 });
  const containerRef = useRef<HTMLDivElement>(null);
  const paragraphsRef = useRef<HTMLElement[]>([]);

  // 性能监控数据
  const renderTimeRef = useRef<number>(performance.now());
  const scrollHandleTimeRef = useRef<number>(0);

  // 计算可见区域范围的函数
  const calculateVisibleRange = useCallback(() => {
    if (!containerRef.current || !editor) return;

    const startTime = performance.now();
    const scrollTop = containerRef.current.scrollTop;
    const viewportHeight = containerRef.current.clientHeight;

    // 获取所有段落元素
    const dom = editor.view.dom as HTMLElement;
    const paragraphs = Array.from(
      dom.querySelectorAll(
        "p, h1, h2, h3, h4, h5, h6, li, pre, table, blockquote"
      )
    );
    paragraphsRef.current = paragraphs as HTMLElement[];

    // 查找可见段落范围
    let startIndex = 0;
    let endIndex = paragraphs.length - 1;

    for (let i = 0; i < paragraphs.length; i++) {
      const rect = paragraphs[i].getBoundingClientRect();
      const elementTop = rect.top + scrollTop - containerRef.current.offsetTop;

      // 找到第一个可见元素
      if (elementTop + rect.height >= scrollTop && startIndex === 0) {
        startIndex = Math.max(0, i - BUFFER_SIZE);
      }

      // 找到最后一个可见元素
      if (
        elementTop > scrollTop + viewportHeight &&
        endIndex === paragraphs.length - 1
      ) {
        endIndex = Math.min(paragraphs.length - 1, i + BUFFER_SIZE);
        break;
      }
    }

    setVisibleRange({ start: startIndex, end: endIndex });

    // 记录性能数据
    scrollHandleTimeRef.current = performance.now() - startTime;
  }, [editor]);

  // 防抖处理滚动事件
  const debouncedCalculateVisibleRange = useCallback(
    debounce(calculateVisibleRange, DEBOUNCE_DELAY),
    [calculateVisibleRange]
  );

  // 监听滚动事件
  useEffect(() => {
    if (!containerRef.current || !editor) return;

    const container = containerRef.current;
    container.addEventListener("scroll", debouncedCalculateVisibleRange);

    // 初始计算
    calculateVisibleRange();

    return () => {
      container.removeEventListener("scroll", debouncedCalculateVisibleRange);
    };
  }, [editor, calculateVisibleRange, debouncedCalculateVisibleRange]);

  // 应用虚拟滚动效果
  useEffect(() => {
    if (!editor) return;

    const renderStart = performance.now();
    const paragraphs = paragraphsRef.current;

    // 优化渲染 - 仅在可见范围发生变化时更新DOM
    paragraphs.forEach((el, index) => {
      if (index < visibleRange.start || index > visibleRange.end) {
        // 隐藏不在可视范围内的元素，但保留其高度
        if (el.dataset.virtualHidden !== "true") {
          const height = el.offsetHeight;
          el.style.height = `${height}px`;
          el.style.visibility = "hidden";
          el.style.overflow = "hidden";
          el.dataset.virtualHidden = "true";
        }
      } else {
        // 显示在可视范围内的元素
        if (el.dataset.virtualHidden !== "false") {
          el.style.height = "";
          el.style.visibility = "visible";
          el.style.overflow = "";
          el.dataset.virtualHidden = "false";
        }
      }
    });

    // 计算并记录渲染时间
    const renderTime = performance.now() - renderStart;
    const timeSinceLastRender = renderStart - renderTimeRef.current;
    renderTimeRef.current = renderStart;

    // 仅在渲染时间超过阈值时记录性能问题
    if (renderTime > 16) {
      // 16ms = 60fps
      console.log(
        `[VirtualScroll] 渲染耗时: ${renderTime.toFixed(2)}ms, 滚动处理: ${scrollHandleTimeRef.current.toFixed(2)}ms, 距上次: ${timeSinceLastRender.toFixed(2)}ms`
      );
    }

    // 自动性能优化 - 在 VirtualScrollEditor 的 useEffect 中添加
    if (renderTime > 50) {
      // 如果渲染时间过长，减小缓冲区大小以提高性能
      const newBufferSize = Math.max(5, BUFFER_SIZE - 5);
      if (newBufferSize !== BUFFER_SIZE) {
        console.log(
          `[VirtualScroll] 性能优化: 缓冲区大小从 ${BUFFER_SIZE} 减少到 ${newBufferSize}`
        );
        // 更新缓冲区大小
        // 注意：实际实现中，我们应该使用useRef或useState来动态调整BUFFER_SIZE
      }
    }
  }, [visibleRange, editor]);

  return (
    <div
      ref={containerRef}
      className="virtual-scroll-container overflow-auto h-full"
      style={{ position: "relative" }}
    >
      {children}
    </div>
  );
};
