var slideIndex = [1];
var slideId = ["mySlides"];

showSlides(1, 0);


function plusSlides(n, slideshowIndex) {
  showSlides(slideIndex[slideshowIndex] += n, slideshowIndex);
}

function currentSlide(n, slideshowIndex) {
  showSlides(slideIndex[slideshowIndex] = n, slideshowIndex);
}

function showSlides(n, slideshowIndex) {
  var i;
  var slides = document.getElementsByClassName(slideId[slideshowIndex]);
  if (n > slides.length) { slideIndex[slideshowIndex] = 1; }
  if (n < 1) { slideIndex[slideshowIndex] = slides.length; }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex[slideshowIndex] - 1].style.display = "block";
}

document.querySelector('.prev').addEventListener('click', function() {
  plusSlides(-1, 0);
});

document.querySelector('.next').addEventListener('click', function() {
  plusSlides(1, 0);
});