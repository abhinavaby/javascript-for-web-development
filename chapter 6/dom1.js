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

document.body.style.backgroundColor="yellow";
