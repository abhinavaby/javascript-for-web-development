// ==========================================
// 1. SYNTAX & CORE CONCEPT
// ==========================================
// Concept: .reduce() runs a callback function on every element to downsize 
// the entire array into a single accumulated output value (number, string, object, array).
// Syntax: array.reduce((accumulator, currentValue, index, array) => { ... }, initialValue)

const numbers = [1, 2, 3, 4];


// ==========================================
// 2. COMMON IMPLEMENTATIONS
// ==========================================

// Pattern A: Summing Numbers (The most common use case)
// The 'accumulator' stores the running total. The '0' at the end is the initial value.
const totalSum = numbers.reduce((accumulator, current) => {
    return accumulator + current;
}, 0);
console.log(totalSum); // 10 (0 + 1 + 2 + 3 + 4)


// Pattern B: Finding the Maximum Value in an Array
const grades = [85, 97, 44, 76, 60];
const highestGrade = grades.reduce((max, current) => {
    return current > max ? current : max;
}, grades[0]); // Starts with the first element as the initial maximum
console.log(highestGrade); // 97


// Pattern C: Tallies / Counting Occurrences (Returning an Object)
const fruitBasket = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple'];
const fruitTally = fruitBasket.reduce((tally, fruit) => {
    tally[fruit] = (tally[fruit] || 0) + 1;
    return tally;
}, {}); // Initializes accumulator as an empty object {}
console.log(fruitTally); // { apple: 3, banana: 2, orange: 1 }


// Pattern D: Grouping Array Objects by a Property
const workers = [
    { name: "Rojith", department: "Engineering" },
    { name: "Alice", department: "Design" },
    { name: "Bob", department: "Engineering" }
];
const groupedByDept = workers.reduce((group, worker) => {
    const dept = worker.department;
    if (!group[dept]) group[dept] = []; // Initialize array for dept if missing
    group[dept].push(worker.name);
    return group;
}, {});
console.log(groupedByDept); 
// { Engineering: ['Rojith', 'Bob'], Design: ['Alice'] }


// ==========================================
// 3. THE CRITICAL RULE
// ==========================================

// Rule: You MUST always return the accumulator at the end of each iteration.
// If you forget to return it, the accumulator becomes undefined on the next step.
const brokenReduce = numbers.reduce((acc, current) => {
    acc + current; // ❌ Forgot to write 'return'
}, 0);
console.log(brokenReduce); // undefined
