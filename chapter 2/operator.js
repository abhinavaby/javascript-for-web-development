// ==========================================
// 1. ARITHMETIC OPERATORS (Math calculations)
// ==========================================
let x = 10;
let y = 3;

console.log(x + y);  // Addition: 13
console.log(x - y);  // Subtraction: 7
console.log(x * y);  // Multiplication: 30
console.log(x / y);  // Division: 3.3333333333333335
console.log(x % y);  // Modulus (Remainder): 1
console.log(x ** y); // Exponentiation (10 to the power of 3): 1000

// Increment & Decrement
x++; // x becomes 11
y--; // y becomes 2


// ==========================================
// 2. ASSIGNMENT OPERATORS (Storing values)
// ==========================================
let a = 5;     // Simple assignment

a += 3;        // Addition assignment (a = a + 3) -> 8
a -= 2;        // Subtraction assignment (a = a - 2) -> 6
a *= 2;        // Multiplication assignment (a = a * 2) -> 12
a /= 4;        // Division assignment (a = a / 4) -> 3


// ==========================================
// 3. COMPARISON OPERATORS (Returns true or false)
// ==========================================
let num = 5;
let strNum = "5";

// Equal to (Checks value only, performs type coercion)
console.log(num == strNum);  // true 

// Strict equal to (Checks BOTH value and data type)
console.log(num === strNum); // false (Number vs String)

console.log(num != strNum);  // Not equal: false
console.log(num !== strNum); // Strict not equal: true
console.log(10 > 5);         // Greater than: true
console.log(10 <= 10);       // Less than or equal to: true


// ==========================================
// 4. LOGICAL OPERATORS (Combining booleans)
// ==========================================
let isAdult = true;
let hasLicense = false;

// AND (&&): True only if BOTH conditions are true
console.log(isAdult && hasLicense); // false

// OR (||): True if AT LEAST ONE condition is true
console.log(isAdult || hasLicense); // true

// NOT (!): Reverses the boolean state
console.log(!isAdult); // false


// ==========================================
// 5. TERNARY OPERATOR (Shorthand for if-else)
// ==========================================
// Syntax: condition ? value_if_true : value_if_false
let age = 20;
let status = (age >= 18) ? "Adult" : "Minor"; 
console.log(status); // "Adult"
