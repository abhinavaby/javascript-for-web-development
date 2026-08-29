// DOM MANIPULATION – ATTRIBUTES & STYLE
// --------------------------------------

// Suppose our HTML is:
// <div id="box">Hello</div>

let node = document.getElementById("box");

// 1. getAttribute(attr)
// ---------------------
// Used to GET the value of an HTML attribute.

// Example:
// <div id="box" class="container">Hello</div>

let value = node.getAttribute("class");
console.log(value); 
// Output: "container"


// 2. setAttribute(attr, value)
// ----------------------------
// Used to SET or CHANGE an HTML attribute.

node.setAttribute("class", "newContainer");

// Now HTML becomes:
// <div id="box" class="newContainer">Hello</div>


// You can also create an attribute if it doesn't exist:
node.setAttribute("title", "This is a box");

// HTML:
// <div id="box" class="newContainer"
//      title="This is a box">Hello</div>


// 3. node.style
// -------------
// Used to CHANGE the CSS style of an element using JavaScript.

node.style.color = "red";
node.style.backgroundColor = "yellow";
node.style.fontSize = "30px";

// Important:
// CSS uses:
// background-color
//
// JavaScript uses:
// backgroundColor
//
// CSS uses:
// font-size
//
// JavaScript uses:
// fontSize


// COMPLETE EXAMPLE
// ----------------

// HTML:
// <div id="box">Hello World</div>

let box = document.getElementById("box");

// Get an attribute
console.log(box.getAttribute("id"));
// Output: "box"

// Set an attribute
box.setAttribute("class", "myBox");

// Change style
box.style.color = "blue";
box.style.backgroundColor = "lightgray";
box.style.padding = "20px";


// EASY WAY TO REMEMBER:
//
// getAttribute()  → GET attribute value
// setAttribute()  → SET/CHANGE attribute value
// style           → CHANGE CSS


// Example:
//
// HTML:
// <div id="box">Hello</div>
//
// JavaScript:
//
// let box = document.getElementById("box");
//
// box.getAttribute("id");       // GET → "box"
// box.setAttribute("title","Hi"); // SET attribute
// box.style.color = "red";      // CHANGE CSS