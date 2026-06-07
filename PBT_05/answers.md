# PHẦN A — 
## Câu A1 (5đ) — Viewport & Mobile-First

1. Viết chính xác thẻ `<meta viewport>` chuẩn. Giải thích từng thuộc tính.
2. Nếu THIẾU thẻ này, iPhone sẽ hiển thị trang web như thế nào? (Đọc chương 13)
3. Mobile-First và Desktop-First khác nhau thế nào? Viết ví dụ CSS cho mỗi cách với breakpoint 768px. Tại sao Mobile-First được khuyên dùng?

## Trả lời

1. Thẻ `<meta viewport>` chuẩn

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
```

🔹 Giải thích <br>

`width=device-width`

- Đặt chiều rộng viewport bằng đúng chiều rộng thiết bị
- Giúp website hiển thị đúng trên điện thoại

🔹 Ví dụ:

- iPhone rộng 390px
- Viewport cũng = 390px

`initial-scale=1.0`

- Mức zoom ban đầu = 100%
- Không tự zoom in/out khi mở trang

2. Nếu thiếu thẻ viewport

🔹 iPhone sẽ:

- giả lập website desktop (~980px)
- tự thu nhỏ toàn bộ trang

🔹 Kết quả:

- chữ rất nhỏ
- phải zoom tay
- layout responsive hoạt động sai

3. Mobile-First vs Desktop-First

Mobile-First

🔹 Ý tưởng

- CSS mặc định cho mobile
- dùng `min-width` để mở rộng lên tablet/desktop

🔹 Ví dụ

```css
/* Mobile */
.card {
  width: 100%;
}

/* Tablet trở lên */
@media (min-width: 768px) {
  .card {
    width: 50%;
  }
}
```

Desktop-First

🔹 Ý tưởng

- CSS mặc định cho desktop
- dùng `max-width` để thu nhỏ xuống mobile

🔹 Ví dụ

```css
/* Desktop */
.card {
  width: 25%;
}

/* Tablet/mobile */
@media (max-width: 768px) {
  .card {
    width: 100%;
  }
}
```

🔹 Mobile-First được khuyên dùng vì:

- Mobile là thiết bị phổ biến nhất
- CSS gọn hơn
- Hiệu năng tốt hơn
- Responsive tự nhiên hơn
- Google ưu tiên Mobile-First Indexing

## Câu A2 (5đ) — Breakpoints

Ghi lại breakpoints chuẩn (theo tài liệu hoặc Bootstrap). Cho mỗi breakpoint:

- Kích thước pixel
- Thiết bị đại diện
- Ví dụ: lưới sản phẩm nên hiển thị mấy cột?

## Trả lời

| Breakpoint  | Pixel   | Thiết bị     | Ví dụ grid |
| ----------- | ------- | ------------ | ---------- |
| Extra Small | <576px  | Mobile nhỏ   | 1 cột      |
| Small       | ≥576px  | Mobile lớn   | 1-2 cột    |
| Medium      | ≥768px  | Tablet       | 2 cột      |
| Large       | ≥992px  | Laptop       | 3 cột      |
| Extra Large | ≥1200px | Desktop lớn  | 4 cột      |
| XXL         | ≥1400px | Màn hình lớn | 5-6 cột    |

Ví dụ thực tế

🔹 Mobile

```text
[Card]
[Card]
[Card]
```

🔹 Tablet

```text
[Card] [Card]
[Card] [Card]
```

🔹 Desktop

```text
[Card] [Card] [Card] [Card]
```

## Câu A3 (5đ) — Media Queries

Đọc CSS sau, cho biết ở mỗi kích thước màn hình, `.container` có `width` bao nhiêu? Điền bảng.

```css
.container {
  width: 100%;
  padding: 10px;
}

