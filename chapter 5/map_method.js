// ==========================================
// 1. SYNTAX & CORE CONCEPT
// ==========================================
// Concept: .map() transforms every element and returns a BRAND NEW array.
// It leaves the original array completely untouched (non-mutating).
// Syntax: const newArray = array.map((currentValue, index, array) => { ... })

const numbers = [1, 2, 3, 4, 5];


// ==========================================
// 2. COMMON IMPLEMENTATIONS
// ==========================================

// Pattern A: Inline Arrow Function (Perfect for simple math updates)
const doubled = numbers.map(num => num * 2);
console.log(doubled); // [2, 4, 6, 8, 10]
console.log(numbers); // [1, 2, 3, 4, 5] (Original stays unchanged!)


// Pattern B: Transforming Strings
const names = ['rojith', 'alice', 'bob'];
const capitalized = names.map(name => name.toUpperCase());
console.log(capitalized); // ['ROJITH', 'ALICE', 'BOB']


// Pattern C: Extracting Specific Data from Objects
const users = [
    { id: 101, username: "Rojith", email: "rojith@mail.com" },
    { id: 102, username: "Alice", email: "alice@mail.com" }
];
const emailList = users.map(user => user.email);
console.log(emailList); // ['rojith@mail.com', 'alice@mail.com']


// Pattern D: Modifying Objects and Returning New Ones Safely
const updatedUsers = users.map(user => {
    return {
        ...user,         // Copy existing object properties
        isActive: true   // Add or overwrite a property safely
    };
});


// ==========================================
// 3. KEY DIFFERENCES VS forEach()
// ==========================================

// Difference 1: .map() MUST return a value for each item. 
// If you forget the return statement, the new array will fill with undefined.
const badMap = numbers.map(num => {
    const calculation = num * 10;
    // Forgot to write 'return calculation;'
});
console.log(badMap); // [undefined, undefined, undefined, undefined, undefined]


// Difference 2: .map() always matches the exact length of the original array.
// Do not use .map() to remove items. Use .filter() for that instead.
const wrongFilterAttempt = numbers.map(num => {
    if (num > 3) return num;
});
console.log(wrongFilterAttempt); // [undefined, undefined, undefined, 4, 5]
