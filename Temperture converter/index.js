let celcius=document.getElementById('celsius');
let kelvin=document.getElementById('Kelvin');
let ferenheit=document.getElementById('Farenheit');


celcius.addEventListener('input',()=>{
    let c=parseFloat(celcius.value);
    let f=(c*9/5) +32;
    let k= c+273.15;
    if(!celcius){
        alert('enter your num')
    }
    ferenheit.value=f;
    kelvin.value=k;
    
})

kelvin.addEventListener('input',()=>{
    let k=parseFloat(kelvin.value);
    let c=k-273.15
    let f=(k-273.15)*9/5+32;
    ferenheit.value=f.toFixed(3);
    celcius.value=c.toFixed(3);
})