# PBT_08 - JavaScript Functions, Arrays & Objects

## Phần A

### A1
1. Function Declaration:
```javascript
function tinhThueBaoHiem(luong) { ... }
```
- Hoisted hoàn toàn, có thể gọi trước khi định nghĩa.

2. Function Expression:
```javascript
const tinhThueBaoHiem = function(luong) { ... };
```
- Không hoisted giá trị hàm, chỉ hoisted biến. Gọi trước khi gán sẽ lỗi.

3. Arrow Function:
```javascript
const tinhThueBaoHiem = (luong) => { ... };
```
- Tương tự function expression, không hoisted hàm.

### A2
Đoạn 1:
- 1, 2, 3, 2, 2

Đoạn 2:
- Output sau 200ms:
```
var: 3
var: 3
var: 3
let: 0
let: 1
let: 2
```
Vì `var` dùng biến chung trong vòng lặp nên `i` bằng 3 khi timeout chạy. `let` tạo phạm vi block cho mỗi lần lặp, nên mỗi callback giữ đúng giá trị riêng.

### A3
```javascript
const even = nums.filter(n => n % 2 === 0);
const times3 = nums.map(n => n * 3);
const sum = nums.reduce((a, b) => a + b, 0);
const firstGreater7 = nums.find(n => n > 7);
const hasOver10 = nums.some(n => n > 10);
const allPositive = nums.every(n => n > 0);
const labels = nums.map(n => `Số ${n} là ${n % 2 === 0 ? 'chẵn' : 'lẻ'}`);
const reversed = [...nums].reverse();
```

### A4
```javascript
const { name, price, specs: { ram, color } } = product;
```
- `console.log(name, price, ram, color);` → `iPhone 16 25990000 8 Titan`
- `console.log(specs);` → ReferenceError, `specs` không tồn tại ở scope ngoài destructuring.

Spread:
- `updated.price` → `23990000`
- `updated.sale` → `true`
- `product.price` → `25990000` (gốc không đổi)

`copy.specs.ram = 16;` sẽ thay đổi `product.specs.ram` thành `16` do `specs` vẫn là object tham chiếu chung.

## Phần C

### C1
Refactor:
```javascript
const processOrders = orders => orders
  .filter(({ status, total }) => status === 'completed' && total > 100000)
  .map(({ id, customer, total }) => ({
    id,
    customer,
    total,
    discount: total * 0.1,
    finalTotal: total * 0.9
  }))
  .sort((a, b) => b.finalTotal - a.finalTotal);
```

### C2
```javascript
const miniArray = {
  map(arr, fn) {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
      result.push(fn(arr[i], i, arr));
    }
    return result;
  },
  filter(arr, fn) {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
      if (fn(arr[i], i, arr)) result.push(arr[i]);
    }
    return result;
  },
  reduce(arr, fn, initialValue) {
    let accumulator = initialValue;
    for (let i = 0; i < arr.length; i++) {
      accumulator = fn(accumulator, arr[i], i, arr);
    }
    return accumulator;
  }
};
```
