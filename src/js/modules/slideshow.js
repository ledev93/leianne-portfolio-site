var slideIndex = 1;
showSlides(slideIndex);

const prev = document.querySelector('.prev');
const next = document.querySelector('.next')
const closeBtn1 = document.getElementById('btn1')
const closeBtn2 = document.getElementById('btn2')

prev.addEventListener('click', () => showSlides(slideIndex += -1))
next.addEventListener('click', () => showSlides(slideIndex += 1))
 




function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    
    if (n > slides.length) {slideIndex = 1}    
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
  
    slides[slideIndex-1].style.display = "block";  
}