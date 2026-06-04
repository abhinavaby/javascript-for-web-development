/******************************************************************
 * DOM MANIPULATION - SELECTING ELEMENTS
 ******************************************************************/

// 1. Selecting with ID
// Returns a single element with the specified ID

document.getElementById("myId");

/*
Example:

<h1 id="title">Hello</h1>

let element = document.getElementById("title");
console.log(element);
*/


// -------------------------------------------------------------

// 2. Selecting with Class
// Returns an HTMLCollection of all matching elements

document.getElementsByClassName("myClass");

/*
Example:

<p class="msg">Hello</p>
<p class="msg">World</p>

let elements = document.getElementsByClassName("msg");
console.log(elements);
*/


// -------------------------------------------------------------

// 3. Selecting with Tag
// Returns an HTMLCollection of all matching tags

document.getElementsByTagName("p");

/*
Example:

<p>Paragraph 1</p>
<p>Paragraph 2</p>

let paragraphs = document.getElementsByTagName("p");
console.log(paragraphs);
*/


// -------------------------------------------------------------

// 4. querySelector()
// Returns the first matching element

document.querySelector("#myId");
document.querySelector(".myClass");
document.querySelector("p");

/*
Example:

let element = document.querySelector(".msg");
console.log(element);
*/


// -------------------------------------------------------------

// 5. querySelectorAll()
// Returns all matching elements as a NodeList

document.querySelectorAll(".myClass");

/*
Example:

let elements = document.querySelectorAll(".msg");

elements.forEach(element => {
    console.log(element);
});
*/


/******************************************************************
 * SUMMARY
 ******************************************************************/

// Select by ID
document.getElementById("myId");

// Select by Class
document.getElementsByClassName("myClass");

// Select by Tag
document.getElementsByTagName("p");

// First Matching Element
document.querySelector(".myClass");

// All Matching Elements
document.querySelectorAll(".myClass");