let x=document.getElementById('xvalue')
let y=document.getElementById('yvalue')

window.addEventListener('mousemove',(e)=>{
    x.innerText=e.clientX
    y.innerText=e.clientY
})