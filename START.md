# 🚀 Cách Chạy Dự Án

## Phương Pháp 1: Chạy Từng Folder Riêng (Recommended)

### Terminal 1 - Chạy Frontend

```bash
cd fe
npm install    # Lần đầu tiên
npm run dev
```

✅ Frontend sẽ chạy tại: **http://localhost:8000**

### Terminal 2 - Chạy Backend

```bash
cd be
npm install    # Lần đầu tiên
npm run dev
```

✅ Backend sẽ chạy tại: **http://localhost:3001**

## Phương Pháp 2: Chạy Backend Trước

Nếu bạn chỉ muốn chạy backend trước:

```bash
cd be
npm install
npm run dev
```

Sau đó mở terminal khác:

```bash
cd fe
npm install
npm run dev
```

## ✅ Kiểm Tra Status

### Frontend
- Mở trình duyệt: http://localhost:8000
- Bạn sẽ thấy trang chủ với:
  - 🏠 Trang Chủ
  - ℹ️ Giới Thiệu
  - 📝 Blog

### Backend
- API Status: http://localhost:3001/ping
- API Documentation: http://localhost:3001/explorer
- Chi tiết: http://localhost:3001/api/status

## 📝 Các Trang Frontend

- **Trang Chủ** → http://localhost:8000/
  - Có Server Component (ServerInfo)
  - Có Client Component (Counter)

- **Giới Thiệu** → http://localhost:8000/about
  - Thông tin về công nghệ sử dụng

- **Blog** → http://localhost:8000/blog
  - Danh sách bài viết mẫu

## 🛠️ Troubleshooting

### Lỗi: Port đã được sử dụng
```bash
# Kiểm tra port 8000
lsof -i :8000

# Kiểm tra port 3001
lsof -i :3001

# Kill process (macOS/Linux)
kill -9 <PID>
```

### Lỗi: Module không tìm thấy
```bash
# Xóa node_modules và reinstall
rm -rf node_modules package-lock.json
npm install
```

### Frontend không kết nối được Backend
- Chắc chắn backend đang chạy ở port 3001
- Kiểm tra CORS configuration (nếu cần)

## 📊 Cấu Trúc Request/Response

### Frontend gọi Backend
```javascript
// Từ Next.js (http://localhost:8000)
const response = await fetch('http://localhost:3001/ping')
const data = await response.json()
console.log(data)
```

### Response từ Backend
```json
{
  "greeting": "Hello from Loopback Backend!",
  "date": "2024-09-15T10:30:00.000Z",
  "url": "http://localhost:3001",
  "timestamp": 1726408200000
}
```

## 💡 Tips

1. **Mở 2 Terminal**: Mỗi cái cho một phần (frontend & backend)
2. **Giữ cửa sổ lệnh mở**: Để thấy logs từ server
3. **Refresh trình duyệt**: Ctrl+R hoặc Cmd+R
4. **Check Network Tab**: F12 → Network để debug

## 🎯 Test API Endpoints

### Curl từ Terminal

```bash
# Test ping endpoint
curl http://localhost:3001/ping

# Test status endpoint
curl http://localhost:3001/api/status

# Test từ frontend (open DevTools console)
fetch('http://localhost:3001/api/status')
  .then(res => res.json())
  .then(data => console.log(data))
```

## 🚀 Production Build

### Build Frontend
```bash
cd fe
npm run build
npm start  # Sẽ chạy tại port 8000
```

### Build Backend
```bash
cd be
npm run build
npm start  # Sẽ chạy tại port 3001
```

---

**Bước 1**: Chạy `cd fe && npm install && npm run dev`
**Bước 2**: Chạy `cd be && npm install && npm run dev` (terminal khác)
**Bước 3**: Truy cập http://localhost:8000 ✅
