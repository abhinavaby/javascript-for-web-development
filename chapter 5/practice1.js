// Qs. Create a function using the "function" keyword that takes a String as an argument & returns the number of vowels in the string.

// Qs. Create an arrow function to perform the same task.


function vovels(a){
    let c=0;
    let char="aeiou";
    for(let w of char){
        if(a.includes(w)){
            c++;

        }
    }

    return c;


    

   
}
let char=prompt("enter the word: ");
let value=vovels(char);
console.log(`the number of vovels is ${value}`);




//arrow function
const vov=(a)=>{
    let c=0;
    let char="aeiou";
    for(let w of char){
        if(a.includes(w)){
            c++;

        }
    }

    return c;
}
let char=prompt("enter the word: ");
let value=vov(char);
console.log(`the number of vovels is ${value}`);
