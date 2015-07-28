$(document).ready(function(){

  // Slide out menu
  var slideoutMenu = $('.slideout-menu');
  var slideoutMenuWidth = $('.slideout-menu').width();
  $('.menu-btn').on('click', function(e){
    e.preventDefault();

    slideoutMenu.toggleClass('open');
    if(slideoutMenu.hasClass('open')){
      slideoutMenu.animate({
        left:'0px'
      });
      $('.sub').hide();
      $('.submenu').hide();
    }else{
      slideoutMenu.animate({
        left:-slideoutMenuWidth
      }, 250);
    }
  }); // End `Menu-btn` click

  // `Menu` click
  $('.menu').on('click',function(e){
    e.preventDefault();

    $('.other').hide();
    $('img').remove();
    $('h3').remove();

    var x = this.text;

    $('section').append('<h3>'+ x + '</h3>');
    $('.'+x).show();

    slideoutMenu.animate({
      left:-slideoutMenuWidth
    }, 250);
  }); // End `Menu` click

  // `Portfolio` click
  $('.portfolio').on('click', function(e){
    e.preventDefault();
    $('.sub').toggle('slow');
  });

  // `Portfolio` sub menu click
  $('.cat').on('click', function(e){
    e.preventDefault();

    var x = this.text;

    $('.'+x).toggle('slow');
  });

  // Links to show `Pics`
  $('.submenu li a').on('click', function(e){
    e.preventDefault();
    $('.other').hide();

    var x = this.text;

    x = x.toLowerCase();
    Photos(x);

    slideoutMenu.animate({
      left:-slideoutMenuWidth
    },250);
  });
}); // end jQuery

// `Photos` function
Photos = function(x){
  $('img').remove();
  $('#navigation').children('li').remove();
  $('#slider').children('li').remove();
  $('button').remove();
  var images = [
    {src: 'images/'+x+'/1.jpg'},
    {src: 'images/'+x+'/2.jpg'},
    {src: 'images/'+x+'/3.jpg'},
    {src: 'images/'+x+'/4.jpg'},
    {src: 'images/'+x+'/5.jpg'},
    {src: 'images/'+x+'/6.jpg'},
    {src: 'images/'+x+'/7.jpg'},
    {src: 'images/'+x+'/8.jpg'},
    {src: 'images/'+x+'/9.jpg'},
    {src: 'images/'+x+'/10.jpg'}
  ];
  $.each(images, function(index, image){
    $('#slider').append('<li>'+'<img src='+image.src+'></img></li>');
    $('#navigation').append('<li></li>');
  });
  $('#slider').before('<button id="next" class="fa fa-chevron-right">'+'</button>');
  $('#slider').before('<button id="prev" class="fa fa-chevron-left">'+'</button>');
  Navigation();
};

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

  $('#next').on('click', function(){
    currentNav = parseInt($('.active').index());
    if(currentNav < 9){
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
      goTo(9);
    }
  });
  goTo(0);
};
