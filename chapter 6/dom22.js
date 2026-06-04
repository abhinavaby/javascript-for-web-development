========================
DOM MANIPULATION NOTES
========================

1. ATTRIBUTES
-------------
Attributes provide additional information about HTML elements.

Syntax:

element.getAttribute("attributeName")
→ Returns the value of the specified attribute.

element.setAttribute("attributeName", "value")
→ Sets or updates the value of the specified attribute.

Example:

HTML:
<a id="link" href="https://google.com">Google</a>

JavaScript:
let link = document.getElementById("link");

console.log(link.getAttribute("href"));
// Output: https://google.com

link.setAttribute("href", "https://youtube.com");

console.log(link.getAttribute("href"));
// Output: https://youtube.com


----------------------------------------------------

2. STYLE
---------
Used to access or modify CSS properties of an element.

Syntax:

element.style.propertyName = "value";

Example:

HTML:
<h2 id="heading">Hello JavaScript</h2>

JavaScript:
let h2 = document.getElementById("heading");

h2.style.color = "blue";
h2.style.backgroundColor = "yellow";
h2.style.fontSize = "30px";
h2.style.border = "2px solid black";

----------------------------------------------------

3. COMPLETE EXAMPLE
-------------------

HTML:
<p id="para" class="demo">DOM Manipulation</p>

JavaScript:

let para = document.getElementById("para");

// Get attribute
console.log(para.getAttribute("class"));
// Output: demo

// Set attribute
para.setAttribute("class", "newClass");

// Apply styles
para.style.color = "red";
para.style.fontSize = "25px";
para.style.fontWeight = "bold";

----------------------------------------------------

SUMMARY
--------

getAttribute(attr)
→ Gets the value of an attribute.

setAttribute(attr, value)
→ Sets or changes an attribute value.

node.style
→ Accesses the style object of an element.

node.style.color = "red"
→ Changes text color.

node.style.backgroundColor = "yellow"
→ Changes background color.

node.style.fontSize = "20px"
→ Changes font size.