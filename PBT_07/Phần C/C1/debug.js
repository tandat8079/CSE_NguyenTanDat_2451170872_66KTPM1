// function tinhGiaGiamGia(giaBan, phanTramGiam) {
//     if (phanTramGiam < 0 || phanTramGiam > 100) {
//         return "Phần trăm giảm không hợp lệ"
//     }
    
//     var giamGia = giaBan * phanTramGiam / 100
//     let giaSauGiam = giaBan - giamGia
    
//     if (giaSauGiam = 0) {           // Lỗi 1
//         console.log("Sản phẩm miễn phí!")
//     }
    
//     return giaSauGiam
// }

// // Test
// const gia = tinhGiaGiamGia("100000", 20)   // Lỗi 2
// console.log("Giá sau giảm: " + gia + "đ")

// const gia2 = tinhGiaGiamGia(50000, 110)    // Lỗi 3
// console.log("Giá: " + gia2)

// for (var i = 0; i < 5; i++) {              // Lỗi 4,5,6
//     setTimeout(function() {
//         console.log("Item " + i)
//     }, 1000)
// }


function tinhGiaGiamGia(giaBan, phanTramGiam) {
    // Kiểm tra input
    if (typeof giaBan !== 'number' || typeof phanTramGiam !== 'number') {
        return "Lỗi: Giá bán và phần trăm phải là số";
    }
    
    if (phanTramGiam < 0 || phanTramGiam > 100) {
        return "Phần trăm giảm không hợp lệ";
    }
    
    const giamGia = giaBan * phanTramGiam / 100;
    let giaSauGiam = giaBan - giamGia;
    
    if (giaSauGiam === 0) {                    // Sửa: = → ===
        console.log("Sản phẩm miễn phí!");
    }
    
    return giaSauGiam;
}

// ==================== TEST ====================
console.log("Test 1:", tinhGiaGiamGia(100000, 20));
console.log("Test 2:", tinhGiaGiamGia(50000, 110));
console.log("Test 3:", tinhGiaGiamGia(100000, 100));

// Sửa lỗi closure với var
console.log("\n=== Demo lỗi closure với var vs let ===");
for (let i = 0; i < 5; i++) {                  // Dùng let thay vì var
    setTimeout(function() {
        console.log("Item " + i);
    }, 1000);
}