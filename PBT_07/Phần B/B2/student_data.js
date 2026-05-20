const students = [
    { name: "An", math: 8, physics: 7, cs: 9, gender: "M" },
    { name: "Bình", math: 6, physics: 9, cs: 7, gender: "F" },
    { name: "Chi", math: 9, physics: 6, cs: 8, gender: "F" },
    { name: "Dũng", math: 5, physics: 5, cs: 6, gender: "M" },
    { name: "Em", math: 10, physics: 8, cs: 9, gender: "F" },
    { name: "Phong", math: 3, physics: 4, cs: 5, gender: "M" },
    { name: "Giang", math: 7, physics: 7, cs: 7, gender: "F" },
    { name: "Huy", math: 4, physics: 6, cs: 3, gender: "M" },
];

function tinhDiemTB(sv) {
    return (sv.math * 0.4 + sv.physics * 0.3 + sv.cs * 0.3).toFixed(1);
}

function xepLoai(tb) {
    if (tb >= 8.0) return "Giỏi";
    if (tb >= 6.5) return "Khá";
    if (tb >= 5.0) return "Trung bình";
    return "Yếu";
}

// In bảng
console.log("| STT | Tên    | TB   | Xếp loại    |");
console.log("|-----|--------|------|-------------|");

let gioi = 0, kha = 0, tb = 0, yeu = 0;
let maxTB = -1, minTB = 11, svMax = "", svMin = "";
let tongMath = 0, tongPhysics = 0, tongCS = 0;

students.forEach((sv, index) => {
    const diemTB = parseFloat(tinhDiemTB(sv));
    const loai = xepLoai(diemTB);
    
    console.log(`| ${index + 1}   | ${sv.name.padEnd(6)} | ${diemTB.toFixed(1).padEnd(4)} | ${loai.padEnd(10)} |`);
    
    // Đếm xếp loại
    if (loai === "Giỏi") gioi++;
    else if (loai === "Khá") kha++;
    else if (loai === "Trung bình") tb++;
    else yeu++;

    // Tìm max/min
    if (diemTB > maxTB) { maxTB = diemTB; svMax = sv.name; }
    if (diemTB < minTB) { minTB = diemTB; svMin = sv.name; }

    tongMath += sv.math;
    tongPhysics += sv.physics;
    tongCS += sv.cs;
});

console.log("\n=== Thống kê ===");
console.log(`Giỏi: ${gioi} | Khá: ${kha} | Trung bình: ${tb} | Yếu: ${yeu}`);
console.log(`Sinh viên có điểm TB cao nhất: ${svMax} (${maxTB})`);
console.log(`Sinh viên có điểm TB thấp nhất: ${svMin} (${minTB})`);
console.log(`Điểm TB toàn lớp - Math: ${(tongMath/students.length).toFixed(1)}`);
console.log(`Điểm TB toàn lớp - Physics: ${(tongPhysics/students.length).toFixed(1)}`);
console.log(`Điểm TB toàn lớp - CS: ${(tongCS/students.length).toFixed(1)}`);