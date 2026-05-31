// Qs. For a given array with marks of students -> [85, 97, 44, 37, 76, 60]
// Find the average marks of the entire class.

let numbers=[85, 97, 44, 37, 76, 60];
let sum=0;
let avg=0;
for(let number of numbers){
    sum+=number;
}
avg=sum/numbers.length;
console.log(avg)
alert(`avg=${avg}`)