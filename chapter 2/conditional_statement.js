// ==========================================
// 1. THE IF STATEMENT (Single condition)
// ==========================================
let mode = "dark";
let color;

if (mode === "dark") {
    color = "black";
}
console.log(color); // Outputs: black


// ==========================================
// 2. THE IF-ELSE STATEMENT (Two outcomes)
// ==========================================
let age = 16;

if (age >= 18) {
    console.log("You can vote.");
} else {
    console.log("You cannot vote."); // This runs because age is 16
}


// ==========================================
// 3. THE ELSE-IF LADDER (Multiple conditions)
// ==========================================
let score = 85;

if (score >= 90) {
    console.log("Grade: A");
} else if (score >= 80) {
    console.log("Grade: B"); // This runs because score is between 80 and 89
} else if (score >= 70) {
    console.log("Grade: C");
} else {
    console.log("Grade: F"); 
}


// ==========================================
// 4. THE SWITCH STATEMENT (Fixed value matching)
// ==========================================
let day = "Tuesday";

switch (day) {
    case "Monday":
        console.log("Start of the work week!");
        break;
    case "Tuesday":
        console.log("It is Tuesday."); // This runs
        break; // Crucial: Prevents code from falling through to the next case
    case "Friday":
        console.log("Weekend is near.");
        break;
    default:
        console.log("Regular weekday."); // Runs if no cases match
}



// ternary operator
let speed = 90;
let ticket = speed > 100 ? "Maximum Fine" : speed > 80 ? "Standard Fine" : "No Fine";
// Evaluates to: "Standard Fine"

