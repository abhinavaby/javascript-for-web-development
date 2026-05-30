// === 1. ARRAY PROPERTY ===
const fruits = ['apple', 'banana', 'cherry'];
console.log(fruits.length); // 3 (Returns the number of elements)


// === 2. ADD / REMOVE ELEMENTS ===
fruits.push('date');        // Adds to the end -> ['apple', 'banana', 'cherry', 'date']
fruits.pop();               // Removes from the end -> ['apple', 'banana', 'cherry']
fruits.unshift('apricot');  // Adds to the start -> ['apricot', 'apple', 'banana', 'cherry']
fruits.shift();             // Removes from the start -> ['apple', 'banana', 'cherry']


// === 3. UTILITY METHODS ===
const index = fruits.indexOf('banana'); // 1 (Finds index of an item)
const hasApple = fruits.includes('apple'); // true (Checks if item exists)
const text = fruits.join(', '); // "apple, banana, cherry" (Joins into string)


// === 4. ADVANCED METHODS (LOOPS & TRANSFORMS) ===
// forEach: Executes a function for each element
fruits.forEach(fruit => console.log(fruit)); 

// map: Creates a new array by transforming elements
const upperFruits = fruits.map(fruit => fruit.toUpperCase()); 
// ['APPLE', 'BANANA', 'CHERRY']

// filter: Creates a new array with elements that pass a test
const longNames = fruits.filter(fruit => fruit.length > 5); 
// ['banana', 'cherry']

// reduce: Reduces the array to a single value
const numbers = [1, 2, 3, 4];
const sum = numbers.reduce((total, num) => total + num, 0); // 10
