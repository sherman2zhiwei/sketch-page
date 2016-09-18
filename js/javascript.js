
$(document).ready(function(){
  for (var i = 0; i < 256 ; i++){
    $('body').append('<div class="box"></div>')
  }

  $(document).on("mouseover", ".box", function(){
    $(this).css('background-color', 'white');

  });




});
