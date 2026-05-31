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






//advanced

// === 1. FINDING & SEARCHING ===
const numbers = [5, 12, 8, 130, 44, 130];

// find: Returns the first element that passes a test
const found = numbers.find(num => num > 10); // 12

// findIndex: Returns the index of the first element that passes a test
const index = numbers.findIndex(num => num > 10); // 1

// findLast: Returns the last element that passes a test
const lastFound = numbers.findLast(num => num > 10); // 130

// findLastIndex: Returns the index of the last element that passes a test
const lastIndex = numbers.findLastIndex(num => num > 10); // 5


// === 2. BOOLEAN CHECKS ===
// some: Checks if AT LEAST ONE element passes a test
const hasLargeNum = numbers.some(num => num > 100); // true

// every: Checks if ALL elements pass a test
const allPositive = numbers.every(num => num > 0); // true


// === 3. SUBSETS & MODIFICATIONS ===
const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];

// slice: Extracts a section into a NEW array (does not change original)
const subset = animals.slice(2, 4); // ['camel', 'duck']

// splice: Adds/removes elements IN PLACE (modifies the original array)
const months = ['Jan', 'March', 'April'];
months.splice(1, 0, 'Feb'); // Inserts 'Feb' at index 1
// months is now: ['Jan', 'Feb', 'March', 'April']


// === 4. ORDERING & REVERSING ===
const scores = [40, 100, 1, 5, 25];

// sort: Sorts elements in place (mutates original)
scores.sort((a, b) => a - b); // [1, 5, 25, 40, 100]

// reverse: Reverses elements in place (mutates original)
const items = ['one', 'two', 'three'];
items.reverse(); // ['three', 'two', 'one']

// toSorted / toReversed: Modern safe alternatives (returns a NEW array)
const cleanSorted = scores.toSorted((a, b) => b - a); // [100, 40, 25, 5, 1]


// === 5. FLATTENING ===
// flat: Flattens nested arrays down to a specified depth
const nested = [1, 2, [3, 4, [5, 6]]];
const flatOne = nested.flat(1); // [1, 2, 3, 4, [5, 6]]
const flatDeep = nested.flat(2); // [1, 2, 3, 4, 5, 6]

// flatMap: Maps each element then flattens the result by 1 level
const phrases = ["hello world", "js arrays"];
const words = phrases.flatMap(str => str.split(" ")); // ['hello', 'world', 'js', 'arrays']


// === 6. UTILITIES ===
// fill: Fills elements with a static value in place
const emptyArr = new Array(3).fill(0); // [0, 0, 0]

// concat: Merges arrays together into a new array
const arr1 = [1, 2];
const arr2 = [3, 4];
const combined = arr1.concat(arr2); // [1, 2, 3, 4]
