// Task 1-3
let x = 2;
let y = 4;
let sum = x+y;
let difference = x-y;
let product = x*y;
let quotient = x/y

console.log("SUM", sum);
console.log("Difference:", difference);
console.log("Product:", product);
console.log("Quotient:", quotient);

// Task 4
let num1 = sum;
let num2 = product;

console.log("Updated num1:", sum);
console.log("Updated num2:", product);

// Task 5
let notEqual = num1 != num2;
let isLessThan = num1 < num2;
let strictNotEqual = num1 === num2;

console.log("Is num1 less than num2?", isLessThan);
console.log("Is num1 equal to num2?", strictNotEqual);
console.log("Is num1 not equal to num2?", notEqual);

// Task 6
let isPositive = num1 > 0 && num2 > 0;
let isEven = num1 % 2 === 0 || num2 % 2 === 0;

console.log("Are both numbers positive?", isPositive);
console.log("Is at least one number even?", isEven);

