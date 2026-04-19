# Câu A1 (5đ) — HTTP & Trình duyệt
# 1.Khi nhập https://shopee.vntrình duyệt và nhấn Enter,thì 5 bước xảy ra là
1.1: Trình duyệt yêu cầu đến DNS sever để chuyển đổi tên miền "shopee.vn" thành địa chỉ IP
1.2: Thực hiện kết nối giữa Client và Sever
1.3: Thực hiện mã hoá kết nối HTTPs an toàn 
1.4: HTTP request (get): gửi yêu cầu lấy nội dung trang về file HTML
1.5: HTTP request response và render: sever trả về HTML, HTML xây khung -> CSS trang trí màu sắc -> JS tạo các thao tác -> hoàn thành và trả về lại giao diện người dùng
Tài liệu tham khảo: 1.2(HTTP), 1.3(Browser rendering)

# 2
# Giải thích đánh dấu
* stutus request 
* request trả về file css
* Tổng thời gian load trang
(Tab Network - Shopee)(screenshot/A1_network.png)


# Câu A2 (5đ) - HTML ngữ nghĩa
# tài liệu tham khảo (04_visible_part_html.md) Semantic
# đánh giá: trang web dưới đây bị đánh giá không tốt là vì dùng quá nhiều thẻ div, thay vì dùng những thẻ khác có ý nghĩa như header, main, footer
4 lỗi có thể liệt kê:
1> Dùng <div class="header"> thay vì thẻ header(dùng riêng cho đầu trang)
2> Dùng <div class="menu"> thay vì nav( thẻ này dùng để điều hướng)
3> Dùng quá nhiều div cho (product, img ...) thay vì dùng <article> dành cho nội dung độc lập
4> Dùng <div class="footer"> thay vì dùng thẻ footer(cuối trang)
# Code sửa:
<header>
    <div class="logo">ShopTLU</div>
    <nav>
        <a href="/">Trang chủ</a>
        <a href="/products">Sản phẩm</a>
    </nav>
</header>

<main>
    <section class="products">
        <article class="product">
            <h2>iPhone 16 Pro</h2>
            <p class="price">25.990.000đ</p>
            <figure>
                <img src="iphone.jpg" alt="iPhone 16 Pro">
                <figcaption>iPhone 16 Pro - Mẫu mới nhất</figcaption>
            </figure>
        </article>
    </section>
</main>

<footer>
    <p>© 2026 ShopTLU</p>
</footer>
# Câu A3: Block and Inline
#tài liệu tham khảo: (04_visible_part_html.md) block and inline
# Mô tả:    
Hộp 1
Text A Text B
Hộp 2
Text c Text D
Hộp 3
đoạn trên được biểu thị như vậy do tính chất của div(Block) và span(inline)
Div là biểu thị theo khối( có chiều cao + rộng)
span là biểu thị theo dòng( dữ liệu nằm trong một dòng)

# Câu A4:
# Tham khảo: 05_tables_hyperlinks.md
# sự khác nhau giữa <thead>, <tbody>, <tfoot>:
<thead>: là phần tiêu đề
<tbody>: là phần nội dung
<tfoot>: là phần chân
# Không nên dùng bảng để tạo bố cục trang web là vì
-Giống như phần A2 nêu dùng bảng để tạo có thể gây nê sai ngũ nghĩa, table tạo ra để thiết kế dữ liệu, không phải để hiển thị bố cục
-Ảnh hưởng đến trợ năng: Nếu hiện bố cục theo dạng bảng(screen reader), nội dung sẽ theo trình tự hàng và cột, gây nhiễu thông tin
-Không thân thiện với SEO(semantic HTML được ưu tiên hơn so với table layout)

# Lỗi cần sửa bài B3
1.Dòng 1 - <!Doctype> thiếu html-<!Doctype html>
2.Dòng 2- <html> thiếu lang="vi" - <html lang ="vi">
3.Dòng 4- <title> không có thẻ đóng - <title>...</title>
4.DÒng 5- Thẻ UTF-8 viết sai - <meta charset="UTF-8">
5.Dòng 8 - <h1> thiếu thẻ đóng - <h1> </h1>
6.Dòng 11- Thẻ a không có thẻ đóng - <a></a>
7.Dòng 18 - Thẻ img src thiếu đóng ngoặc kép - src = ""
8.Dòng 20 - Thẻ <p> và <b> lồng ghép sai - <p> <strong> </strong> </p>
9.table thiếu cấu trúc semantic- bổ sung thêm <thead>, <tbody>
10.Dưới table thừa thẻ main, chỉ dữ lại 1môt thẻ <main>
11.Ở footer, <p> thiếu thẻ đóng -<p> </p>


