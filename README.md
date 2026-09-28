# NextJS + Loopback Full Stack Project

## Tổng Quan Dự Án

```
project-nextjs-loopback/
├── fe/                    # Next.js Frontend (Port 8000)
├── be/                    # Loopback Backend (Port 3001)
├── README.md             # File này
└── .gitignore           # Git configuration
```

## Quick Start

### 1. Cài Đặt Frontend

```bash
cd fe
npm install
npm run dev
```

Frontend sẽ chạy tại: **http://localhost:8000**

### 2. Cài Đặt Backend

```bash
cd be
npm install
npm run dev
```

Backend sẽ chạy tại: **http://localhost:3001**

## Technology Stack

### Frontend
- **Next.js 15** - React framework
- **React 19** - UI library
- **CSS3** - Styling
- **JavaScript/JSX** - Programming language

### Backend
- **Loopback 4** - REST API Framework
- **TypeScript** - Programming language
- **Node.js** - Runtime

## 📝 Frontend Features

### Pages
- **Home** (`/`) - Trang chủ với Server Component và Client Component
- **About** (`/about`) - Giới thiệu dự án
- **Blog** (`/blog`) - Danh sách bài viết

### Components
- **Navigation** - Client Component (interactive)
- **Counter** - Client Component (state management)
- **ServerInfo** - Server Component (server-side rendering)

## 🔌 Backend Features

### API Endpoints
- `GET /ping` - Health check
- `GET /api/status` - API status
- `GET /explorer` - API documentation (Swagger/OpenAPI)

## Frontend-Backend Communication

Frontend có thể gọi backend API:

```javascript
// Ví dụ từ Next.js page hoặc component
const response = await fetch('http://localhost:3001/api/status')
const data = await response.json()
console.log(data)
```

## Development Tips

### Run Frontend in Development
```bash
cd fe
npm run dev
```

### Run Backend in Development
```bash
cd be
npm run dev
```

### Build for Production
```bash
# Frontend
cd fe
npm run build
npm start

# Backend
cd be
npm run build
npm start
**Happy Coding! 🚀**

Bắt đầu với `npm run dev` trong cả hai folder `fe/` và `be/` để chạy toàn bộ ứng dụng.
