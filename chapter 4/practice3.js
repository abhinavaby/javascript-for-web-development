// Qs. Create an array to store companies -> "Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"

// a. Remove the first company from the array
// b. Remove Uber & Add Ola in its place
// c. Add Amazon at the end

let list=["Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"];
list.shift() //a
console.log(list)
list.splice(1,1,"ola")  //b
console.log(list) 
list.push("Amazon") // c
console.log(list)