// alert("hello")
console.log("hello");
let g = "white";
let c= document.querySelector("p");
let div=document.querySelector("div");
 let q=0;


function p(){
    if(g == "white"){
        g = "black";
        document.body.style.backgroundColor = "black";
        document.body.style.color = "white";
        c.style.visibility="hidden";
        


        
    }
    else{
        g = "white";
        document.body.style.backgroundColor = "white";
        document.body.style.color = "black";
         c.style.visibility="visible";

    }
    

}

function w(){
       
        let num=document.createElement("p");
        num.innerText=q;
        div.append(num);
        q++;
        

    }
