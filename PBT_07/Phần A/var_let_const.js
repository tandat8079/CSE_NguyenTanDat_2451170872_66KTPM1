
---






//  Câu A1: var / let / const 

console.log("=== Đoạn 1: var ===");
console.log(x);
var x = 5;
console.log(x);

console.log("\n=== Đoạn 2: let ===");
// console.log(y);   
let y = 10;
console.log(y);

console.log("\n=== Đoạn 3: const ===");
const z = 15;
// z = 20;          
console.log(z);

console.log("\n=== Đoạn 4: const với array ===");
const arr = [1, 2, 3];
arr.push(4);
console.log(arr);

console.log("\n=== Đoạn 5: Block Scope ===");
let a = 1;
{
    let a = 2;
    console.log("Trong block:", a);
}
console.log("Ngoài block:", a);