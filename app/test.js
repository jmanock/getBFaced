$(document).ready(function(){

  $('a').on('click', function(){
    $('#navigation').children('li').remove();
    $('#slider').children('li').remove();
    // need to clear something to get the button to reset to 0
    $('button').remove();

    var t = this.text;
    if(t === 'mani'){
      photos(t);
    }else if(t === 'mens'){
      photos(t);
    }else if(t === 'womens'){
      photos(t);
    }
  }); // end a click

photos = function(x){
$('img').remove();

  var images = [
    {src:'images/'+x+'/1.jpg'},
    {src:'images/'+x+'/2.jpg'},
    {src:'images/'+x+'/3.jpg'},
    {src:'images/'+x+'/4.jpg'},
    {src:'images/'+x+'/5.jpg'},
    {src:'images/'+x+'/6.jpg'},
    {src:'images/'+x+'/7.jpg'},
    {src:'images/'+x+'/8.jpg'},
    {src:'images/'+x+'/9.jpg'},
    {src:'images/'+x+'/10.jpg'},
  ];
  $.each(images, function(index, image){
    $('#slider').append('<li>' +'<img src=' +image.src+'></img></li>');
    $('#navigation').append('<li>'+'</li>');
  });
  $('nav').after('<button id="next">Next</button>');
  $('nav').after('<button id="prev">Prev</button>');
something();
});// end photos function


something = function(){
  var pictures = $('#slider').children('li');
  var navItems = $('#navigation').children('li');
  var currentNav;

  $('#navigation').find('li').first().addClass('active');

  goTo = function(i){
    $(navItems).removeClass('active');
    $('#navigation li').eq(i).addClass('active');
    pictures.fadeOut(400).eq(i).fadeIn(400);
  };

  $('#navigation li').on('click', function(){
    var index = $(this).index();
    goTo(index);
  });

  $('#next').on('click',function(){
    currentNav = parseInt($('.active').index());
    if(currentNav < 10){
      goTo(currentNav + 1);
    }else{
      goTo(0);
    }
  });
  $('#prev').on('click', function(){
    currentNav = parseInt($('.active').index());
    if(currentNav > 0){
      goTo(currentNav -1);
    }else{
      goTo(10);
    }
  });

}; // end something function
)}; // end jquery
