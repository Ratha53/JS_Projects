b=document.getElementsByTagName('input')[0];
c=document.getElementsByTagName('input')[1];
setBtn=document.querySelector('#color')

function setColor(){
    bgColor=b.value
    coloure=c.value
    btnColor()
}
function btnColor(){
    setBtn.style.color=coloure
    setBtn.style.backgroundColor=bgColor
}
function pageColor(){
     document.getElementsByTagName('h1')[0].style.color=coloure;
     document.getElementsByTagName('h1')[0].style.backgroundColor=bgColor;
}

b.addEventListener('input',setColor)
c.addEventListener('input',setColor)
setBtn.addEventListener("click",pageColor)