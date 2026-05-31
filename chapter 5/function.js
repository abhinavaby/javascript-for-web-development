x// ==========================================
// 1. SYNTAX VARIATIONS
// ==========================================

// Function Declaration: Hoisted (can be called before definition)
function greet(name) {
    return `Hello, ${name}!`;
}
console.log(greet("Rojith")); // "Hello, Rojith!"


// Function Expression: Not hoisted (stored inside a variable)
const add = function(a, b) {
    return a + b;
};
console.log(add(5, 3)); // 8


// Arrow Functions (ES6): Shorter syntax, implicit return for single lines
const multiply = (a, b) => a * b; 
console.log(multiply(4, 2)); // 8


// ==========================================
// 2. INPUTS & PARAMETERS
// ==========================================

// Parameters vs Arguments
function profile(name, age) { // 'name' and 'age' are parameters (placeholders)
    console.log(`${name} is ${age} years old.`);
}
profile("Alice", 22); // "Alice" and 22 are arguments (actual values)


// Default Parameters: Used when an argument is missing or undefined
const welcome = (user = "Guest") => `Welcome, ${user}!`;
console.log(welcome()); // "Welcome, Guest!"


// Rest Parameter (...): Gathers any number of arguments into a single array
function sumAll(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
}
console.log(sumAll(1, 2, 3, 4)); // 10


// ==========================================
// 3. ADVANCED FUNCTION BEHAVIOURS
// ==========================================

// Anonymous Function: A function without a name (often used as a callback)
setTimeout(function() {
    console.log("Executed after 1 second");
}, 1000);


// Higher-Order Function: Takes another function as an argument
const calculate = (a, b, operation) => operation(a, b);
const sub = (x, y) => x - y;

console.log(calculate(10, 4, sub)); // 6


// Immediately Invoked Function Expression (IIFE): Runs as soon as it is defined
(function() {
    console.log("This runs automatically right away!");
})();
        