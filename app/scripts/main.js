$(document).ready(function(){
  $('.nav li').on('click',function(){
    $(this).addClass('active').siblings().removeClass('active');
  });
  $('.about').click(function(){
    $('#about').show();
  });
  $('.contact').click(function(){
    $('#contact').show();
  });
  $('.resume').click(function(){
    $('#resume').show();
  });
});
