let a=[]
for(let i=0;i<3;i++){
    let b=prompt(`enter the content of ${i+1} div: `);
    a.push(b);
    
}
for(let i = 0; i < 3; i++) {
    let div = document.getElementById(`${i}`);
    let text = document.createTextNode(a[i]);
    console.log(text);
    console.log(a[i])
    div.appendChild(text);
}

