$(document).ready(function(){
  // Handels clicking nav bar links
  $('.nav li').on('click',function(){
    $(this).addClass('active').siblings().removeClass('active');
  });

  // Hides/Shows the content
  $('li a').on('click', function(){
    $('section').hide();
    $(this.getAttribute('href')).show();
    if(this.text === 'Resume'){
      Resume(this);
    }else if(this.text === 'About'){
      About(this);
    }else if(this.text =='Contact'){
      Contact(this);
    }

  });

  // Thinking of ways to make the files in jQuery not HTML
  About = function(x){
    console.log('this is the about function' + x);
  };

  Resume = function(x){

    console.log('this is the resume function ' + x);
  };

  Contact = function(x){
    
    console.log('this is the contact function' + x);
  };
});
