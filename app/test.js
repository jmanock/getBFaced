$(document).ready(function(){
  $('a').on('click', function(){
    $('#navigation').children('li').remove();
    $('#slider').children('li').remove();
    $('button').remove();

    var t = this.text;

    if(t === 'mani'){
      photos(t);
    }else if(t === 'mens'){
      photos(t);
    }else if(t === 'womens'){
      photos(t);
    }
  }); // end menu a click
  photos = function(t){
    $('img').remove();

    var images = [
      {src: 'images/'+t+'/1.jpg'},
      {src: 'images/'+t+'/2.jpg'},
      {src: 'images/'+t+'/3.jpg'},
      {src: 'images/'+t+'/4.jpg'},
      {src: 'images/'+t+'/5.jpg'},
      {src: 'images/'+t+'/6.jpg'},
      {src: 'images/'+t+'/7.jpg'},
      {src: 'images/'+t+'/8.jpg'},
      {src: 'images/'+t+'/9.jpg'},
      {src: 'images/'+t+'/10.jpg'}
    ];
    $.each(images, function(index, image){
      $('#slider').append('<li>'+'<img src='+image.src+'></img></li>');
      $('#navigation').append('<li>'+'</li>');
    });// End each function
    $('nav').after('<button id="next">Next</button>');
    $('nav').after('<button id="prev">Prev</button>');
    something();
  }; // End photos function

  something = function(){
    var pictures = $('#slider').children('li');
    var navItems = $('#navigation').children('li');
    var currentNav;

    $('#navigation').find('li').first().addClass('active');

    goTo = function(i){
      $(navItems).removeClass('active');
      $('#navigation li').eq(i).addClass('active');
      pictures.fadeOut(400).eq(i).fadeIn(400);
    }; // End goTo function

    $('#navigation li').on('click', function(){
      var index = $(this).index();
      console.log(index);
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

    $('#prev').on('click',function(){
      currentNav = parseInt($('.active').index());
      if(currentNav > 0){
        goTo(currentNav -1);
      }else{
        goTo(9);
      }
    });
  }; // end something function
}); // End jQuery
