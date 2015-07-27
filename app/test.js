$(document).ready(function(){
  $('a').on('click', function(){
    var x = this.text;
    $('#slider').before('<h3>'+x+'</h3>');
    Photos(x);
  });
}); // End jQuery

Photos = function(x){
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
    {src:'images/'+x+'/10.jpg'}
  ];
  $.each(images, function(index, image){
    $('#slider').append('<li>'+'<img src='+image.src+'></img></li>');
    $('#navigation').append('<li>'+'</li>');
  });
  $('#slider').before('<button id="prev">Prev</button>');
  $('#slider').before('<button id="next">Next</button>');
  Navigation();
}; // End of Photos

Navigation = function(){
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
};
