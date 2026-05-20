# Cau A1
cách 1: inline css
<p style="color: red; font-size: 18px;">Nội dung</p>
-ưu điểm: độ ưu tiên cao(sau !important), không cần file css riêng
-Nhược điểm: khó bảo trì ( vì không tách được file css và html riêng), code khó đọc lộn xộn, không tái sử dụng được
- nên dùng khi test nhanh một file html

cách 2: internal css
<head>
  <style>
    h1 { color: blue; }
    .product { border: 1px solid gray; }
  </style>
</head>
-ưu điểm: tất cả file css nằm trong 1 file html, dễ test khi chỉ có một trang
-nhược điểm: không tái sử dụng được khi chỉ có một trang, file html nặng hơn
- nên dùng khi có 1,2 trang hoặc một project nhỏ

cách 3: External CSS
<head>
  <link rel="stylesheet" href="style.css">
</head>

- ưu điểm: tách biệt hoàn toàn html và css, tái sử dụng được cho nhiều trang, dễ bảo trì, dễ sử dụng
- nhược điểm: phải có thêm một request http, quản lý link đúng đường dẫn
- nên dùng: khi có hầu hết các dự án thực tế, nhiều trang, 
# câu A2
1.> h1
Chọn: ShopTLU
2.> .price
Chọn:
25.990.000đ
45.990.000đ
3.> #app header
Chọn: toàn bộ <header class="top-bar dark"> (bao gồm h1 và nav bên trong)
4.> nav a:first-child
chọn : Home
5.> .product.featured h2
chọn: MacBook Pro
6.> article > p
Chọn: Tất cả 4 thẻ <p>
25.990.000đ
Mô tả sản phẩm... (iPhone)
45.990.000đ
Mô tả sản phẩm... (MacBook)
7.>a[href="/"]
Chọn: Home
8.> .top-bar.dark h1
Chọn: ShopTLU

# Câu A3
# trường hợp 1: content box
.box-1 {
    width: 400px;
    padding: 20px;
    border: 5px solid black;
    margin: 10px;
}
Chiều rộng hiển thị (content + padding + border) = 450px
Content width: 400px
Padding trái + phải: 20 + 20 = 40px
Border trái + phải: 5 + 5 = 10px
Tổng = 400 + 40 + 10 = 450px

Không gian chiếm trên trang (bao gồm margin) = 470px
Chiều rộng hiển thị: 450px
Margin trái + phải: 10 + 10 = 20px
Tổng = 450 + 20 = 470px
# trường hợp 2: border-box
.box-2 {
    box-sizing: border-box;
    width: 400px;
    padding: 20px;
    border: 5px solid black;
    margin: 10px;
}
Chiều rộng hiển thị = 400px
(width bao gồm cả content + padding + border)
Kích thước content thực tế = 340px
Width tổng (content + padding + border) = 400px
Padding trái + phải = 40px
Border trái + phải = 10px
Content width = 400 - 40 - 10 = 340px

Không gian chiếm trên trang (bao gồm margin) = 420px
Chiều rộng hiển thị: 400px
Margin trái + phải: 20px
Tổng = 400 + 20 = 420px
# trường hợp 3: Margin Collapse
.box-a { margin-bottom: 25px; }
.box-b { margin-top: 40px; }
Khoảng cách giữa box-a và box-b = 40px -> max(25px, 40px) = 40px

Nâng cao: Nếu .box-acó margin-bottom: -10pxvà .box-bcó margin-top: 40px, khoảng cách = bao nhiêu?
max(40px, -10px) = 40px sau đó + với số âm 40px + -10px = 30px

# Câu a4
<p class="price" id="main-price">Giá sản phẩm</p>
 về các rule css
 p { color: black; }                    /* Rule A */
.price { color: blue; }               /* Rule B */
#main-price { color: red; }           /* Rule C */
p.price { color: green; }             /* Rule D */
1. Tính specificity cho từng rule:

