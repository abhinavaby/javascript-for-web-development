// it is the write way to define variable
// here let , var and const are keywords


    

// ============================================================================
// 1. SCOPE DIFFERENCES
// ============================================================================

// 'var' is FUNCTION-SCOPED. It ignores block brackets like if-statements or loops.
if (true) {
    var functionScoped = "I leak outside the block!";
    let blockScopedLet = "I am locked inside!";
    const blockScopedConst = "I am also locked inside!";
}
console.log(functionScoped); // Works: Prints the string.
// console.log(blockScopedLet);  // ReferenceError: blockScopedLet is not defined
// console.log(blockScopedConst); // ReferenceError: blockScopedConst is not defined


// ============================================================================
// 2. REASSIGNMENT & REDECLARATION
// ============================================================================

// 'var' can be redeclared and reassigned anywhere.
var score = 10;
var score = 20; // Allowed: No error.

// 'let' can be reassigned, but CANNOT be redeclared in the same scope.
let lives = 3;
lives = 2; // Allowed: Value changes.
// let lives = 5; // SyntaxError: Identifier 'lives' has already been declared

// 'const' CANNOT be reassigned and CANNOT be redeclared. It must be initialized immediately.
const PI = 3.14159;
// PI = 3; // TypeError: Assignment to constant variable.
// const MAX_SPEED; // SyntaxError: Missing initializer in const declaration


// NOTE ON CONST: Objects and Arrays declared with 'const' can still mutate their contents!
const user = { name: "Alex" };
user.name = "Sam"; // Allowed: Mutating an internal property is fine.
// user = { name: "Bob" }; // TypeError: Reassigning the whole variable is blocked.


// ============================================================================
// 3. HOISTING & THE TEMPORAL DEAD ZONE (TDZ)
// ============================================================================

// 'var' is hoisted and initialized as 'undefined'.
console.log(varVariable); // Works: Prints 'undefined'
var varVariable = "Hello";

// 'let' and 'const' are hoisted but NOT initialized. They sit in a "Temporal Dead Zone".
// console.log(letVariable); // ReferenceError: Cannot access 'letVariable' before initialization
let letVariable = "World";
