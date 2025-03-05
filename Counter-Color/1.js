let count=document.getElementById("counter")
let increase=document.getElementById('increase-input')
let decrease=document.getElementById('decrease-btn')
let reset=document.getElementById('reset-btn')
let val=0

function setCounterColor(){
    if(val==0)
        count.style.color="rgb(5, 5, 87)"
    else if(val>0)
        count.style.color='green'
    else
        count.style.color='red'
}
function showResult(){
    count.innerText=val;
    setCounterColor()
}
function increaseCount(){
    val+=1
    showResult()
}
function decreaseCount(){
    val-=1;
    showResult()
}
function resetResult(){
    val=0
    showResult();
}
reset.addEventListener('click',resetResult);
increase.addEventListener("click",increaseCount);
decrease.addEventListener('click',decreaseCount);