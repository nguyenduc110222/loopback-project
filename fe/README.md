# Next.js Frontend

Frontend của ứng dụng được xây dựng với **Next.js 15** và **React 19**.

## 🚀 Cấu Hình

- **Port**: 8000
- **Framework**: Next.js 15
- **UI Library**: React 19
- **Styling**: CSS3

## 📦 Installation

```bash
# Cài đặt dependencies
npm install
```

## 🏃 Chạy Development Server

```bash
npm run dev
```

Ứng dụng sẽ chạy tại `http://localhost:8000`

## 📄 Pages & Routes

- `/` - Trang chủ (Home)
- `/about` - Giới thiệu (About)
- `/blog` - Blog & Articles

## 🎯 Thành Phần

### Server Components
- **ServerInfo** - Hiển thị thông tin server và thời gian hiện tại

### Client Components
- **Navigation** - Menu điều hướng
- **Counter** - Component tương tác với state

## 📁 Cấu Trúc Thư Mục

```
fe/
├── app/                      # App Router directory
│   ├── layout.jsx           # Root layout
│   ├── globals.css          # Global styles
│   ├── page.jsx             # Home page
│   ├── about/
│   │   └── page.jsx         # About page
│   └── blog/
│       └── page.jsx         # Blog page
├── components/              # React components
│   ├── Navigation.jsx       # Client Component
│   ├── Counter.jsx          # Client Component
│   └── ServerInfo.jsx       # Server Component
├── package.json
├── next.config.js
├── jsconfig.json
└── README.md
```

## 🔗 API Integration (Backend)

Backend chạy tại `http://localhost:3001`

Để kết nối với backend API:

```javascript
// Ví dụ fetch data từ backend
const response = await fetch('http://localhost:3001/api/users')
const data = await response.json()
```

## 🛠️ Build & Production

```bash
# Build for production
npm run build

# Start production server
npm start
```

## 📚 Tài Liệu Tham Khảo

- [Next.js Docs](https://nextjs.org/docs)
- [React Docs](https://react.dev)
- [Next.js App Router](https://nextjs.org/docs/app)
