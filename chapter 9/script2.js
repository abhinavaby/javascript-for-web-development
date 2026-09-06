const div1=document.querySelector("#div1");
const div2=document.querySelector("#div2");

div1.addEventListener("click",()=>{
    alert("button 1 was clicked");
});
div2.addEventListener("click",(e)=>{
    alert("button 2 was clicked");
    console.log(e);
    div1.textContent=e.type;

});
