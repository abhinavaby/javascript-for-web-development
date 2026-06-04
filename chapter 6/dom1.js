let code=window.document;
console.log(code);//prints the html code to the console

//when webpage is loaded the DOM(document object model) is created


// window
//   └─ document
//        └─ html
//             ├─ head
//             │    ├─ meta
//             │    ├─ meta
//             │    ├─ title
//             │    └─ link
//             └─ body
//                  ├─ div
//                  │    ├─ img
//                  │    ├─ h1
//                  │    ├─ p
//                  │    └─ div
//                  └─ script


console.dir(window.document)// prints all properties and methods




console.log(document.body);//prints the body code
console.dir(document.body);//prints the body object


//DOM=help to acess html inside js

document.body.style.backgroundColor="yellow";//to change the background color to yellow


//=================================from LLM========================================

/******************************************************************
 * DOM (Document Object Model) - Complete JavaScript Notes
 *
 * Definition:
 * DOM (Document Object Model) is a tree-like representation of
 * an HTML document. It allows JavaScript to access, modify,
 * create, delete, and style HTML elements dynamically.
 ******************************************************************/

/******************************************************************
 * DOM TREE STRUCTURE
 ******************************************************************/

/*
window
 └── document
      └── html
           ├── head
           │    ├── meta
           │    ├── title
           │    └── link
           │
           └── body
                ├── div
                │    ├── img
                │    ├── h1
                │    ├── p
                │    └── div
                │
                └── script
*/


/******************************************************************
 * HTML FOR PRACTICE
 ******************************************************************/

/*

<!DOCTYPE html>
<html>

<head>
    <title>DOM Tutorial</title>
</head>

<body>

    <h1 id="heading">Hello DOM</h1>

    <p class="message">Paragraph 1</p>
    <p class="message">Paragraph 2</p>

    <button id="btn">Click Me</button>

    <div id="container"></div>

</body>

</html>

*/


/******************************************************************
 * 1. SELECTING ELEMENTS
 ******************************************************************/

// Select by ID
let heading = document.getElementById("heading");

// Select by Class Name
let messages = document.getElementsByClassName("message");

// Select by Tag Name
let paragraphs = document.getElementsByTagName("p");

// Select First Matching Element
let firstParagraph = document.querySelector(".message");

// Select All Matching Elements
let allParagraphs = document.querySelectorAll(".message");


/******************************************************************
 * 2. CHANGING CONTENT
 ******************************************************************/

// Change HTML Content
heading.innerHTML = "<i>Hello World</i>";

// Change Text Content
heading.innerText = "Hello JavaScript";

// Another way
heading.textContent = "Welcome to DOM";


/******************************************************************
 * 3. CHANGING CSS STYLES
 ******************************************************************/

heading.style.color = "red";
heading.style.backgroundColor = "yellow";
heading.style.fontSize = "40px";
heading.style.textAlign = "center";
heading.style.padding = "10px";


/******************************************************************
 * 4. GETTING ATTRIBUTES
 ******************************************************************/

// Example HTML
// <img id="image" src="photo.jpg">

let image = document.getElementById("image");

// Get Attribute
image.getAttribute("src");

// Get Attribute
image.getAttribute("id");


/******************************************************************
 * 5. SETTING ATTRIBUTES
 ******************************************************************/

image.setAttribute("src", "newphoto.jpg");
image.setAttribute("alt", "Profile Photo");


/******************************************************************
 * 6. REMOVING ATTRIBUTES
 ******************************************************************/

image.removeAttribute("alt");


/******************************************************************
 * 7. WORKING WITH CLASSES
 ******************************************************************/

let box = document.querySelector(".box");

// Add Class
box.classList.add("active");

// Remove Class
box.classList.remove("active");

// Toggle Class
box.classList.toggle("active");

// Check Class
box.classList.contains("active");


/******************************************************************
 * 8. CREATING ELEMENTS
 ******************************************************************/

let newElement = document.createElement("h2");

newElement.innerText = "New Heading";


/******************************************************************
 * 9. APPENDING ELEMENTS
 ******************************************************************/

document.body.appendChild(newElement);


/******************************************************************
 * 10. INSERTING ELEMENTS
 ******************************************************************/

let div = document.getElementById("container");

let para = document.createElement("p");

para.innerText = "Inserted Paragraph";

div.appendChild(para);


/******************************************************************
 * 11. REMOVING ELEMENTS
 ******************************************************************/

para.remove();


/******************************************************************
 * 12. REPLACING ELEMENTS
 ******************************************************************/

let newPara = document.createElement("p");

newPara.innerText = "Replacement Paragraph";

div.replaceChild(newPara, para);


