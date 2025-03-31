# AI Dating Chat Assistant

一个基于 Next.js 和 OpenRouter API 构建的 AI 约会助手应用。

## 技术栈

- Next.js 14.1.0
- React
- TypeScript
- Tailwind CSS
- OpenRouter API (使用 Mistral-7B-Instruct 模型)

## 功能特点

- 现代化的用户界面
- 实时 AI 对话
- 响应式设计
- 错误处理和加载状态
- API 速率限制保护

## 项目结构

```
.
├── app/
│   ├── api/
│   │   └── chat/
│   │       └── route.ts    # API 路由处理
│   │   ├── page.tsx            # 主页面
│   │   ├── layout.tsx          # 布局组件
│   │   └── globals.css         # 全局样式
│   ├── .env.local              # 环境变量（包含 API 密钥）
│   ├── package.json            # 项目依赖
│   ├── tsconfig.json           # TypeScript 配置
│   ├── tailwind.config.js      # Tailwind CSS 配置
│   └── postcss.config.js       # PostCSS 配置
```

## 安装和运行

1. 安装依赖：
```bash
npm install
```

2. 配置环境变量：
创建 `.env.local` 文件并添加：
```
OPENROUTER_API_KEY=your_api_key_here
```

3. 运行开发服务器：
```bash
npm run dev
```

4. 访问应用：
打开 http://localhost:3000

## API 使用说明

应用使用 OpenRouter API 的 Mistral-7B-Instruct 模型进行对话生成。API 调用包含以下参数：
- 最大令牌数：1000
- 系统提示：配置为约会顾问角色
- 错误处理：包含完整的错误处理和响应验证

## 注意事项

- 确保 API 密钥配置正确
- 注意 API 调用的速率限制
- 保持环境变量文件的安全性 