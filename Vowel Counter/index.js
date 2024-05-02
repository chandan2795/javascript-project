let textarea=document.querySelector('#text');
let button=document.querySelector('.btn');
let output=document.querySelector('.output');

button.addEventListener('click',()=>{
    if(textarea.value === ''){
        output.innerHTML='plase enter text';
    }else{
        const vol=textarea.value;
        console.log(vol)
        let count=0;
        for(let i=0; i< vol.length; i++ ){
            if(vol[i]=== 'a' || vol[i]=== 'e'|| vol[i]=== 'i'|| vol[i]=== 'o'||vol[i]=== 'u' ){
                count++;
               
            }
        }
        output.innerHTML=`the nuber of vowels in ${count}`;
    }
})


