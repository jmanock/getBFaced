$(document).ready(function(){
  // Handels clicking nav bar links
  $('.nav li').on('click',function(){
    $(this).addClass('active').siblings().removeClass('active');
  });

  // Hides/Shows the content
  $('li a').on('click', function(){
    $('section').hide();
    $(this.getAttribute('href')).show();

    var x = this.text;
    switch(x){
      case 'About': About(this);
      break;

      case 'Contact': Contact(this);
      break;

      case 'Resume': Resume(this);
      break;

      case 'Beautie': Beautie(this);
      break;

      case 'Editorial': Editorial(this);
      break;

      case 'Fantasy': Fantasy(this);
      break;

      case 'Special': Special(this);
      break;

      case 'Womens': Womens(this);
      break;

      case 'Mens': Mens(this);
      break;

      case 'Mani/Pedi': Mani(this);
      break;

      case 'Acrylic': Acrylic(this);
      break;

      case 'NailArt': NailArt(this);
      break;

    }

  });

  // Thinking of ways to make the files in jQuery not HTML
  About = function(x){
    console.log('this is the about section');
  };

  Resume = function(x){
    console.log('this is the resume section');
  };

  Contact = function(x){
    console.log('this is the contact section');
  };

  Beautie = function(x){
    console.log('this is the beautie section');
    /*
    ~ change them with a swipe or arrow button
    ~ way to change between other sub folders?
    */
    $('img').remove();

    $.each(data.images, function(key, value){
      $('#beautie').append('<img src='+ value.img + ' width=100 height=100></img>');
    });

  };

  Editorial = function(x){
    console.log('this is the editorial section');
  };

  Fantasy = function(x){
    console.log('this is the fantasy section');
  };

  Special = function(x){
    console.log('this is the special section');
  };

  Womens = function(x){
    console.log('this is the womens section');
  };

  Mens = function(x){
    console.log('this is the mens section');
  };

  Mani = function(x){
    console.log('this is the Mani/Pedi section');
  };

  Acrylic = function(x){
    console.log('this is the Acrylic section');
  };

  NailArt = function(x){
    console.log('this is the nailArt section');
  };
});
var data ={
 images:[
  {
    'img':'images/1.jpg'
  },
  {
    'img':'images/2.jpg'
  },
  {
    'img':'images/3.jpg'
  },
  {
    'img':'images/4.jpg'
  },
  {
    'img':'images/5.jpg'
  },
  {
    'img':'images/6.jpg'
  },
  {
    'img':'images/7.jpg'
  },
  {
    'img':'images/8.jpg'
  },
  {
    'img':'images/9.jpg'
  },
  {
    'img':'images/10.jpg'
  }
]
};
