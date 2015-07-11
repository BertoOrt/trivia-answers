$(document).ready(function(){
  $('.your').on('click', function (e) {
    $('.show_all').css('display', 'none');
    $('.show_your').css('display', 'inline-block');
    e.preventDefault();
  });
  $('.all').on('click', function (e) {
    $('.show_your').css('display', 'none')
    $('.show_all').css('display', 'inline-block')
  });
});
