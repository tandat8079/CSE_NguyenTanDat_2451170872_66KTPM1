let target = Math.floor(Math.random() * 100) + 1;
let attempts = 0;
let maxAttempts = 7;
let guessedNumbers = new Set();

alert("🎯 Chào mừng bạn đến với Game Đoán Số!\nTôi đã chọn một số ngẫu nhiên từ 1 đến 100.");

while (attempts < maxAttempts) {
    let input = prompt(`Lần đoán thứ ${attempts + 1}/${maxAttempts}\nNhập số của bạn:`);
    
    if (input === null) { // Nhấn Cancel
        alert("Game đã kết thúc.");
        break;
    }

    let guess = parseInt(input);

    if (isNaN(guess) || guess < 1 || guess > 100) {
        alert("❌ Vui lòng nhập số hợp lệ từ 1 đến 100!");
        continue;
    }

    if (guessedNumbers.has(guess)) {
        alert("⚠️ Bạn đã đoán số này rồi! Hãy thử số khác.");
        continue;
    }

    guessedNumbers.add(guess);
    attempts++;

    if (guess === target) {
        alert(`🎉 CHÚC MỪNG! Bạn đoán đúng sau ${attempts} lần.\nSố bí mật là ${target}`);
        break;
    } else if (guess < target) {
        alert("🔼 Số cần đoán CAO HƠN!");
    } else {
        alert("🔽 Số cần đoán THẤP HƠN!");
    }
}

if (attempts === maxAttempts && !guessedNumbers.has(target)) {
    alert(`😢 Hết lượt! Đáp án là ${target}`);
}