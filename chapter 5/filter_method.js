// ==========================================
// 1. SYNTAX & CORE CONCEPT
// ==========================================
// Concept: .filter() tests every element and returns a BRAND NEW array.
// The new array contains ONLY elements that pass your condition (return true).
// It leaves the original array completely untouched (non-mutating).
// Syntax: const filteredArray = array.filter((currentValue, index, array) => { ... })

const scores = [45, 85, 60, 92, 30, 75];


// ==========================================
// 2. COMMON IMPLEMENTATIONS
// ==========================================

// Pattern A: Filtering Numbers (Keep elements that match a mathematical condition)
const passingScores = scores.filter(score => score >= 60);
console.log(passingScores); // [85, 60, 92, 75]
console.log(scores);        // [45, 85, 60, 92, 30, 75] (Original unchanged!)


// Pattern B: Filtering Strings (Search matching items)
const fruits = ['apple', 'banana', 'grapes', 'kiwi', 'orange'];
const longFruits = fruits.filter(fruit => fruit.length > 5);
console.log(longFruits); // ['banana', 'orange']


// Pattern C: Filtering Arrays of Objects (Real-world database queries)
const products = [
    { name: "Laptop", price: 1200, inStock: true },
    { name: "Phone", price: 600, inStock: false },
    { name: "Headphones", price: 150, inStock: true }
];

// Keep only products that are in stock AND cost less than $1000
const budgetAvailableItems = products.filter(item => item.inStock && item.price < 1000);
console.log(budgetAvailableItems); // [{ name: "Headphones", price: 150, inStock: true }]


// ==========================================
// 3. KEY BEHAVIORS & RECONCILIATIONS
// ==========================================

// Behavior 1: The callback function MUST return a truthy or falsy value.
// Returning true keeps the item. Returning false throws it away.
const numbers = [1, 2, 3, 4];
const truthyTest = numbers.filter(() => true); 
console.log(truthyTest); // [1, 2, 3, 4] (Kept everything)


// Behavior 2: If no items pass the test, it returns an empty array [], NOT undefined.
const ultraExpensive = products.filter(item => item.price > 5000);
console.log(ultraExpensive); // []


// Behavior 3: .filter() cannot alter the value of items. It only decides if they stay or go.
// If you want to change item values, combine it with .map() (Method Chaining)
const finalPricesForPassing = scores
    .filter(score => score >= 60)      // Step 1: Keep passing scores [85, 60, 92, 75]
    .map(score => score + 5);          // Step 2: Add 5 bonus points to them
console.log(finalPricesForPassing);    // [90, 65, 97, 80]