/******************************************************************
 * 13. DOM TRAVERSING
 ******************************************************************/

let element = document.querySelector("p");

// Parent
element.parentElement;

// Children
element.children;

// First Child
element.firstElementChild;

// Last Child
element.lastElementChild;

// Next Sibling
element.nextElementSibling;

// Previous Sibling
element.previousElementSibling;


/******************************************************************
 * 14. EVENT HANDLING
 ******************************************************************/

let button = document.getElementById("btn");

// Click Event
button.addEventListener("click", function () {
    alert("Button Clicked");
});


/******************************************************************
 * 15. COMMON EVENTS
 ******************************************************************/

// Click
button.addEventListener("click", () => {
    console.log("Clicked");
});

// Double Click
button.addEventListener("dblclick", () => {
    console.log("Double Clicked");
});

// Mouse Over
button.addEventListener("mouseover", () => {
    console.log("Mouse Over");
});

// Mouse Out
button.addEventListener("mouseout", () => {
    console.log("Mouse Out");
});

// Key Down
document.addEventListener("keydown", (event) => {
    console.log(event.key);
});

// Key Up
document.addEventListener("keyup", (event) => {
    console.log(event.key);
});


/******************************************************************
 * 16. FORM EVENTS
 ******************************************************************/

let form = document.querySelector("form");

form.addEventListener("submit", (event) => {

    event.preventDefault();

    console.log("Form Submitted");

});


/******************************************************************
 * 17. INPUT EVENTS
 ******************************************************************/

let input = document.querySelector("input");

input.addEventListener("input", () => {

    console.log(input.value);

});


/******************************************************************
 * 18. EVENT OBJECT
 ******************************************************************/

button.addEventListener("click", function (event) {

    console.log(event.target);
    console.log(event.type);

});


/******************************************************************
 * 19. EVENT BUBBLING
 ******************************************************************/

document.getElementById("parent")
.addEventListener("click", () => {

    console.log("Parent Clicked");

});

document.getElementById("child")
.addEventListener("click", () => {

    console.log("Child Clicked");

});


/******************************************************************
 * 20. PREVENT DEFAULT
 ******************************************************************/

let link = document.querySelector("a");

link.addEventListener("click", function(event){

    event.preventDefault();

    console.log("Navigation Blocked");

});


/******************************************************************
 * 21. SETINTERVAL
 ******************************************************************/

setInterval(() => {

    console.log("Runs Every Second");

}, 1000);


/******************************************************************
 * 22. SETTIMEOUT
 ******************************************************************/

setTimeout(() => {

    console.log("Runs Once");

}, 3000);


/******************************************************************
 * 23. BOM (Browser Object Model)
 ******************************************************************/

// Alert
window.alert("Hello");

// Confirm
window.confirm("Are you sure?");

// Prompt
window.prompt("Enter your name");

// Current URL
console.log(window.location.href);

// Reload Page
window.location.reload();


/******************************************************************
 * 24. DOCUMENT PROPERTIES
 ******************************************************************/

document.title;

document.URL;

document.body;

document.head;

document.forms;

document.images;

document.links;


/******************************************************************
 * 25. NODE PROPERTIES
 ******************************************************************/

element.nodeName;

element.nodeType;

element.nodeValue;


/******************************************************************
 * 26. DOM MANIPULATION EXAMPLE
 ******************************************************************/

let btn = document.getElementById("btn");

btn.addEventListener("click", () => {

    document.getElementById("heading")
            .innerText = "DOM Updated Successfully";

});


/******************************************************************
 * 27. DOM METHODS SUMMARY
 ******************************************************************/

document.getElementById();

document.getElementsByClassName();

document.getElementsByTagName();

document.querySelector();

document.querySelectorAll();

document.createElement();

appendChild();

prepend();

before();

after();

replaceChild();

removeChild();

remove();

setAttribute();

getAttribute();

removeAttribute();

addEventListener();

classList.add();

classList.remove();

classList.toggle();


/******************************************************************
 * INTERVIEW / EXAM QUESTIONS
 ******************************************************************/

// Q1. What is DOM?
// DOM is a tree-like representation of an HTML document
// that allows JavaScript to access and manipulate webpage elements.

// Q2. Difference between innerHTML and innerText?
//
// innerHTML -> Reads/Writes HTML Tags
// innerText -> Reads/Writes Text Only

// Q3. Difference between querySelector and querySelectorAll?
//
// querySelector()     -> First matching element
// querySelectorAll()  -> All matching elements

// Q4. Difference between DOM and BOM?
//
// DOM -> Works with HTML Document
// BOM -> Works with Browser Window

/******************************************************************
 * END OF DOM NOTES
 ******************************************************************/




