# DuAnMini.github.io

Đây là một ứng dụng Node.js dùng để demo các chức năng mã hóa đơn giản sử dụng các modules `crypto-js`, `crypto`, `express`, `path` và `express-handlebars`

## Yêu cầu

- Node.js (phiên bản 14 trở lên)
- Trình quản lý gói `npm`

## Cài đặt

1. Sao chép kho lưu trữ về máy cục bộ.
2. Trong thư mục dự án, chạy lệnh `npm install` để cài đặt các phụ thuộc cần thiết.
3. Tạo một private key sử dụng OpenSSL:
   ```
   openssl genrsa -out private_key.pem 2048
   ```
4. Đặt file private key được tạo ra vào trong thư mục dự án.
5. Chạy lệnh `npm dev` để khởi động server.

## Sử dụng

Ứng dụng cung cấp ba tuyến đường:

- `GET /`: Hiển thị trang chủ.
- `POST /sha1`: Nhận một chuỗi đầu vào và tính toán giá trị băm SHA-1 của nó.
- `POST /md5`: Nhận một chuỗi đầu vào và tính toán giá trị băm MD5 của nó.
- `POST /signature`: Nhận một chuỗi đầu vào và ký số cho nó bằng private key sử dụng thuật toán SHA-256.

Trên trang chủ, có các trường đầu vào cho mỗi tuyến đường. Sau khi gửi một tin nhắn, giá trị băm hoặc chữ ký tính toán được hiển thị trên cùng trang.

## Công nghệ được sử dụng

- [Nodejs](https://nodejs.org/en)
- [Crypto js](https://github.com/brix/crypto-js)
- [Express](https://expressjs.com)
- [Path](https://nodejs.org/docs/latest/api/path.html)
- [Express Handlebars](https://github.com/express-handlebars/express-handlebars)
- [OpenSSL](https://www.openssl.org/)

## Đường dẫn source dự án

- [Link dự án](https://github.com/quan0608/DuAnMini.github.io.git)

## Tác giả

- [Việt quân](https://github.com/quan0608)
