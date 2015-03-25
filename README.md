# Yolosh Project - You only life once so be happy !

### 1. Một số quy tắc.
 - Viết hoa chữ cái đầu là biến global có thể truy cập mọi nới. Ví dụ "NodeSchema" còn "getNode" truy cập local.
 - 1 tab = 2 space
 - Sử dụng README.md trong 1 module để viết Quick docs API.


### 2. Chức năng thư mục
---
```
- lib : Utils - Method cho App.
--- appRouter: Router của ứng dụng
- packages : Modules ứng dụng
- private : chứa config
- public : chứa static file
- yolosh : Shell Enviroment


### 3. Cấu trúc của 1 Module
- Node: Tên module tương ứng chức năng của ứng dụng
--- client : xử lý phía client
--- i18n : xử lý ngôn ngữ
--- lib : Utils & Method cho modules
--- server: xử lý phía server
--- test : Code test
--- packages.js : Khởi tạo module
--- README.md : API docs của module