<div align="center">
  <img src="/public/logo-title.svg" alt="LiveDocs Logo" width="400" />
  <h3>现代化协作文档编辑平台</h3>
  <!-- 技术栈徽章 -->
  <p>
    <img src="https://img.shields.io/badge/Next.js_15-black?style=for-the-badge&logo=next.js&logoColor=white" alt="Next.js" />
    <img src="https://img.shields.io/badge/React_19-61DAFB?style=for-the-badge&logo=react&logoColor=black" alt="React" />
    <img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
    <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS" />
  </p>
  <p>
    <img src="https://img.shields.io/badge/Convex_DB-FF6B6B?style=for-the-badge&logo=convex&logoColor=white" alt="Convex" />
    <img src="https://img.shields.io/badge/Liveblocks-00CCBB?style=for-the-badge&logo=liveblocks&logoColor=white" alt="Liveblocks" />
    <img src="https://img.shields.io/badge/Clerk-6C47FF?style=for-the-badge&logo=clerk&logoColor=white" alt="Clerk" />
    <img src="https://img.shields.io/badge/Zustand-443E38?style=for-the-badge&logo=zustand&logoColor=white" alt="Zustand" />
  </p>
</div>

## 📝 项目简介

LiveDocs 是一个实时协作文档编辑平台，为团队和个人提供类似 Google Docs 的使用体验。通过 LiveDocs，用户可以创建、编辑和共享各种文档，并支持多人实时协作，完美适合团队项目、学术研究或个人知识管理。

### ✨ 核心特性

- 📄 **多种文档模板**：包括空白文档、商务信函、项目提案、简历等
- 👥 **实时协作**：多人同时编辑，光标实时显示
- 💬 **评论与讨论**：支持在文档任意位置添加评论和讨论
- 📱 **响应式设计**：支持桌面端和移动端
- 🔐 **权限管理**：个人和组织级别的访问控制
- 📤 **多格式导出**：支持导出为 PDF、HTML、JSON 等格式

## 🚀 快速开始

### 前提条件

- Node.js 18.0.0 或更高版本
- Yarn、NPM 或 Bun 包管理器
- Git

### 安装

1. 克隆仓库

```bash
git clone https://github.com/spacexim/LiveDocs.git
cd LiveDocs
```

2. 安装依赖

```bash
npm install
# 或
yarn install
# 或
bun install
```

3. 环境变量配置

创建 `.env.local` 文件并添加以下环境变量：

```
NEXT_PUBLIC_CONVEX_URL=你的Convex网址
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=你的Clerk公钥
CLERK_SECRET_KEY=你的Clerk密钥
LIVEBLOCKS_SECRET_KEY=你的Liveblocks密钥
```

4. 启动开发服务器

```bash
npm run dev
# 或
yarn dev
# 或
bun dev
```

5. 打开浏览器访问 [http://localhost:3000](http://localhost:3000)

### 配置服务

#### Convex 设置

1. 安装 Convex CLI

```bash
npm install -g convex
```

2. 初始化 Convex 项目

```bash
npx convex dev
```

3. 按照终端提示完成设置

#### Clerk 身份验证设置

1. 在 [Clerk 控制台](https://dashboard.clerk.dev/) 创建新应用
2. 配置身份验证方法（邮箱、社交登录等）
3. 获取 API 密钥并添加到环境变量

#### Liveblocks 实时协作设置

1. 在 [Liveblocks 控制台](https://liveblocks.io/dashboard) 创建项目
2. 获取密钥并添加到环境变量

## 💻 技术栈

- **前端框架**: [Next.js 15](https://nextjs.org/) (React 19)
- **样式**: [Tailwind CSS](https://tailwindcss.com/) + [shadcn/ui](https://ui.shadcn.com/)
- **编辑器**: [TipTap](https://tiptap.dev/) 富文本编辑器
- **实时协作**: [Liveblocks](https://liveblocks.io/)
- **数据库与后端**: [Convex](https://www.convex.dev/)
- **身份验证**: [Clerk](https://clerk.dev/)
- **状态管理**: [Zustand](https://github.com/pmndrs/zustand)

## 📁 项目结构

```
LiveDocs/
├── convex/            # Convex 数据模型和函数
├── public/            # 静态资源
├── src/
│   ├── app/           # Next.js 页面和路由
│   │   ├── (home)/    # 主页面组件
│   │   ├── documents/ # 文档编辑页面组件
│   │   └── api/       # API 路由
│   ├── components/    # React 组件
│   │   ├── ui/        # UI 组件库
│   │   └── ...        # 其他自定义组件
│   ├── constants/     # 常量定义
│   ├── extensions/    # TipTap 编辑器扩展
│   ├── hooks/         # 自定义 React Hooks
│   ├── lib/           # 工具函数
│   └── store/         # Zustand 状态管理
└── ...
```

## 🧩 主要功能模块

### 文档编辑器

LiveDocs 文档编辑器基于 TipTap，提供丰富的编辑功能：

- 文本样式（粗体、斜体、下划线等）
- 段落格式（对齐、行高等）
- 插入表格、图片
- 添加评论和注释

### 实时协作

通过 Liveblocks 实现的实时协作功能：

- 多用户同时编辑
- 用户光标位置显示
- 编辑内容实时同步
- 线程化评论系统

### 文档管理

完整的文档管理功能：

- 创建、重命名、删除文档
- 搜索文档
- 导出多种格式
- 组织和个人文档分类

## 🛠️ 开发指南

### 添加新组件

1. 在 `src/components` 目录创建新组件
2. 使用 Tailwind CSS 进行样式设计
3. 导入并在应用中使用

### 修改数据模型

1. 在 `convex/schema.ts` 中更新数据模型
2. 运行 `npx convex dev` 更新数据库架构
3. 在 `convex` 目录中添加或修改相应的查询和变更函数

### 自定义编辑器功能

1. 在 `src/extensions` 目录创建新的 TipTap 扩展
2. 在 `src/app/documents/[documentId]/editor.tsx` 中注册扩展

## 📋 待办事项

- [ ] 添加更多文档模板
- [ ] 改进移动端体验
- [ ] 实现文档版本历史功能
- [ ] 添加高级权限管理
- [ ] 支持离线编辑

## 📄 许可证

<p>
  <img src="https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge" alt="MIT License" />
  <img src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=for-the-badge" alt="PRs Welcome" />
  <img src="https://img.shields.io/badge/Maintained%3F-yes-green.svg?style=for-the-badge" alt="Maintained? Yes" />
</p>

本项目采用 MIT 许可证。详情请参阅 [LICENSE](LICENSE) 文件。

## 📞 联系我们

如有任何问题或建议，请通过以下方式联系我们：

- GitHub Issues: [https://github.com/spacexim/LiveDocs/issues](https://github.com/spacexim/LiveDocs/issues)
- 电子邮件: [zu_yao@outlook.com](mailto:zu_yao@outlook.com)

---

<div align="center">
  <p>由 ❤️ 和 ☕ 驱动开发</p>
</div>