@media (min-width: 576px) {
  .container {
    width: 540px;
  }
}
@media (min-width: 768px) {
  .container {
    width: 720px;
  }
}
@media (min-width: 992px) {
  .container {
    width: 960px;
  }
}
@media (min-width: 1200px) {
  .container {
    width: 1140px;
  }
}
```

| Chiều rộng màn hình | `.container` width |
| ------------------- | ------------------ |
| 375px (iPhone SE)   | ???                |
| 600px               | ???                |
| 800px               | ???                |
| 1000px              | ???                |
| 1400px              | ???                |

## Trả lời

Kết quả:

| Chiều rộng màn hình | `.container` width |
| ------------------- | ------------------ |
| 375px               | 100%               |
| 600px               | 540px              |
| 800px               | 720px              |
| 1000px              | 960px              |
| 1400px              | 1140px             |

---

Giải thích

🔹 375px

Không media query nào match.

```css
width: 100%;
```

🔹 600px

Match:

```css
@media (min-width: 576px);
```

→ width = 540px

🔹 800px

Match:

- 576px
- 768px

Rule sau cùng thắng:

```css
width: 720px;
```

🔹 1000px

Match:

- 576
- 768
- 992

→ width = 960px

🔹 1400px

Match tất cả.

Rule cuối:

```css
width: 1140px;
```

## Câu A4 (5đ) — SCSS Basics

Đọc chương 16. Giải thích 4 tính năng chính của SCSS và cho ví dụ:

1. Variables (`$primary-color`)
2. Nesting (viết CSS lồng nhau)
3. Mixins (`@mixin`, `@include`)
4. `@extend` / Inheritance

Tại sao trình duyệt KHÔNG đọc được file `.scss`? Cần bước gì để chuyển SCSS → CSS?

## Trả lời

**1. Variables**

🔹 Dùng để lưu giá trị tái sử dụng

🔹 Ví dụ

```scss
$primary-color: blue;

button {
  background: $primary-color;
}
```

**2. Nesting**

🔹 Viết CSS lồng nhau

🔹 Ví dụ

```scss
.nav {
  a {
    color: white;
  }

  a:hover {
    color: yellow;
  }
}
```

**3. Mixins**

🔹 Tạo khối CSS tái sử dụng

🔹 Ví dụ

```scss
@mixin flex-center {
  display: flex;
  justify-content: center;
  align-items: center;
}

.box {
  @include flex-center;
}
```

**4. `@extend` / Inheritance**

🔹 Kế thừa CSS từ class khác

🔹 Ví dụ

```scss
.button {
  padding: 10px;
}

.primary-button {
  @extend .button;
  background: blue;
}
```

**Tại sao browser không đọc được `.scss`?**

🔹 Vì:

- `.scss` KHÔNG phải CSS chuẩn
- Browser chỉ hiểu:
  - CSS
  - HTML
  - JS

🔹 SCSS có:

- variables
- mixins
- nesting

→ browser không hiểu trực tiếp.

**Cần bước gì?**

🔹 Phải COMPILE:

```text
SCSS → CSS
```

- Ví dụ:

```bash
sass style.scss style.css
```

🔹 Sau đó browser đọc file `.css`.

# PHẦN B — THỰC HÀNH CODE (60 điểm)

## Bài B1 (25đ) — Responsive Product Page

## Bài B2 (15đ) — CSS Transitions & Animations

## Bài B3 (20đ) — SCSS Refactor

- Lệnh compile SCSS

```bash
sass scss/style.scss style.css
```

# PHẦN C — PHÂN TÍCH (20 điểm)

## Câu C1 (10đ) — Phân tích trang web thực

Chọn 1 trang web nổi tiếng (Shopee, Tiki, VNExpress, YouTube).

1. Mở trang trên **3 kích thước màn hình** khác nhau (dùng DevTools Toggle Device):
   - Mobile (375px)
   - Tablet (768px)
   - Desktop (1440px)
2. Chụp screenshot cả 3 và phân tích:
   - Navigation thay đổi thế nào? (hamburger? dropdown?)
   - Lưới content thay đổi mấy cột?
   - Elements nào bị ẩn trên mobile?
   - Font size có thay đổi không?

3. Mở DevTools → Styles, tìm `@media` rules. Chụp screenshot ít nhất 2 media queries trang đó dùng.

## Câu C2 (10đ) — Thiết kế Responsive Strategy

Bạn được giao thiết kế trang **Đặt bàn nhà hàng** responsive. Trang có:

- Header với logo + điện thoại đặt bàn
- Hero image toàn trang
- Grid 6 ảnh món ăn
- Form đặt bàn (ngày, giờ, số người, ghi chú)
- Bản đồ Google Maps nhúng
- Footer

**Yêu cầu:** Vẽ wireframe (sơ đồ bố cục) cho 3 kích thước: Mobile, Tablet, Desktop.

- Mobile: Những gì bị ẩn? Form nằm đâu?
- Tablet: Grid ảnh mấy cột? Bản đồ nằm đâu?
- Desktop: Layout bao nhiêu cột? Sidebar có không?

Viết CSS skeleton (chỉ layout, không cần chi tiết) dùng Grid + Media Queries Mobile-First.


