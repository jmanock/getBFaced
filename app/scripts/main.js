// $(document).ready(function(){
//   // Changes the class on clicking navbar links
//   $('.nav li').on('click',function(){
//     $(this).addClass('active').siblings().removeClass('active');
//   });
//
//   // Hides or Shows sections onClick
//   $('.nav li a').on('click', function(){
//     var x = this.text;
//
//     // Shows last section if `Portfolio` is clicked
//     if(x !== 'Portfolio'){
//       $('section').hide();
//       $('h3').remove();
//       $(this.getAttribute('href')).show();
//     }
//
//     // if statment for sub-category on portfolio
//
//   }); // End `Click` function
//
//   // shows phots based on sub-category click
//   Photos = function(x){

//     $('section').append('<h3>' + x +'</h3>');

//     $('img').on('click', function(){
//       if($(this).hasClass('small')){
//         $(this).removeClass('small');
//         $(this).addClass('big');
//       }else
//       if($(this).hasClass('big')){
//         $(this).removeClass('big');
//         $(this).addClass('small');
//       }
//
//     });
//   }; // End `Photos` function
//
//
//
// }); // End jQuery call
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
    }else{
      slideoutMenu.animate({
        left:-slideoutMenuWidth
      }, 250);
    }
  }); // End `Menu-btn` click

  // `Menu` click
  $('.menu').on('click',function(e){
    e.preventDefault();

    $('img').remove();
    $('h3').remove();
    var x = this.text;

    $('section').append('<h3>'+ x + '</h3>');
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
    var x = this.text;
    if(x === 'Beautie' ||
       x === 'Editorial' ||
       x === 'Fantasy' ||
       x === 'Special Fx' ||
       x === 'Men' ||
       x === 'Women' ||
       x ==='Mani/Pedi' ||
       x === 'Acrylic' ||
       x === 'Nail Art'){
         Photos(x);
       }
       slideoutMenu.animate({
         left:-slideoutMenuWidth
       }, 250);
  });
}); // end jQuery
Photos = function(x){
  $('img').remove();
  $('h3').remove();
  $('section').append('<h3>'+x+'</h3>');
  $.each(data.images, function(key, value){
    var k;
    switch(x){
      case 'Beautie': k = value.beautie;
      break;
      case 'Editorial': k = value.editorial;
      break;
      case 'Fantasy': k = value.fantasy;
      break;
      case 'Special Fx': k = value.special;
      break;
      case 'Men': k = value.mens;
      break;
      case 'Women': k = value.womens;
      break;
      case 'Mani/Pedi': k = value.mani;
      break;
      case 'Acrylic': k = value.acrylic;
      break;
      case 'Nail Art': k = value.nailArt;
      break;
    }
    $('section').append('<img src=' + k + '></img>');
  }); // End `Each` statment

}; // End `Photos` function

// json for images
var data ={
 images:[
  {
    'beautie':'images/beautie/1.jpg',
    'editorial': 'images/editorial/1.jpg',
    'fantasy': 'images/fantasy/1.jpg',
    'special': 'images/special/1.jpg',
    'womens': 'images/womens/1.jpg',
    'mens': 'images/mens/1.jpg',
    'mani':'images/mani/1.jpg',
    'acrylic': 'images/acrylic/1.jpg',
    'nailArt': 'images/nailArt/1.jpg'
  },
  {
    'beautie':'images/beautie/2.jpg',
    'editorial': 'images/editorial/2.jpg',
    'fantasy': 'images/fantasy/2.jpg',
    'special': 'images/special/2.jpg',
    'womens': 'images/womens/2.jpg',
    'mens': 'images/mens/2.jpg',
    'mani':'images/mani/2.jpg',
    'acrylic': 'images/acrylic/2.jpg',
    'nailArt': 'images/nailArt/2.jpg'
  },
  {
    'beautie':'images/beautie/3.jpg',
    'editorial': 'images/editorial/3.jpg',
    'fantasy': 'images/fantasy/3.jpg',
    'special': 'images/special/3.jpg',
    'womens': 'images/womens/3.jpg',
    'mens': 'images/mens/3.jpg',
    'mani':'images/mani/3.jpg',
    'acrylic': 'images/acrylic/3.jpg',
    'nailArt': 'images/nailArt/3.jpg'
  },
  {
    'beautie':'images/beautie/4.jpg',
    'editorial': 'images/editorial/4.jpg',
    'fantasy': 'images/fantasy/4.jpg',
    'special': 'images/special/4.jpg',
    'womens': 'images/womens/4.jpg',
    'mens': 'images/mens/4.jpg',
    'mani':'images/mani/4.jpg',
    'acrylic': 'images/acrylic/4.jpg',
    'nailArt': 'images/nailArt/4.jpg'
  },
  {
    'beautie':'images/beautie/5.jpg',
    'editorial': 'images/editorial/5.jpg',
    'fantasy': 'images/fantasy/5.jpg',
    'special': 'images/special/5.jpg',
    'womens': 'images/womens/5.jpg',
    'mens': 'images/mens/5.jpg',
    'mani':'images/mani/5.jpg',
    'acrylic': 'images/acrylic/5.jpg',
    'nailArt': 'images/nailArt/5.jpg'
  },
  {
    'beautie':'images/beautie/6.jpg',
    'editorial': 'images/editorial/6.jpg',
    'fantasy': 'images/fantasy/6.jpg',
    'special': 'images/special/6.jpg',
    'womens': 'images/womens/6.jpg',
    'mens': 'images/mens/6.jpg',
    'mani':'images/mani/6.jpg',
    'acrylic': 'images/acrylic/6.jpg',
    'nailArt': 'images/nailArt/6.jpg'
  },
  {
    'beautie':'images/beautie/7.jpg',
    'editorial': 'images/editorial/7.jpg',
    'fantasy': 'images/fantasy/7.jpg',
    'special': 'images/special/7.jpg',
    'womens': 'images/womens/7.jpg',
    'mens': 'images/mens/7.jpg',
    'mani':'images/mani/7.jpg',
    'acrylic': 'images/acrylic/7.jpg',
    'nailArt': 'images/nailArt/7.jpg'
  },
  {
    'beautie':'images/beautie/8.jpg',
    'editorial': 'images/editorial/8.jpg',
    'fantasy': 'images/fantasy/8.jpg',
    'special': 'images/special/8.jpg',
    'womens': 'images/womens/8.jpg',
    'mens': 'images/mens/8.jpg',
    'mani':'images/mani/8.jpg',
    'acrylic': 'images/acrylic/8.jpg',
    'nailArt': 'images/nailArt/8.jpg'
  },
  {
    'beautie':'images/beautie/9.jpg',
    'editorial': 'images/editorial/9.jpg',
    'fantasy': 'images/fantasy/9.jpg',
    'special': 'images/special/9.jpg',
    'womens': 'images/womens/9.jpg',
    'mens': 'images/mens/9.jpg',
    'mani':'images/mani/9.jpg',
    'acrylic': 'images/acrylic/9.jpg',
    'nailArt': 'images/nailArt/9.jpg'
  },
  {
    'beautie':'images/beautie/10.jpg',
    'editorial': 'images/editorial/10.jpg',
    'fantasy': 'images/fantasy/10.jpg',
    'special': 'images/special/10.jpg',
    'womens': 'images/womens/10.jpg',
    'mens': 'images/mens/10.jpg',
    'mani':'images/mani/10.jpg',
    'acrylic': 'images/acrylic/10.jpg',
    'nailArt': 'images/nailArt/10.jpg'
  }
]
};
