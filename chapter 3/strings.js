const str = "Hello, World!";

// --- 1. INDEXING & CHARACTER ACCESS ---
console.log(str[0]);               // "H" (Bracket notation - modern and preferred)
console.log(str.charAt(0));        // "H" (charAt method - older alternative)
console.log(str[str.length - 1]);  // "!" (Dynamically gets the last character)
console.log(str[99]);              // undefined (Index out of bounds)

// --- 2. PROPERTY ---
console.log(str.length);           // 13 (Counts total characters)

// --- 3. METHODS ---
console.log(str.indexOf("o"));     // 4 (Finds first index of character)
console.log(str.lastIndexOf("o")); // 8 (Finds last index of character)
console.log(str.indexOf("z"));     // -1 (Returns -1 if character is not found)

console.log(str.slice(0, 5));      // "Hello" (Extracts from index 0 up to, but excluding, 5)
console.log(str.slice(-6));        // "World!" (Negative index counts backwards from the end)

console.log(str.toLowerCase());    // "hello, world!"
console.log(str.toUpperCase());    // "HELLO, WORLD!"
console.log(str.includes("World"));// true (Case-sensitive presence check)
console.log(str.replace("World", "JS")); // "Hello, JS!"
console.log(str.split(", "));      // ["Hello", "World!"] (Splits into array at delimiter)
console.log("  clean  ".trim());   // "clean" (Removes outer whitespace)
