# NextJS + Loopback Full Stack Project

Một dự án full-stack hiện đại kết hợp **Next.js 15** cho frontend và **Loopback 4** cho backend.

## 📋 Tổng Quan Dự Án

```
project-nextjs-loopback/
├── fe/                    # Next.js Frontend (Port 8000)
├── be/                    # Loopback Backend (Port 3001)
├── README.md             # File này
└── .gitignore           # Git configuration
```

## 🚀 Quick Start

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

## 📦 Technology Stack

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
- 🏠 **Home** (`/`) - Trang chủ với Server Component và Client Component
- ℹ️ **About** (`/about`) - Giới thiệu dự án
- 📝 **Blog** (`/blog`) - Danh sách bài viết

### Components
- **Navigation** - Client Component (interactive)
- **Counter** - Client Component (state management)
- **ServerInfo** - Server Component (server-side rendering)

## 🔌 Backend Features

### API Endpoints
- `GET /ping` - Health check
- `GET /api/status` - API status
- `GET /explorer` - API documentation (Swagger/OpenAPI)

## 🔄 Frontend-Backend Communication

Frontend có thể gọi backend API:

```javascript
// Ví dụ từ Next.js page hoặc component
const response = await fetch('http://localhost:3001/api/status')
const data = await response.json()
console.log(data)
```

## 🛠️ Development Tips

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
```

## 📚 File Structure

### Frontend (`/fe`)
```
fe/
├── app/
│   ├── layout.jsx           # Root layout
│   ├── globals.css          # Global styles
│   ├── page.jsx             # Home page
│   ├── about/page.jsx       # About page
│   └── blog/page.jsx        # Blog page
├── components/
│   ├── Navigation.jsx       # Navigation component
│   ├── Counter.jsx          # Counter component
│   └── ServerInfo.jsx       # Server info component
├── package.json
├── next.config.js
└── jsconfig.json
```

### Backend (`/be`)
```
be/
├── src/
│   ├── controllers/
│   │   └── ping.controller.ts
│   ├── application.ts
│   └── index.ts
├── dist/                    # Compiled output
├── package.json
└── tsconfig.json
```

## 🔐 Environment Variables

### Frontend (`.env.local`)
```env
NEXT_PUBLIC_API_URL=http://localhost:3001
```

### Backend (`.env`)
```env
PORT=3001
HOST=0.0.0.0
NODE_ENV=development
```

## 📖 Documentation

- [Frontend README](./fe/README.md)
- [Backend README](./be/README.md)
- [Next.js Documentation](https://nextjs.org/docs)
- [Loopback Documentation](https://loopback.io/doc/en/lb4/)

## 🎯 Next Steps

1. ✅ Frontend setup với Next.js + routes + components
2. ⏳ Backend setup với Loopback (structure ready)
3. 📊 Integrate database (MongoDB, MySQL, PostgreSQL)
4. 🔐 Add authentication
5. 📡 Connect frontend with backend APIs
6. 🧪 Add testing
7. 🚀 Deploy to production

## 💡 Tips & Best Practices

- **Server Components**: Dùng cho rendering tĩnh, fetch data
- **Client Components**: Dùng khi cần interactivity, state, hooks
- **API**: Loopback Explorer có sẵn tại `/explorer`
- **Styling**: Có sẵn base CSS, bạn có thể mở rộng

## 🤝 Contribution

Bạn có thể mở rộng dự án này bằng cách:
- Thêm model và repository cho backend
- Tạo thêm pages/components cho frontend
- Integrate database
- Add authentication
- Deploy lên cloud

## 📞 Support

Nếu gặp vấn đề:
1. Kiểm tra port 8000 (frontend) và 3001 (backend)
2. Chắc chắn `npm install` đã hoàn tất
3. Xóa `node_modules` và cài lại nếu cần
4. Kiểm tra file `.gitignore` và `.env`

## 📄 License

MIT License - Bạn có thể sử dụng tự do

---

**Happy Coding! 🚀**

Bắt đầu với `npm run dev` trong cả hai folder `fe/` và `be/` để chạy toàn bộ ứng dụng.
