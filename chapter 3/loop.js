// printing till 11
for(let i=0;i<11;i++){
    console.log(i+1);
}


// 1. Standard FOR loop (Runs a specific number of times)
for (let i = 0; i < 3; i++) {
  console.log(`For loop count: ${i}`); // Outputs 0, 1, 2
}

// 2. WHILE loop (Runs as long as the condition is true)
let count = 0;
while (count < 3) {
  console.log(`While loop count: ${count}`); // Outputs 0, 1, 2
  count++;
}

// 3. DO...WHILE loop (Always runs at least once)
let score = 10;
do {
  console.log(`Do...While runs once even if false: ${score}`); // Outputs 10
  score++;
} while (score < 10);

// 4. FOR...OF loop (Iterates over array VALUES)
const fruits = ['apple', 'banana', 'cherry'];
for (const fruit of fruits) {
  console.log(`Fruit value: ${fruit}`); // Outputs 'apple', 'banana', 'cherry'
}

// 5. FOR...IN loop (Iterates over object KEYS)
const car = { make: 'Toyota', model: 'Camry' };
for (const key in car) {
  console.log(`Car ${key}: ${car[key]}`); // Outputs "Car make: Toyota", "Car model: Camry"
}

// 6. BREAK & CONTINUE control statements
for (let n = 1; n <= 5; n++) {
  if (n === 2) continue; // Skips the rest of this iteration
  if (n === 4) break;    // Exits the loop completely
  console.log(`Control loop: ${n}`); // Outputs 1, then 3
}
