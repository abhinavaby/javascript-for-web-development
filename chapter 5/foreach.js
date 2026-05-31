// forEach()
let a=[1,2,3,4,5,6,7]
a.forEach(function w(value){
    console.log(value); // prints every value of the array a
})


let b=["abhinav","rohan","allen"];
b.forEach((val,ind,arr)=>{
    console.log(val,ind,arr);
})


//====================from LLM=======================


// ==========================================
// 1. SYNTAX & ARGUMENTS BREAKDOWN
// ==========================================

// Syntax: array.forEach((currentValue, index, array) => { ... })
const fruits = ['apple', 'banana', 'cherry'];

fruits.forEach((fruit, index, sourceArray) => {
    // 1st param: The actual item ('apple', 'banana'...)
    // 2nd param: The current index position (0, 1, 2...)
    // 3rd param: The entire original array structure
    console.log(`Index ${index}: ${fruit} belongs to [${sourceArray}]`);
});


// ==========================================
// 2. COMMON PATTERNS & IMPLEMENTATIONS
// ==========================================

// Pattern A: Short Arrow Function (Most common for printing/logging)
const numbers = [10, 20, 30];
numbers.forEach(num => console.log(num * 2)); // 20, 40, 60


// Pattern B: Passing a Pre-defined External Function
const logItem = (item) => console.log(`Processed: ${item}`);
fruits.forEach(logItem); // Pass function reference directly


// Pattern C: Modifying Object Properties Inside an Array
const inventory = [
    { item: "laptop", price: 1000 },
    { item: "phone", price: 500 }
];
inventory.forEach(product => {
    product.price -= product.price * 0.1; // Modifies original object data in-place
});


// ==========================================
// 3. KEY LIMITATIONS (WHAT NOT TO DO)
// ==========================================

// Limitation 1: It always returns 'undefined' (Cannot assign to a new variable)
const result = fruits.forEach(fruit => fruit.toUpperCase());
console.log(result); // undefined -> Use .map() instead if you want a new array


// Limitation 2: You cannot break or stop the loop early
numbers.forEach(num => {
    if (num === 20) {
        // break;    // ❌ SyntaxError: Illegal break statement
        // continue; // ❌ SyntaxError: Illegal continue statement
        return;      // ⚠️ Acts like 'continue' (skips current step only, doesn't stop loop)
    }
    console.log(`Running for: ${num}`);
});
