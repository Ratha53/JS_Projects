let start=document.querySelector("#start");
let reset=document.getElementById('reset');

let hour=document.getElementById('hour')
let minute=document.getElementById("minute")
let second=document.getElementById('second')
let millisecond=document.getElementById('millisecond')

let hours=0,minutes=0,seconds=0,milliseconds=0
let stats="Start";
let interval=null;

function startStop(){
    if(stats==="Resume" || stats==="Start"){
        stats="Pause"
        start.value=stats;
        start.style.color="blue";
        interval=setInterval(counter,10);
    }
    else{
        stats="Resume";
        start.value=stats;
        start.style.color="blue";
        clearInterval(interval)
    }
}

function resetTime(){
    clearInterval(interval)
    stats='Start'
    start.value='Start';
    start.style.color='green';
    hours=0
    minutes=0
    seconds=0
    milliseconds=0
    showTime()
}

function counter(){
    milliseconds += 10;
    if (milliseconds >= 1000) {
        milliseconds = 0;
        seconds++;
    }
    if (seconds >= 60) {
        seconds = 0;
        minutes++;
    }
    if (minutes >= 60) {
        minutes = 0;
        hours++;
    }
    showTime();
}

function showTime(){
    hour.innerText=(hours>9)?hours:'0'+hours
    minute.innerText=(minutes>9)?minutes:'0'+minutes
    second.innerText=(seconds>9)?seconds:'0'+seconds
    millisecond.innerText= milliseconds.toString().padStart(3, "0");
}

start.addEventListener('click',startStop);
reset.addEventListener('click',resetTime);