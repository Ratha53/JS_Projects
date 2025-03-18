let slideIndex=0;
let dot=document.getElementsByClassName("dot");
let slide=document.getElementById('imageSection');

function currentSlide(n){
    slideIndex=n-1;
    showSlides();
    
}

function showSlides(){
    slide.style.background=`url('${slideIndex+1}.jpg')`;
    slide.style.backgroundSize='100% 100%';
    slide.style.transition='2s'

    for(i=0;i<dot.length;i++){
        dot[i].style.backgroundColor='rgb(180, 180, 180)'
    }
    
    dot[slideIndex].style.backgroundColor='rgb(68, 70, 71)'
    
    slideIndex+=1;
    if(slideIndex>=dot.length){
        slideIndex=0;
    }
    setTimeout(showSlides,3000);
}

showSlides();