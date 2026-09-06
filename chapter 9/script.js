let s=document.querySelector("#div");
let div2=document.querySelector("#div2");


function w(){
    document.body.style.backgroundColor="brown";
}

let q=()=>{
    s.innerText="you entered the div";

}

let r=()=>{
    s.innerHTML="you left the div";
}

div2.ondblclick=()=>{
    window.location.reload()
}
let a = 0;

div2.onmouseover=()=>{
    document.body.style.backgroundColor="red";
    a++;

     s.innerText=Number(a);

}
div2.onmouseleave=()=>{
    document.body.style.backgroundColor="green";

}

div2.onmouseleave=(e)=>{
    console.log(e)
}