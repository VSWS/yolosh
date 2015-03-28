## Yolosh Project - You only life once so be happy !

### 1. Một số quy tắc.
 - Viết hoa chữ cái đầu là biến global có thể truy cập mọi nới. Ví dụ "NodeSchema" còn "getNode" truy cập local.
 - 1 tab = 2 space
 - Sử dụng README.md trong 1 module để viết Quick docs API.

### 2. Cấu trúc dự án
Hiện tại không phát triển theo hướng packages vì làm packages cần am hiểu tốt hơn về hệ thống meteor.
```
- client: Xử lý phía Client
- i18n: Ngôn ngữ
- lib : Utils & Method
- models: Xử lý model
- private: Config
- server: Xử lý phía server
--- packages.js : Khởi tạo module
--- README.md : API docs của module
```

### 3. Các thư viện mở rộng sử dụng & tài liệu
- tap:i18n : [Tài liệu](https://github.com/TAPevents/tap-i18n/)
- iron:router : [Tài liệu](https://github.com/iron-meteor/iron-router/blob/devel/Guide.md)
- aldeed:collection2 : [Tài liệu](https://github.com/aldeed/meteor-collection2/)
- aldeed:autoform : [Tài liệu](https://github.com/aldeed/meteor-autoform)