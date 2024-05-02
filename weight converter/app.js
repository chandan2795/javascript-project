const input= document.querySelector('#in');
const output=document.querySelector('#rslt');

input.addEventListener('input',()=>{
    let val=input.value ;
    let out=val*2.2;
    output.innerHTML=out.toFixed(1);
})