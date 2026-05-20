# Câu A1:
// đoạn 1
console.log(x);
var x = 5;
output -> undefined

// đoạn 2:
console.log(y);
let y = 10;
output ->ReferenceError: Cannot access 'y' before initialization

// đoạn3:
const z = 15;
z = 20;
console.log(z);
output -> const thì không thể thay đổi giá trị

// đoạn 4:
const arr = [1, 2, 3];
arr.push(4);
console.log(arr);
output: [1, 2, 3, 4]

// đoạn 5:
let a = 1;
{
    let a = 2;
    console.log("Trong block:", a);
}
console.log("Ngoài block:", a);
output -> Trong block: 2
Ngoài block: 1

# giải thích các kết quả bất ngờ
Đoạn 1 (var):
var bị hoisting (kéo lên đầu scope).
Biến được khai báo nhưng chưa gán giá trị → undefined.

Đoạn 2 (let):
let và const cũng bị hoisting nhưng nằm trong Temporal Dead Zone (TDZ).
Truy cập trước khi khai báo → ReferenceError.

Đoạn 3 (const):
const không cho phép gán lại giá trị (re-assignment).
Nhưng nếu là object/array thì có thể thay đổi bên trong.

Đoạn 4:
const chỉ khóa reference (địa chỉ bộ nhớ), không khóa giá trị bên trong.
Nên push(), pop(), thay đổi phần tử vẫn được.

Đoạn 5:
let có block scope (phạm vi trong {}).
Biến a trong block là biến riêng biệt với biến a bên ngoài.

# Câu A2:
### Câu A2 — Data Types & Coercion

```javascript
console.log(typeof null);              // "object"
console.log(typeof undefined);         // "undefined"
console.log(typeof NaN);               // "number"
console.log("5" + 3);                  // "53"
console.log("5" - 3);                  // 2
console.log("5" * "3");                // 15
console.log(true + true);              // 2
console.log([] + []);                  // ""
console.log([] + {});                  // "[object Object]"
console.log({} + []);                  // 0


### giải thích "5" + 3, "5" -3
nếu "5" + 3 js sẽ hiểu đây là cộng chuỗi, còn "5" -3 hoặc các toán tử khác không phải +, nó sẽ chuyển kiểu string sang number và thực hiện phép tính


# Câu A3:
// dự đoán
5 == "5"          // true
5 === "5"         // false
null == undefined // true
null === undefined// false
NaN == NaN        // false
0 == false        // true
0 === false       // false
"" == false       // true
// giải thích
Từ nay nên dùng === (strict equality) hầu hết các trường hợp.
Chỉ dùng == khi thực sự muốn type coercion (rất hiếm).
Lý do: == thực hiện type coercion (ép kiểu) nên dễ gây bug không mong muốn.

# Câu A4:
Tất cả giá trị Falsy trong JavaScript:

false
0 (số không)
"" (empty string)
null
undefined
NaN

Dự đoán kết quả:

if ("0") → In A (truthy)
if ("") → Không in
if ([]) → In C (truthy)
if ({}) → In D (truthy)
if (null) → Không in
if (0) → Không in
if (-1) → In G (truthy)
if (" ") → In H (truthy - khoảng trắng)

# Câu A5:
// Cách 1:
const greeting = `Xin chào ${name}! Bạn ${age} tuổi.`;

// Cách 2:
const url = `https://api.example.com/users/${userId}/orders?page=${page}`;

// Cách 3:
const html = `<div class="card">
    <h2>${title}</h2>
    <p>${description}</p>
    <span>Giá: ${price}đ</span>
</div>`;


# Phần C1:
Lỗi gán thay vì so sánh: if (giaSauGiam = 0) → nên là ===
Không kiểm tra kiểu dữ liệu: Truyền string "100000" vào hàm
Phần trăm > 100 không bị chặn hợp lý
Dùng var trong vòng lặp → closure bug (tất cả in ra 5)
Thiếu ; ở một số dòng
Không có comment rõ ràng
Lỗi ẩn: setTimeout + var gây ra closure problem (in ra 5 năm lần)

Cách sửa lỗi closure: Dùng let thay vì var (block scope).