# Phần C:
# Tài liệu tham khảo:
# (04_visible_part_html.md) Semantic + Bài1 + Bài 2
# C1
<!DOCTYPE html>
<html lang="vi">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>iPhone 16 Pro Max 256GB - ShopTLU</title>
</head>
<body>

    <header> # đây là phần đầu trang chưa các thanh menu
        <nav aria-label="Menu chính">
            <!--Các thanh điều hướng -->
        </nav>
    </header>

    <!-- Breadcrumb --> #Là dạng điều hướng có thứ tự + nav+ol
    <nav aria-label="Breadcrumb">
        <ol> <!--đây là danh sách có sắp xếp -->
            <li><a href="/">Trang chủ</a></li>
            <li><a href="/dien-thoai">Điện thoại</a></li>
            <li><a href="/dien-thoai/apple">Apple</a></li>
            <li aria-current="page">iPhone 16 Pro Max</li>
        </ol>
    </nav>

    <main> # đây là phần chưa nội dung chính của trang
        <article>  <!-- Toàn bộ trang chi tiết sản phẩm là một nội dung độc lập -->

            <!-- Khu vực ảnh sản phẩm -->
            <section id="product-gallery"> # section dùng để nhóm các phần có chủ đề lại với nhau
                <h1>iPhone 16 Pro Max 256GB Titan</h1>  <!-- Chỉ 1 <h1> duy nhất trên trang -->
                <figure> #Nhóm ảnh và chú thích lại với nhau
                    <img src="iphone-main.jpg" alt="iPhone 16 Pro Max màu Titan" loading="lazy">
                    <figcaption>Hình ảnh chính của iPhone 16 Pro Max</figcaption>
                </figure>
                <!-- 4 ảnh sản phẩm nữa-->
            </section>

            <!-- Thông tin sản phẩm -->
            <section id="product-info">
                <p class="price">25.990.000đ</p>
                <div class="rating">****</div>
                <p>Chip A18 Pro mạnh mẽ, camera 48MP, thiết kế titan cao cấp.</p>
                
                <!-- Các nội dung về thông tin sản phẩm khác -->
            </section>

            <!-- Bảng thông số kỹ thuật -->
            <section id="specifications">
                <h2>Thông số kỹ thuật</h2>
                <table> # Đây là phần bảng chưa thông số
                    <thead>
                        <tr>
                            <th>Thông số</th>
                            <th>Chi tiết</th>
                        </tr>
                    </thead>
                    <tbody>
                        <!-- Các dòng thông số -->
                    </tbody>
                </table>
            </section>

            <!-- Đánh giá/ Bình luận-->
            <section id="reviews">
                <h2>Đánh giá từ khách hàng</h2>
                <!--Chia các bài đánh giá thành các article con khác-->
            </section>

        </article>
    </main>

    <!-- Sidebar: Sản phẩm tương tự -->
    <aside id="related-products">
        <h2>Sản phẩm tương tự</h2>
        <!-- Danh sách các sản phẩm gợi ý (dùng <article> cho mỗi sản phẩm) -->
    </aside>

    <footer> # Phần chân trang
        <!-- Footer thông thường -->
        <p>&copy; 2026 ShopTLU. All rights reserved.</p>
    </footer>

</body>
</html>

# C2
Việc dùng thẻ <div> cho mọi thứ là một cách cũ mà sẽ bị hạn chế về nhiều mặt, Thay vào đó ta đã có thẻ ngữ nghĩa(Semnatic HTML)>. Ở đây chúng ta có hai lý do không nên dùng thẻ <div> cho mọi mặt mà thay bằng semantic là vì Seo và Accessibility.Về lợi ích của SEO, Khi Google hiện nay không chỉ đọc nội dung và còn hiểu cấu trúc và ngữ nghĩa.Khi dùng các thẻ semantic thì Google sẽ biết được đâu là phần quan trọng, vậy nếu chỉ dùng các thẻ <div class ="header">... thì Google sẽ phải mất nhiều thời gian để xác định, dẫn đến việc tìm kiếm sẽ bị kém hiệu quả.Về lợi ích Accessibility thì đó là trợ năng khi ta có những người bị khiếm thính, khuyết tật sử screen reader như là VoiceOver...Khi đó semantic sẽ giúp cho screen reader hiểu được cấu trúc đâu là header, main, nav... từ đó hỗ trợ họ sử dụng các trang Web một cách dễ dàng hơn.Ví dụ cụ thể về thẻ semantic khi ta dùng (Article) nó sẽ giúp gộp thông tin, bảng thành một nội dung độc lập, giúp người dùng và các công cụ tìm kiếm hiểu rõ cấu trúc mang lại một trải nghiệm tốt hơn.Tuy nhiên chúng ta vẫn cần dùng thẻ div cho nhiều trường hợp, như là bao đóng thành một khối không có ngữ nghĩa như là chia cột để căn chỉnh.Tóm gọn lại khi ta sử dụng HTMl thì thẻ semantic sẽ không tốn thời gian học thêm, nó giúp cho SEO, Accessibility thân thiện với người dùng hiện nay.Chúng ta nên kết hợp hài hoà giữa semantic và <div> để sử dụng hợp lý.

# Bài B4
# Trang web chọn là shopee
1
1.1>Các thẻ semantic được dùng là
+ có thẻ header chưa nav có logo Shopee, thanh tìm kiếm...
+ Có Main là nội dung chính của trang web gồm hình ảnh, thông tin sản phẩm
+ có thẻ nav được dùng trong breadcrumb để làm đường dẫn( Shopee -> Máy tính laptop ->gaming ->Tai nghe)
+ section: nhiều khu vực hình ảnh, thông tin, đánh giá...
 # (ảnh minh hoạ) (screenshort/B4.1.jpg)
1.2> 2 thẻ dùng dùng đúng semantic(nếu có)
2.Thiết kế trên không có dùng table
3. Tìm 1 form
Method:Get
Action:Trỏ đến endpoin truy cập tìm kiếm nội bộ Shopee
Đầu vào <input type ="text">
 # (ảnh minh hoạ) (screenshort/B4.2.jpg)



# Phần D: Video thực hành
link video thực hành:( https://drive.google.com/file/d/1qLmaZtETinNp4p3ECT3GP4Q0FvyLxF0y/view?usp=drive_link)