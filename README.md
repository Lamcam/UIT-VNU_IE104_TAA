# UIT-VNU_IE104_TAA

## Giới Thiệu Tổng Quan

**UIT-VNU_IE104_TAA** là đồ án cuối kỳ môn IE104 - Internet và công nghệ Web của nhóm sinh viên của trường Đại học Công nghệ Thông tin - ĐHQG. Đồ án này được thực hiện bởi nhóm 3, lớp IE104.O11 dưới sự hướng dẫn của Th.S Võ Tấn Khoa.

## Thành Viên Nhóm

Các thành viên trong nhóm bao gồm:

| STT | Tên                    | Mã Số Sinh Viên | Vai Trò         |
|-----|------------------------|------------------|----------------|
| 1   | Lâm Thị Hồng Cẩm       | 21520009         | Trưởng nhóm    |
| 2   | Đặng Quỳnh Như         | 21520081         | Thành Viên     |
| 3   | Bùi Yến Giàu           | 21520796         | Thành Viên     |
| 4   | Lê Trung Hiếu          | 21520850         | Thành Viên     |
| 5   | Trịnh Hoài Nam         | 21521167         | Thành Viên     |
| 6   | Huỳnh An Nghiệp        | 21522377         | Thành Viên     |
| 7   | Bùi Xuân Nhi           | 21522422         | Thành Viên     |

## Công nghệ sử dụng

Nhóm sử dụng NodeJS, ExpressJS, Xampp, jQuery, EJS, ...

## Cài Đặt

### Yêu Cầu Hệ Thống

- Cài đặt [NodeJS](https://nodejs.org/) phiên bản 14.17.0 trở lên.
- Cài đặt [Xampp](https://www.apachefriends.org/download.html) phiên bản 8.0.8 trở lên.

### Hướng Dẫn Cài Đặt

1. **Bước 1:** Clone repo về máy tính của bạn bằng cách sử dụng git command line hoặc download zip file.

    ```bash
    git clone https://github.com/Lamcam/UIT-VNU_IE104_TAA.git
    ```

2. **Bước 2:** Di chuyển vào thư mục dự án.

    ```bash
    cd UIT-VNU_IE104_TAA
    ```

3. **Bước 3:** Cài đặt các dependencies.

    ```bash
    npm install
    ```

4. **Bước 4:** Mở XAMPP và khởi chạy Apache và MySQL.

5. **Bước 4.1:** (Nếu lần đầu chạy) Import file `1_table.sql+2_trigger.sql+3_insert_into.sql` trong thư mục `TAA_BE/config` vào MySQL với tên database mặc định là `database_ie104`.
6. **Bước 4.2:** (Nếu lần đầu chạy) Sửa file `.env` tại thư mục gốc với các thông số như:

    ```bash
    DATABASE_HOST=localhost
    DATABASE_USER=root
    DATABASE_PASSWORD=
    DATABASE_NAME=database_ie104
    ```

7. **Bước 5:** Khởi chạy server.
    
    ```bash
    npm start
    ```

## Cấu Trúc Thư Mục

```bash
├───TAA_BE                             # Thư mục chứa source code backend
│   ├───config                           # Thư mục chứa các file cấu hình (dữ liệu mẫu, cấu hình database, ...)
│   ├───controllers                      # Thư mục chứa các file controller
│   ├───middlewares                      # Thư mục chứa các file middleware
│   ├───models                           # Thư mục chứa các file model
│   ├───routers                          # Thư mục chứa các file router
│   └───app.js                           # File chạy ứng dụng
└───TAA_FE                             # Thư mục chứa source code frontend
    ├───public                           # Thư mục chứa các file tĩnh
    │   ├───fonts                        # Thư mục chứa các font
    │   ├───imgs                         # Thư mục chứa các hình ảnh
    │   ├───logos                        # Thư mục chứa các logo
    │   ├───scripts                      # Thư mục chứa các file js
    │   └───styles                       # Thư mục chứa các file css
    └───views                            # Thư mục chứa các file html/ejs
        ├───components
        ├───homepage
        └───partials
```
