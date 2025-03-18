let input=document.querySelectorAll('input')
let result=document.getElementById('result')



function showResult(){

    let amount=parseFloat(input[0].value)
    let roi=parseFloat(input[1].value)
    let months=parseFloat(input[2].value)

    interest=(((amount*roi)/100)+amount)/months
    result.innerText=`Monthly Payment:₹${interest.toFixed(2)}/-`
}
input.forEach(element => {
    element.addEventListener('input',showResult)
})
showResult()