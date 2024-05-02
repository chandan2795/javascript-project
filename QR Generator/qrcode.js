const qrinput=document.getElementById('qr-input');
const qrimg=document.getElementById('qr-img');
const qrbutton=document.getElementById('qr-btn');

console.log(qrinput,qrimg,qrbutton)


qrbutton.addEventListener('click',()=>{

    const inputvalue= qrinput.value ;
    console.log( inputvalue)

    if(!inputvalue){
        alert("please enter  valid url");
    }
    else {
        qrimg.src=`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${inputvalue};`
        qrimg.alt=`QR code for ${inputvalue}`;
    }
})