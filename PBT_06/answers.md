
---

## 🅱️ TRACK A — BOOTSTRAP 5

#PHẦN A 

# Câu A1 — Grid System

**1. Vẽ layout cho HTML ở 3 kích thước:**
Đoạn code sử dụng hệ thống lưới 12 cột của Bootstrap. Các class `col-12`, `col-md-6`, `col-lg-3` sẽ quy định số cột mà mỗi box chiếm trên từng kích thước màn hình.

| Kích thước | < 768px (Mobile - `xs`, `sm`) | 768px - 991px (Tablet - `md`) | ≥ 992px (Desktop - `lg`, `xl`, `xxl`) |
|---|---|---|---|
| **Số cột** | 1 cột / dòng | 2 cột / dòng | 4 cột / dòng |
| **Box layout** | Chiếm `col-12` (100% chiều rộng). 4 Box xếp chồng lên nhau theo chiều dọc. | Chiếm `col-md-6` (50% chiều rộng). Tạo thành lưới 2x2. | Chiếm `col-lg-3` (25% chiều rộng). 4 Box nằm ngang hàng trên 1 dòng. |

**2. Câu hỏi thêm:**
* **`col-md-6` nghĩa là gì?** Class này chỉ định rằng phần tử sẽ chiếm 6/12 phần (tương đương 50% chiều rộng của container cha) bắt đầu từ breakpoint `md` (kích thước màn hình ≥ 768px) trở lên.
* **Tại sao không cần viết `col-sm-12`?** Bootstrap 5 được thiết kế theo nguyên tắc **Mobile-First** (ưu tiên thiết bị di động trước). Khi bạn viết class `col-12`, nó sẽ mặc định áp dụng cho thiết bị nhỏ nhất (từ 0px trở lên) bao gồm cả `xs` và `sm`. Layout này sẽ tiếp tục giữ nguyên là 12 cột cho đến khi gặp một breakpoint lớn hơn ghi đè nó (ở đây là `md` với `col-md-6`). Do đó, `col-sm-12` là thừa.

# Câu A2 — Utilities & Components

**1. Giải thích class `d-none d-md-block`:**
* `d-none`: Đặt thuộc tính `display: none;` cho phần tử ở mọi kích thước màn hình (ẩn phần tử).
* `d-md-block`: Ghi đè thuộc tính trên thành `display: block;` bắt đầu từ kích thước `md` (≥ 768px) trở lên.
* **Kết luận:** Element này sẽ bị **ẩn trên mobile/màn hình nhỏ (< 768px)** và **hiển thị dưới dạng khối (block) trên tablet và desktop (≥ 768px)**.

**2. Liệt kê 5 spacing utilities và giải thích:**
* `mt-3`: **M**argin **T**op mức độ **3** (khoảng 1rem = 16px).
* `px-4`: **P**adding trên trục **X** (trái và phải) mức độ **4** (khoảng 1.5rem = 24px).
* `mb-auto`: **M**argin **B**ottom thiết lập tự động (`auto`), thường dùng trong flexbox để đẩy các phần tử khác ra xa.
* `py-2`: **P**adding trên trục **Y** (trên và dưới) mức độ **2** (khoảng 0.5rem = 8px).
* `mx-auto`: **M**argin trục **X** (trái, phải) thiết lập tự động (`auto`). Rất phổ biến để căn giữa một phần tử block theo chiều ngang.

**3. Sự khác nhau giữa `.container`, `.container-fluid`, `.container-md`:**
* `.container`: Thiết lập `max-width` cố định. Kích thước này sẽ nhảy từng nấc một dựa theo các breakpoints của Bootstrap (ví dụ: màn hình rộng >1200px thì container rộng 1140px, giúp nội dung luôn gom gọn ở giữa).
* `.container-fluid`: Luôn luôn chiếm 100% chiều rộng của viewport (`width: 100%`) ở mọi kích thước màn hình. Không có khoảng trống hai bên.
* `.container-md`: Chiếm 100% chiều rộng ở các màn hình nhỏ hơn `md` (< 768px). Từ màn hình `md` trở lên, nó mới bắt đầu hoạt động giống như một `.container` bình thường (có `max-width` cố định).

---

### PHẦN C 

#### Câu C1 — Tùy biến Bootstrap

**1. Quy trình đổi màu `$primary` từ xanh sang `#E63946`:**
* **Công cụ cần thiết:** Cần môi trường Node.js và một trình biên dịch SASS/SCSS (như extension Live Sass Compiler trên VS Code, hoặc Webpack/Vite).
* **Quy trình:**
    1.  Tạo một file SCSS của riêng bạn (ví dụ: `custom.scss`).
    2.  Khai báo biến màu mới: `$primary: #E63946;` (phải đặt TRƯỚC khi import Bootstrap).
    3.  Import SCSS gốc của Bootstrap: `@import "node_modules/bootstrap/scss/bootstrap";`.
    4.  Biên dịch file `custom.scss` này thành file `custom.css` và link vào HTML để sử dụng.

