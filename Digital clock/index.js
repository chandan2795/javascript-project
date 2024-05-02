const timer = document.querySelector('.timer');



function settimer() {
    let time = new Date();
    let h = time.getHours();
    let m = time.getMinutes();
    let s = time.getSeconds();


    h = h < 10 ? '0' + h : h;
    m = m < 10 ? '0' + m : m;
    s = s < 10 ? '0' + s : s;
    let timestring = `${h}:${m}:${s}`

    timer.innerHTML = timestring;

}


setInterval(settimer, 1000)
