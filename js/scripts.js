$(document).ready(function(){

  $('.menu').on('click', function(){
    $(this).toggleClass('open');
  });

  $('.slider').on('click', function(){
    $(this).toggleClass('open');
  });

  $('.thumbnail').on('click', function(){
    $('.pop-up').fadeIn(100);
  });

  $(".rslides").responsiveSlides();

});

function getData(){
  return {
    'data':[]
  }
}
function addTask(){
  return {
    'id':0,
    'desc':'Data badge'
  }
}
