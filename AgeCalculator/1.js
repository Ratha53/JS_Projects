let dat=document.getElementById("input")
let calcBtn=document.getElementsByTagName('button')[0]
let op=document.getElementById("output")

    dat.max=new Date().toISOString().split('T')[0];
    
function showResult(){
    let today=new Date()
    let birthDate=new Date(dat.value);

    let age=today.getFullYear()-birthDate.getFullYear();
    let months=today.getMonth()-birthDate.getMonth();
    let days=today.getDate()-birthDate.getDate();
    if(months<0 || (months===0 && days<0))
        age--;
    op.innerText=`You are ${age}-years old`
}

calcBtn.addEventListener('click',showResult)