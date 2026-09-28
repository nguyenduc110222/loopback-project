# Loopback Backend

Backend của ứng dụng được xây dựng với **Loopback 4** - một framework REST API mạnh mẽ dựa trên Node.js.

## 🚀 Cấu Hình

- **Port**: 3001
- **Framework**: Loopback 4
- **Language**: TypeScript
- **API Type**: REST

## 📦 Installation

```bash
# Cài đặt dependencies
npm install
```

## 🏃 Chạy Development Server

```bash
npm run dev
```

Backend sẽ chạy tại `http://localhost:3001`

## 📚 API Endpoints (Hiện Có)

### Health Check
- `GET /ping` - Kiểm tra server status
- `GET /api/status` - Chi tiết API status

### API Explorer
- `GET /explorer` - OpenAPI/Swagger documentation

## 🛠️ Build & Production

```bash
# Build TypeScript to JavaScript
npm run build

# Start production server
npm start
```

## 📁 Cấu Trúc Thư Mục

```
be/
├── src/
│   ├── controllers/          # API Controllers
│   │   └── ping.controller.ts
│   ├── application.ts        # Application config
│   └── index.ts             # Server entry point
├── dist/                     # Compiled JavaScript
├── package.json
├── tsconfig.json
└── README.md
```

## 🔄 Frontend Connection

Frontend chạy tại `http://localhost:8000` có thể gọi API từ backend:

```javascript
// Từ Next.js Frontend
const response = await fetch('http://localhost:3001/api/status')
const data = await response.json()
```

## ⚙️ Environment Variables

Tạo file `.env` (nếu cần):

```env
PORT=3001
HOST=0.0.0.0
NODE_ENV=development
```

## 🔧 Tiếp Theo - Cần Cấu Hình

- [ ] Database Connection (MongoDB, MySQL, PostgreSQL, etc.)
- [ ] Models và Repositories
- [ ] Authentication & Authorization
- [ ] Additional API Controllers
- [ ] CORS Configuration
- [ ] Logging Setup
- [ ] Validation Rules

## 📖 Tài Liệu Tham Khảo

- [Loopback Official Docs](https://loopback.io/doc/en/lb4/)
- [Loopback REST API Guide](https://loopback.io/doc/en/lb4/REST-connector.html)
- [TypeScript Docs](https://www.typescriptlang.org/docs/)
