# Câu A1 - Các loại đầu vào
10 loại đầu vào khác nhau trong thẻ HTML5
1>. type = "email" -> ô nhập text, tự kiểm tra có @ -> dùng cho form đăng, kí đăng nhập
2>. type = "password" -> ô nhập text, ký tự bị ẩn đi(hiển thị bằng các dấu chấm) -> Dùng tạo tài khoản, mật khẩu
3>. type = "number" -> ô tăng giảm giá trị, nhận số để kiểm tra min/max/step -> DÙng để chỉ số lượng sản phẩm
4>. type = "date" -> ô định dạng ngày, định dạng ngày hợp lệ -> dùng để chọn ngày mong muốn
5>. type = "range" -> ô chia khoảng giữa min, max -> dùng để lọc giá sản phẩm
6>. type = "checkbox" -> ô vuông để tích lựa chọn -> DÙng để chọn hoặc đồng ý lựa chọn
7>. type = "radio" -> ô chọn nhưng chỉ được một lựa chọn duy nhất(trong nhóm cùng name) -> dùng để tạo phương thức chuyển khoản
8>. type = "file" -> Ô mở file -> dùng để upload ảnh 
9>. type = "search" -> -Ô text có nút X để xoá nhanh> dùng để tạo thanh tìm kiếm

# Câu A2
Dự đoán:
type="text" required value="" ->Browser sẽ chặn việc gửi đi, và thông báo yêu cầu mình bắt buộc nhập vì có thuộc tính required không cho field rỗng
type="email" value="abc" -> Browser chặn và báo lỗi, vì abc thiếu @ và tên miền(com) vì type = "email" bắt buộc như vậy
type="number" min="1" max="10" value="15" -> Browser sẽ chặn và báo lỗi, vì max là 10 mà value truyền vào là 15
type="text" pattern="[0-9]{10}" value="abc123" -> Browser sẽ chặn vào báo lỗi vì value truyền vào thiếu kí tự và có chữ
type="password" minlength="8" value="123" -> Browser sẽ chặn và báo lỗi vì password tối thiểu là 8 mà value mới có 3 kí tự

# Câu A3
_<label for="email"> quan trọng bởi vì nó là nhãn dán để biến được dữ liệu nhập là mình đang nhập cái gì, nếu không   ,có <label for="email"> thì trình đọc màn hình chỉ đọc dữ liệu text bên trong chứ không biết nó đại diện cho cái gì
- Sử dụng <fieldset>+ <legend> khi có một nhóm nhiều đầu vào có nhiều ngữ nghĩa 
ví dụ:
<fieldset>
  <legend>Thông tin cá nhân</legend>
  <label for="name">Họ tên</label>
  <input type="text" id="name" name="name">

  <label for="dob">Ngày sinh</label>
  <input type="date" id="dob" name="dob">
</fieldset>
- aria-label sử dụng cho các phần tử không có văn bản hiển thị mà trình đọc màn hình cần đọc:
 không nêm dùng aria-label khi đã có label là vì aria-label sẽ ghi đè lên label, nếu mà có 2 nội dung trình đọc màn hình sẽ bỏ qua nội dung bên label, làm thiếu thông tin

 # Câu A4
 thuộc tính loading="lazy" trên thẻ img:
 mặc định trình duyệt là tải tất cả các ảnh kể cả khi chưa kéo đến, loading="lazy" giúp cho khi ta kéo gần tới ảnh, ảnh mới được hiện lên giúp giảm tải băng thông
-không nên dùng loading="lazy" cho ảnh logo



# Câu A5
Dùng cách một là chỉ để trang trí, icon, logo, hoặc ảnh minh hoạ mà không cần chú thích
<img src="product.jpg" alt="iPhone">

Dùng cách 2 có <firgure> + <figcaption> dùng ghi chú cho ảnh , giúp cho screen reader dễ dàng nhận diện hơn, tốt cho SEO
<figure>
    <img src="iphone16-pro-max.jpg" alt="iPhone 16 Pro Max 256GB màu Titan">
    <figcaption>iPhone 16 Pro Max 256GB — Giá chỉ từ 25.990.000đ</figcaption>
</figure>

# Phần C
# Câu C1 
Lỗi 1: Dòng 2 — Text "Tên:" không có <label for="...">, input không có id/name/required
Sửa: <label for="name">Tên:</label>
     <input type="text" id="name" name="name" required placeholder="Nguyễn Văn A">

Lỗi 2: Dòng 4 — Input email không có <label>, id, name, required
Sửa: <label for="email">Email:</label>
     <input type="email" id="email" name="email" required placeholder="Email của bạn">

Lỗi 3: Dòng 6 — Input password không có <label>, id, name, required
Sửa: <label for="password">Mật khẩu:</label>
     <input type="password" id="password" name="password" required placeholder="Mật khẩu">

Lỗi 4: Dòng 7 — Input confirm password không có <label>, id, name
Sửa: <label for="confirm">Nhập lại mật khẩu:</label>
     <input type="password" id="confirm" name="confirm" required placeholder="Nhập lại mật khẩu">

Lỗi 5: Dòng 9 — Phone dùng type="text" thay vì type="tel", không có <label>, name
Sửa: <label for="phone">Số điện thoại:</label>
     <input type="tel" id="phone" name="phone" pattern="[0-9]{10}" placeholder="0901234567">

Lỗi 6: Dòng 11 — <select> không có <label>, id, name
Sửa: <label for="city">Thành phố:</label>
     <select id="city" name="city"> ... </select>

Lỗi 7: Dòng 14 — <label> checkbox không chứa <input type="checkbox"> bên trong
Sửa: <label>
         <input type="checkbox" name="agree" required>
         Tôi đồng ý điều khoản
     </label>

Lỗi 8: Dòng 1 — <form> không có action và method
Sửa: <form action="#" method="POST">
# Câu C2:
1. Pattern CCCD    : [0-9]{12}
   Pattern tài khoản : [0-9]{10,15}

2. HTML5 validation KHÔNG đủ an toàn vì :
   - Có thể bypass bằng DevTools, Postman, curl
   - Chỉ chạy trên browser, không bảo vệ server
   - Backend LUÔN phải validate lại

3. 3 việc HTML5 không làm được :
   - So sánh 2 field (confirm PIN)
   - Kiểm tra dữ liệu đã tồn tại (gọi API)
   - Validate nghiệp vụ phức tạp (checksum CCCD)

4. 2 rủi ro bảo mật :
   - SQL Injection nếu không sanitize input ở backend
   - Dữ liệu rác làm hỏng hệ thống nếu không validate backend

# phần D:
Link video:https://drive.google.com/file/d/1f0Hl3cro3lqToU22RXG16kwTOWP0GWye/view?usp=sharing







