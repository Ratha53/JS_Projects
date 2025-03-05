let text=document.querySelector("#textarea")
let counter=document.getElementById('counter')
let remain=document.getElementById('remain');
let maxLength=text.getAttribute('maxlength')

text.addEventListener('input',function(){
    let length=text.value.length
    counter.innerText=length;
    remain.innerText=maxLength-length
})