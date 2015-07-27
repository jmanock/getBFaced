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
    $('h3').remove();
    var x = this.text;
    $('footer').before('<h3>'+x+'</h3>');
    x = x.toLowerCase();
    console.log(x);

    slideoutMenu.animate({
      left:-slideoutMenuWidth
    },250);
  });

}); // end jQuery
