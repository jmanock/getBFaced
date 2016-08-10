var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(x){
  showDivs(slideIndex += x);
}

function showDivs(x){
  var i;
  var n = document.getElementsByClassName('slide');
  if(x > n.length){
    slideIndex = 1;
  }
  if(x < 1){
    slideIndex = n.length;
  }
  for(i=0; i < n.length; i++){
    n[i].style.display = 'none';
  }
  
  n[slideIndex - 1].style.display = 'block';
}
// So I do have the numbers of the photos
// Need to add a caption or atleast a trigger to them
