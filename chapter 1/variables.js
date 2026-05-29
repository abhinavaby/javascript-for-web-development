// in JavaScript, a variable is a named container used to store data values that can be referenced and manipulated in your code.
name="abhinav"
age=22;
price=3.22;
console.log(`hi ${name} you are ${age} years old`);
console.log(price);
x=null;
y=undefined;
console.log(`x=${x} y=${y}`);
ifFalse=true;
console.log(ifFalse);
name=22;// name changed value
console.log(name);


// ever equal to sigh is the assignmsent operator 


// from LLM
// ==========================================
// 1. STRICT SYNTAX RULES (Violations cause errors)
// ==========================================

// RULE: Names must start with a letter, an underscore (_), or a dollar sign ($).
let user = "Alex";     // Valid
let _private = 40;     // Valid
let $price = 99;       // Valid

// RULE: Names CANNOT start with a number.
// let 1stPlace = "Gold"; // SYNTAX ERROR!

// RULE: Names can only contain letters, numbers, underscores, and dollar signs.
let total_1 = 100;     // Valid
// let total-sum = 20;   // SYNTAX ERROR! (Hyphens are interpreted as subtraction)
// let user#1 = "Sam";   // SYNTAX ERROR! (Special characters not allowed)

// RULE: Names are case-sensitive.
let score = 10;
let Score = 20;        // Valid, but treated as a completely different variable.

// RULE: You cannot use JavaScript Reserved Keywords.
// let const = 5;       // SYNTAX ERROR! ('const' is reserved)
// let if = true;        // SYNTAX ERROR! ('if' is reserved)


// ==========================================
// 2. BEST PRACTICE CONVENTIONS (Industry standards)
// ==========================================

// CONVENTION: Use camelCase for standard variables and functions.
let userProfilePicture = "avatar.png"; 

// CONVENTION: Use UPPERCASE_SNAKE_CASE for constants that never change.
const MAX_LOGIN_ATTEMPTS = 5;
const API_URL = "https://example.com";

// CONVENTION: Choose descriptive, meaningful names over short abbreviations.
let timeRemainingInSeconds = 30; // Highly readable
let t = 30;                      // Bad: Unclear what 't' stands for.

//reserved words cannot be used for variable names  