**2. Tại sao KHÔNG nên override trực tiếp `.btn-primary { background: red; }`:**
* **Thiếu tính đồng bộ:** Biến `$primary` trong Bootstrap không chỉ dùng cho nút bấm mà còn dùng cho hàng loạt components khác như: `text-primary` (màu chữ), `bg-primary` (màu nền), `alert-primary`, outline, badge,... Việc override từng class tĩnh sẽ mất rất nhiều thời gian và dễ bỏ sót.
* **Mất trạng thái Hover/Focus:** Hàm SASS của Bootstrap tự động tính toán ra màu nhạt hơn/đậm hơn khi hover, focus, active dựa vào màu gốc. Nếu bạn chỉ viết `.btn-primary { background: red; }`, nút bấm sẽ bị "đơ" màu khi hover hoặc bạn phải viết tay lại toàn bộ các pseudo-classes `:hover`, `:active`, `:focus` với mã màu tự tính.

# Câu C2 — So sánh Bootstrap vs CSS thuần

**Phân tích qua 1 Component (Navbar + Product Card):**
1.  **Số dòng CSS:** * *CSS thuần:* Cần viết ít nhất 50-100 dòng CSS để setup Flexbox, styling hover, border, shadow, và media queries cho responsive.
    * *Bootstrap:* 0 dòng CSS tùy chỉnh. Tất cả cấu trúc layout được xây dựng trực tiếp thông qua các class định sẵn trên thẻ HTML (như `navbar`, `card`, `col-md-6`).
2.  **Thời gian phát triển:** Bootstrap nhanh hơn gấp nhiều lần nhờ các components đã được dựng sẵn, chỉ cần copy/paste cấu trúc HTML và sửa nội dung.
3.  **Khả năng tùy biến:** CSS thuần dễ tùy biến vô hạn theo mọi thiết kế UI/UX độc lạ. Bootstrap bị giới hạn trong Design System mặc định của nó. Tùy biến sâu Bootstrap khá vất vả (cần override lại CSS hoặc thiết lập lại SASS phức tạp).
4.  **Khi nào NÊN dùng Bootstrap?** * Làm trang Admin Dashboard, hệ thống quản trị nội bộ.
    * Cần xây dựng bản mẫu (MVP) nhanh chóng để test thị trường.
    * Team không có Designer hoặc yêu cầu UI không quá khắt khe, chỉ cần sạch sẽ, gọn gàng.
5.  **Khi nào KHÔNG NÊN dùng Bootstrap?**
    * Dự án có thiết kế UI/UX rất đặc thù, custom nhiều (ví dụ trang web nghệ thuật, portfolio sáng tạo).
    * Dự án yêu cầu tối ưu kích thước file CSS tuyệt đối (Bootstrap tải về toàn bộ CSS dù bạn chỉ dùng 1 phần nhỏ, gây nặng trang nếu không cấu hình purge).

---

# TRACK B — TAILWINDCSS

### PHẦN A

#### Câu A1 — Utility Classes

Giải nghĩa các class trong thẻ HTML:
* `flex` → `display: flex;` (Kích hoạt Flexbox)
* `items-center` → `align-items: center;` (Căn giữa các phần tử theo trục chéo / dọc)
* `justify-between` → `justify-content: space-between;` (Đẩy các phần tử cách xa nhau về 2 đầu)
* `p-4` → `padding: 1rem;` (Khoảng cách bên trong 16px ở cả 4 phía)
* `bg-white` → `background-color: rgb(255 255 255);` (Màu nền trắng)
* `shadow-md` → Kích hoạt hiệu ứng bóng đổ (box-shadow) mức độ vừa (medium).
* `rounded-lg` → `border-radius: 0.5rem;` (Bo góc 8px).
* `hover:shadow-xl` → Khi di chuột vào (hover), bóng đổ lớn hơn (extra large).
* `transition-shadow` → `transition-property: box-shadow;` (Kích hoạt hiệu ứng chuyển đổi mượt mà cho thuộc tính shadow).
* `duration-300` → `transition-duration: 300ms;` (Thời gian chuyển động là 0.3s).
* `w-16 h-16` → `width: 4rem; height: 4rem;` (Kích thước 64x64px).
* `rounded-full` → `border-radius: 9999px;` (Bo tròn hoàn toàn thành hình tròn).
* `object-cover` → `object-fit: cover;` (Ảnh cắt lấp đầy tỷ lệ khung hình mà không bị méo).
* `ml-4` → `margin-left: 1rem;` (Cách lề trái 16px).
* `flex-1` → `flex: 1 1 0%;` (Cho phép phần tử tự co giãn chiếm phần không gian còn lại).
* `text-lg font-semibold text-gray-800` → Chữ to (`1.125rem`), in đậm vừa (`font-weight: 600`), màu xám đậm.
* `truncate` → Ngăn chữ xuống dòng, nếu quá dài sẽ bị cắt và thêm dấu `...` (kết hợp `overflow: hidden`, `text-overflow: ellipsis`, `white-space: nowrap`).
* `px-4 py-2` → Padding ngang 16px, Padding dọc 8px.
* `focus:ring-2 focus:ring-blue-300` → Khi người dùng click chọn (focus) vào button, thêm viền outline màu xanh nhạt bao quanh nút để báo hiệu.

