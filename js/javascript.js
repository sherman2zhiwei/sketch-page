
$(document).ready(function(){
  for (var i = 0; i < 20 ; i++){
    $('body').append('<div class="box"></div>')
  }

  $(document).on("mouseover", ".box", function(){
    $(this).addClass('.highlighted');
    $(this).removeClass("box");

  });




});
