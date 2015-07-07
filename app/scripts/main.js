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
    ~ get all the images onto the page
    ~ put them all together
    ~ change them with a swipe or arrow button
    */
    

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
