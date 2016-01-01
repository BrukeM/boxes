$(document).ready(function(){
  var width = +$('#wrapper').width();
  var height = +$('#wrapper').height();
  for (var i = 0; i < 16; i++) {
    $('#wrapper').append('<div class=\'row\'></div>');
  }
  $('.row').each(function(index){
    for (var i = 0; i < 16; i++) {
      $(this).append('<div class=\'box\'></div>');
    }
  });
  $('.row').css({'height':height/16});
  $('.box').css({'height':height/16 - 4, 'width':width/16 - 4});
  $('.box').on('mouseover',function(){
    $(this).animate({'background-color': 'red'}, 300);
  });
  $('button').on('click',function(){
    var num = prompt('What size?');
    $('.row').remove();
    for (var i = 0; i < num; i++) {
      $('#wrapper').append('<div class=\'row\'></div>');
    }
    $('.row').each(function(index){
      for (var i = 0; i < num; i++) {
        $(this).append('<div class=\'box\'></div>');
      }
    });
    $('.row').css({'height':height/num -4});
    $('.box').css({'height':height/num - 4, 'width':width/num -4});
    $('.box').on('mouseover',function(){
      $(this).animate({'background-color': 'red'}, 300);
    });
  });
});
