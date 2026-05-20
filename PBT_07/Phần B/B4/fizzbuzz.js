// Version 1: Classic FizzBuzz
console.log("=== Classic FizzBuzz ===");
for (let i = 1; i <= 100; i++) {
    let output = "";
    if (i % 3 === 0) output += "Fizz";
    if (i % 5 === 0) output += "Buzz";
    console.log(output || i);
}

// Version 2: Custom FizzBuzz
function customFizzBuzz(n, rules) {
    console.log(`\n=== Custom FizzBuzz (n=${n}) ===`);
    for (let i = 1; i <= n; i++) {
        let result = "";
        for (let rule of rules) {
            if (i % rule.divisor === 0) {
                result += rule.word;
            }
        }
        console.log(result || i);
    }
}

// Test
customFizzBuzz(30, [
    { divisor: 3, word: "Fizz" },
    { divisor: 5, word: "Buzz" },
    { divisor: 7, word: "Jazz" }
]);