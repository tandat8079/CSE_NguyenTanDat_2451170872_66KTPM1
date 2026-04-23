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



