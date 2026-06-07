function createCart() {
    let items = [];
    let discount = { type: 'none', value: 0 };

    function formatPrice(value) {
        return value.toLocaleString('vi-VN') + 'đ';
    }

    function findItem(productId) {
        return items.find(item => item.product.id === productId);
    }

    function calculateSubtotal() {
        return items.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
    }

    function calculateDiscount(subtotal) {
        if (discount.type === 'percent') {
            return subtotal * discount.value;
        }
        if (discount.type === 'fixed') {
            return discount.value;
        }
        return 0;
    }

    return {
        addItem(product, quantity = 1) {
            const existing = findItem(product.id);
            if (existing) {
                existing.quantity += quantity;
                return;
            }
            items.push({ product, quantity });
        },
        removeItem(productId) {
            items = items.filter(item => item.product.id !== productId);
        },
        updateQuantity(productId, newQuantity) {
            const existing = findItem(productId);
            if (!existing) return;
            if (newQuantity <= 0) {
                this.removeItem(productId);
            } else {
                existing.quantity = newQuantity;
            }
        },
        getTotal() {
            const subtotal = calculateSubtotal();
            const discountAmount = calculateDiscount(subtotal);
            const total = subtotal - discountAmount;
            return Math.max(total, 0);
        },
        applyDiscount(code) {
            const normalized = String(code).trim().toUpperCase();
            if (normalized === 'SALE10') {
                discount = { type: 'percent', value: 0.1 };
            } else if (normalized === 'SALE20') {
                discount = { type: 'percent', value: 0.2 };
            } else if (normalized === 'FREESHIP') {
                discount = { type: 'fixed', value: 30000 };
            } else {
                discount = { type: 'none', value: 0 };
            }
        },
        printCart() {
            if (!items.length) {
                console.log('Giỏ hàng trống');
                return;
            }
            const header = ['#', 'Sản phẩm', 'SL', 'Đơn giá', 'Tổng'];
            const rows = items.map((item, index) => {
                const total = item.product.price * item.quantity;
                return [
                    index + 1,
                    item.product.name,
                    item.quantity,
                    formatPrice(item.product.price),
                    formatPrice(total)
                ];
            });
            console.log(header.join(' | '));
            rows.forEach(row => console.log(row.join(' | ')));
            const subtotal = calculateSubtotal();
            const discountAmount = calculateDiscount(subtotal);
            console.log('Tổng cộng:', formatPrice(this.getTotal()));
            if (discountAmount > 0) {
                console.log('Giảm giá:', formatPrice(discountAmount));
            }
        },
        getItemCount() {
            return items.reduce((sum, item) => sum + item.quantity, 0);
        },
        clearCart() {
            items = [];
            discount = { type: 'none', value: 0 };
        }
    };
}

const cart = createCart();
cart.addItem({ id: 1, name: 'iPhone 16', price: 25990000 }, 1);
cart.addItem({ id: 3, name: 'AirPods Pro', price: 6990000 }, 2);
cart.addItem({ id: 1, name: 'iPhone 16', price: 25990000 }, 1);
cart.printCart();
cart.applyDiscount('SALE10');
cart.printCart();
console.log('Số SP:', cart.getItemCount());
cart.removeItem(3);
console.log('Sau xóa:', cart.getItemCount());