Rule A (p): (0, 0, 1)
Rule B (.price): (0, 1, 0)
Rule C (#main-price): (1, 0, 0)
Rule D (p.price): (0, 1, 1)

2. Element sẽ có màu gì?
Element sẽ có màu đỏ (red).
Lý do: Rule C (#main-price) có specificity cao nhất là (1, 0, 0), nên nó thắng các rule còn lại.
3. Nếu thêm inline style:
<p class="price" id="main-price" style="color: orange;">
Element sẽ có màu cam (orange).
Lý do: Inline style có specificity tương đương (1, 0, 0, 0), cao hơn tất cả các selector thông thường.
4. Nếu Rule A thêm !important:
p { color: black !important; }
# Bài B1 — Style trang Profile

- Đã sử dụng external CSS (`style.css`)
- Dòng đầu tiên: `* { box-sizing: border-box; }` ✓
- Sử dụng ít nhất 5 loại selector:
  1. Element selector (`body`, `header`, `table`, `th`, `footer`)
  2. Class selector (`.active`)
  3. Descendant selector (`header h1`, `nav a`)
  4. Pseudo-class (`:hover`, `:nth-child(even)`)
  5. Universal selector (`*`)

Các tính năng đã thực hiện:
- Header gradient + màu trắng
- Navigation: hover đổi màu + gạch chân, active có border
- Table: border-collapse, zebra striping, row hover
- Footer: background đậm, text center


# Bài B2 

Phần 1 — content-box vs border-box:**

- Hộp 1 (content-box): 
  - Chiều rộng thực tế (DevTools) = **350px**
  - Giải thích: 300 (content) + 40 (padding) + 10 (border) = 350px

- Hộp 2 (border-box):
  - Chiều rộng thực tế (DevTools) = **300px**
  - Giải thích: width: 300px đã bao gồm padding + border

**Phần 2 — Layout 3 cột:**

- Tổng chiều rộng container = **1000px**
- Nếu không dùng `border-box`: Tổng thực tế = 250+40+10 + 500+40+10 + 250+40+10 = **1150px** → vỡ layout
- Khi dùng `border-box`: Tổng = đúng **1000px**

# Bài B3 — Specificity Battle

10 CSS Rules (từ specificity thấp → cao):

1. `p` → black → (0,0,1)
2. `.text` → blue → (0,1,0)
3. `.highlight` → green → (0,1,0)
4. `.demo-area p` → purple → (0,1,1)
5. `p.text` → orange → (0,1,1)
6. `p.highlight` → pink → (0,1,1)
7. `.text.highlight` → brown → (0,2,0)
8. `#demo` → red → (1,0,0)
9. `p#demo.text` → teal → (1,1,1)
10. `p#demo.text.highlight` → **gold** → (1,2,1)

Kết quả cuối cùng:** Phần tử hiển thị màu **VÀNG (gold).

Lý do:** Rule cuối cùng `p#demo.text.highlight` có specificity cao nhất `(1,2,1)`.

Thử nghiệm:** Khi thay đổi thứ tự các rule trong file CSS, kết quả **không đổi.  
Vì Specificity quyết định rule nào thắng, không phụ thuộc vào thứ tự (trừ trường hợp specificity bằng nhau).


# C1. Debug CSS Layout

**Code CSS gốc:**

```css
.container {
    width: 960px;
    margin: 0 auto;
}
.sidebar {
    width: 300px;
    padding: 20px;
    border: 1px solid #ccc;
    float: left;
}
.content {
    width: 660px;
    padding: 30px;
    border: 1px solid #ccc;
    float: left;
}

1. Tính chiều rộng thực tế (content-box mặc định):

Sidebar: 300 + (202) + (12) = 342px
Content: 660 + (302) + (12) = 722px
Tổng thực tế = 342 + 722 = 1064px

2. Giải thích layout bị vỡ:
Vì tổng chiều rộng thực tế (1064px) lớn hơn chiều rộng container (960px) nên content bị đẩy xuống dòng dưới.
3. Hai cách sửa:
Cách 1: Dùng border-box
* { box-sizing: border-box; }

.sidebar {
    width: 300px;
    padding: 20px;
    border: 1px solid #ccc;
    float: left;
}
.content {
    width: 660px;
    padding: 30px;
    border: 1px solid #ccc;
    float: left;
} tổng đúng -> = 960px

Cách 2: Không dùng border-box
.sidebar {
    width: 258px;   /* 300 - 40padding - 2border */
    padding: 20px;
    border: 1px solid #ccc;
    float: left;
}
.content {
    width: 628px;   /* 660 - 60padding - 2border */
    padding: 30px;
    border: 1px solid #ccc;
    float: left;
} tổng đúng -> 258+628=886px


# C2
Phân tích:

1."Sản phẩm A" (h2.title.highlight)
    font-size: 20px (từ .card .title { font-size: 20px; })
    color: red
    Lý do: #featured .title specificity (1,0,1) cao hơn .highlight (0,1,0) và .card .title (0,1,1).

2."Mô tả sản phẩm" (p trong card featured)
    color: blue
    Lý do: .card { color: blue; } → color: inherit trên p kế thừa từ .card.

3."Sản phẩm B" (h2.title)
    font-size: 20px (từ .card .title)
    color: blue (từ .card { color: blue; })

4."Mô tả sản phẩm B" (p.highlight)
    color: green
    Lý do: .highlight { color: green !important; } — !important thắng tất cả.

# Phan D
link video: https://drive.google.com/file/d/1CZJ_dNsFPyhh-dCyDX4B36Ws9QjVV8Cx/view?usp=sharing

