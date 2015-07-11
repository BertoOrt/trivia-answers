$(document).ready(function(){
  $('.your').on('click', function (e) {
    $('.show_all').css('visibility', 'hidden');
    $('.show_your').css('visibility', 'visible');
    e.preventDefault();
  });
  $('.all').on('click', function (e) {
    $('.show_your').css('visibility', 'hidden')
    $('.show_all').css('visibility', 'visible')
  });
});
