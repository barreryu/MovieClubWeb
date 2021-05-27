var index = 1;
slideShow(index);

function nextslide(i){
  slideShow(index += i);
}

function slideShow(i) {
  var j;
  var slides = document.getElementsByClassName("carasoulSlide")
  if (i > slides.length){index = 1}
  if (i < 1) {index = slides.length}
  for (j = 0; j < slides.length; j++){
    slides[j].style.display = "none";
  }
  slides[index-1].style.display = "block";
  index++;
  if (index>slides.length){index=1};
  setTimeout(slideShow,6000);
}