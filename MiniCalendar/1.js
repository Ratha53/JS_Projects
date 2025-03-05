let month=document.getElementById('month')
let day=document.getElementById("day")
let date=document.getElementById('date');
let year=document.getElementById("year")

let today=new Date()
let days=['Sunday','Monday',"Tuesday",'Wednesday',"Thursday",'Friday',"Saturday"]
let months=["January",'February','March',"April",'May',"June","July","August",'September',"October","November",'December']

function showCalendar(){
    month.innerText=months[today.getMonth()]
    day.innerText=days[today.getDay()]
    date.innerText=today.getDate()
    year.innerText=today.getFullYear()
    setTimeout(showCalendar,3600000)
}
showCalendar()