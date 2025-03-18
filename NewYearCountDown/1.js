let newyear=document.querySelector(".newyear")
let days=document.getElementById('days')
let hours=document.getElementById('hours')
let minutes=document.getElementById('minutes')
let seconds=document.getElementById('seconds');

let nextYear=new Date().getFullYear()+1;

let newYearTime=new Date(`${nextYear}-01-01T00:00:00`).getTime()

function showNewYear(){
    let now=new Date().getTime()
    let timeLeft=newYearTime-now

    let d = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    let h = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let m = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    let s = Math.floor((timeLeft % (1000 * 60)) / 1000);

    days.innerHTML=d+"<br>Days"
    hours.innerHTML=h+'<br>Hours'
    minutes.innerHTML=`${m}<br>Minutes`;
    seconds.innerHTML=`${s}<br>Seconds`

    newyear.innerText=nextYear
    setTimeout(showNewYear,1000)
}
showNewYear();