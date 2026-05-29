// ==========================================
// 1. PRIMITIVE DATA TYPES (Immutable, passed by value)
// ==========================================

// Number: Represents both integers and floating-point decimals.
let age = 25;
let pi = 3.14159;

// String: Represents textual data enclosed in quotes.
let name = "Alex";

// Boolean: Represents logical entities with only two values: true or false.
let isOnline = true;

// Undefined: A variable that has been declared but not assigned a value.
let assignedLater; 
console.log(assignedLater); // Outputs: undefined

// Null: Represents the intentional absence of any object value.
let emptyValue = null;

// BigInt: Represents integers too large to be represented by the normal Number type.
let hugeNumber = 9007199254740991n; // Noted by an 'n' at the end

// Symbol: Represents a unique, anonymous, and immutable identifier.
let uniqueKey = Symbol("id");


// ==========================================
// 2. NON-PRIMITIVE DATA TYPES (Mutable, passed by reference)
// ==========================================

// Object: A collection of key-value pairs.
const userProfile = {
    username: "coder123",
    score: 95
};

// Array: A specialized type of object used to store ordered lists of data.
const colorPalette = ["red", "green", "blue"];

// Function: A callable block of code that is also a specialized object.
const greetUser = function() {
    return "Hello!";
};