#### Câu A2 — Responsive & States

**1. Giải thích prefix responsive (`md:`, `lg:`, `xl:`):**
Tailwind thiết kế ưu tiên Mobile-first. 
Ví dụ `grid md:grid-cols-2 lg:grid-cols-4`: 
* Mặc định (mobile), nó sẽ là dạng lưới 1 cột (do không định nghĩa cột).
* Từ màn hình `md` (≥ 768px), layout sẽ chuyển thành 2 cột (`grid-cols-2`).
* Từ màn hình `lg` (≥ 1024px) trở đi, layout sẽ mở rộng thành 4 cột (`grid-cols-4`).

**2. Giải thích state modifiers:**
* `hover:` — Kích hoạt class khi người dùng dùng chuột trỏ vào phần tử.
* `focus:` — Kích hoạt class khi phần tử (như input, button) được chọn/tab vào.
* `active:` — Kích hoạt class ngay tại khoảnh khắc người dùng nhấn và giữ chuột lên phần tử.
* `group-hover:` — Nếu thẻ cha có class `group`, thẻ con mang tiền tố `group-hover:` sẽ được kích hoạt hiệu ứng khi người dùng hover vào thẻ cha (rất hữu ích khi muốn hover cả card nhưng chỉ cái icon bên trong đổi màu).

**3. Class tương đương `d-none d-md-flex`:**
Cú pháp Tailwind: `hidden md:flex`

---

### PHẦN C — PHÂN TÍCH (20 điểm)

#### Câu C1 — Tailwind vs CSS thuần

**1. HTML file size:**
* HTML dùng Tailwind sẽ dài và "cồng kềnh" hơn rất nhiều (tình trạng "class soup") vì 1 phần tử có thể chứa tới 10-20 class.
* HTML viết CSS thuần sẽ gọn gàng, mang tính semantic cao (ví dụ: `class="user-card"`).

**2. Maintainability (Khả năng bảo trì):**
* Tailwind dễ maintain hơn về mặt CSS. Bạn sửa trực tiếp vào thẻ HTML mà không sợ "Dead CSS" (CSS thừa rác) khi xóa element đi. Không phải nhảy tab qua lại giữa file HTML và CSS, và tránh được xung đột class naming (đau đầu việc đặt tên class).
* Tuy nhiên, nếu file HTML quá dài, đọc sẽ rối mắt nếu không định dạng tốt.

**3. Reusability (Khả năng tái sử dụng):**
* CSS thuần tái sử dụng bằng cách gọi tên class.
* Trong Tailwind, không khuyến khích sao chép cả cục class dài ngoằng. Tailwind mạnh nhất khi dùng kèm với các Component Framework (React, Vue) - đóng gói cục HTML chứa class dài thành 1 component `<UserCard />` để tái sử dụng. Hoặc dùng chỉ thị `@apply` trong file CSS để gom các utility class thành 1 class truyền thống (nhưng không nên lạm dụng `@apply` vì làm mất đi triết lý của Tailwind).

#### Câu C2 — Performance

**1. Tại sao file HTML dài class mà file CSS cuối cùng lại NHỎ HƠN Bootstrap?**
* Bootstrap là thư viện nguyên khối. Khi bạn cài Bootstrap, bạn tải toàn bộ hàng nghìn dòng CSS định nghĩa mọi thứ dù bạn chỉ dùng 1 cái nút bấm.
* Tailwind hoạt động theo cơ chế quét mã nguồn. Trình biên dịch của nó quét qua các file HTML/JS của bạn, thấy bạn viết class nào (vd `bg-red-500`) thì nó MỚI sinh ra đúng đoạn CSS cho class đó ở file đầu ra. 

**2. Tailwind PurgeCSS / JIT compiler:**
* **JIT (Just-In-Time) Compiler:** Biên dịch mã CSS theo thời gian thực ngay khi bạn gõ class.
* **Purge (Loại bỏ):** Quá trình build production sẽ "cắt bỏ" tất cả hàng ngàn utility classes có trong tài liệu của Tailwind nhưng không xuất hiện trong file dự án của bạn, dẫn đến file CSS cuối cùng siêu nhẹ (thường dưới 10kb).

**3. Khi nào KHÔNG nên dùng TailwindCSS? (2 tình huống):**
1.  **Khi nội dung HTML được sinh ra từ các trình soạn thảo (Rich Text / WYSIWYG Editor / Markdown):** Bạn không thể (hoặc rất khó) ép người dùng hoặc CMS thêm các class như `text-xl font-bold mb-4` vào từng đoạn văn. (Phải dùng plugin `@tailwindcss/typography` chứ không viết thuần được).
2.  **Dự án cần viết class nội suy động (Dynamic Class Names):** Nếu bạn viết code JS dạng `class="bg-${dynamicColor}-500"`, trình quét PurgeCSS của Tailwind sẽ mù màu và không nhận diện được `bg-red-500` để build, dẫn đến mất CSS trên giao diện thực. Tailwind yêu cầu viết nguyên tên class.