$(document).ready(function(){
  $('.nav li').on('click',function(){
    $(this).addClass('active').siblings().removeClass('active');
  });
  $('li a').on('click', function(){
    $('section').hide();
    $(this.getAttribute('href')).show();
  });
});
