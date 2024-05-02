const colors=["green","red", "rbg(133,122,200)","#f15025"];

const btn =document.getElementById('btn');
const color=document.querySelector('color');


btn.addEventListener('click',()=>{
    const randomNuber = getRendom();
    document.body.style.backgroundColor=colors[randomNuber]
    color.textContent =colors[randomNuber]
})


function getRendom(){
    return Math.round(Math.random()*colors.length);
}