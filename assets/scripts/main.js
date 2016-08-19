var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(x){
  showDivs(slideIndex += x);
}

function showDivs(x){
  var i;
  var slide = document.getElementsByClassName('slide');
  var text = document.getElementsByTagName('figcaption');
  if(x > slide.length){
    slideIndex = 1;
  }
  if(x < 1){
    slideIndex = slide.length;
  }
  for(i = 0; i < slide.length && i < text.length; i++){
    slide[i].style.display = 'none';
    text[i].style.display='none';
  }

  slide[slideIndex - 1].style.display = 'block';
  text[slideIndex - 1].style.display='';
}
/* TODO
  * Media queries redo
  * Update js page with comments and better var names
  * Add more pics and awards
*/
