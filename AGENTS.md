# AGENTS.md

本指南为在此仓库中工作的 AI 编码代理提供关键信息。

## 项目结构

```
src/
├── components/ui/    # shadcn/ui 组件（Base UI 基础组件）
├── lib/              # 工具函数（cn() 函数用于 className 合并）
├── modules/          # 应用模块（query client、basename）
├── pages/            # 页面组件（默认导出）
├── routes/           # TanStack Router 基于文件的路由
├── styles/           # 全局样式、主题 CSS
└── main.tsx          # 应用入口
```


## 代码风格指南

### 模块目录结构

每个新模块（如 `page-app`）应遵循以下结构：

```
pages/page-app/
├── components/    # 模块专属组件
├── store/         # 模块状态管理
└── module/        # 模块功能函数
```

### 状态和数据获取

- **Zustand** 用于全局状态管理
- **@kevisual/query** 用于数据获取（QueryClient 实例位于 `src/modules/query.ts`）
- **React Hook Form** 用于表单管理

## 核心依赖

- **@base-ui/react**: Headless UI 基础组件
- **@tanstack/react-router**: 基于 TanStack Router 插件的文件路由
- **class-variance-authority**: 基于变体的样式系统
- **clsx + tailwind-merge**: 通过 `cn()` 提供 className 工具函数
- **lucide-react**: 图标库
- **react-hook-form**: 表单处理
- **sonner**: Toast 通知
- **zustand**: 状态管理
- **tailwindcss v4**: 使用 @tailwindcss/vite 插件进行样式处理

## 主题系统

- **主题配色**: 采用黑白配色方案，提供简洁优雅的视觉体验
- **主题模式**: 支持 light（浅色）和 dark（深色）模式切换
- **主题实现**: 使用 `next-themes` 进行主题管理
- **CSS 变量**: 主题相关的 CSS 变量定义在 `src/styles/theme.css` 中