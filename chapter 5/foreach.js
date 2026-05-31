// forEach()
let a=[1,2,3,4,5,6,7]
a.forEach(function w(value){
    console.log(value); // prints every value of the array a
})


let b=["abhinav","rohan","allen"];
b.forEach((val,ind,arr)=>{
    console.log(val,ind,arr);
})
