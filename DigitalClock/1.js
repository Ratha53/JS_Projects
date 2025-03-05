let h=document.querySelector("#hour")
let m=document.getElementById('minute')
let s=document.querySelector('#second')
let session=document.querySelector(".sessions")

function time(){
    let d=new Date()
    let hr=d.getHours()
    let min=d.getMinutes()
    let sec=d.getSeconds()
    let ses='AM'

    if(hr>=12){
        ses="PM"
    }
    if(hr>12){
        hr%=12
    }
    hr= hr<10? "0"+hr : hr
    min= min<10 ? '0'+min : min
    sec= sec<10 ? "0"+sec : sec

    h.innerText=hr;
    m.innerText=min
    s.innerText=sec;
    session.innerText=ses;

    setTimeout(time,1000)
}

time()