const dishes = [
    { name: "Phở bò", price: 65000, quantity: 2 },
    { name: "Trà đá", price: 5000, quantity: 3 },
    { name: "Bún chả", price: 55000, quantity: 1 },
    { name: "Coca", price: 20000, quantity: 2 }
];

function calculateBill(dishes, hasTip = true) {
    let subtotal = 0;
    
    console.log("╔══════════════════════════════════════╗");
    console.log("║        HÓA ĐƠN NHÀ HÀNG           ║");
    console.log("╠══════════════════════════════════════╣");
    
    dishes.forEach((dish, index) => {
        const total = dish.price * dish.quantity;
        subtotal += total;
        console.log(`║ ${index+1}. ${dish.name.padEnd(12)} x${dish.quantity}   @${(dish.price/1000)}k  = ${(total/1000).toFixed(0)}k  ║`);
    });
    
    const day = new Date().getDay(); // 3 = Wednesday
    let discountRate = 0;
    
    if (subtotal > 1000000) discountRate = 0.15;
    else if (subtotal > 500000) discountRate = 0.10;
    
    if (day === 3) discountRate += 0.05; // Giảm thêm thứ 4
    
    const discount = subtotal * discountRate;
    const afterDiscount = subtotal - discount;
    const vat = afterDiscount * 0.08;
    const tip = hasTip ? afterDiscount * 0.05 : 0;
    const total = afterDiscount + vat + tip;
    
    console.log("╠══════════════════════════════════════╣");
    console.log(`║ Tổng cộng:          ${(subtotal/1000).toFixed(0).padStart(10)}k  ║`);
    console.log(`║ Giảm giá (${(discountRate*100).toFixed(0)}%):     ${(discount/1000).toFixed(0).padStart(10)}k  ║`);
    console.log(`║ VAT (8%):            ${(vat/1000).toFixed(0).padStart(10)}k  ║`);
    console.log(`║ Tip (5%):            ${(tip/1000).toFixed(0).padStart(10)}k  ║`);
    console.log("╠══════════════════════════════════════╣");
    console.log(`║ THANH TOÁN:         ${(total/1000).toFixed(0).padStart(10)}k  ║`);
    console.log("╚══════════════════════════════════════╝");
    
    return total;
}

// Chạy
calculateBill(dishes);