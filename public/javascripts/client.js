$(document).ready(function(){
  $('.your').on('click', function (e) {
    $('.show_all').css('display', 'none');
    $('.score_board').css('display', 'none')
    $('.show_your').css('display', 'inline-block');
    e.preventDefault();
  });
  $('.all').on('click', function (e) {
    $('.show_your').css('display', 'none')
    $('.score_board').css('display', 'none')
    $('.show_all').css('display', 'inline-block')
  });
  $('.score').on('click', function (e) {
    $('.show_your').css('display', 'none')
    $('.show_all').css('display', 'none')
    $('.score_board').css('display', 'inline-block')
  });
  $('.clear').on('focus', function (e) {
    this.blur();
  })
});
