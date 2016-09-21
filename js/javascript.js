
$(document).ready(function(){
  for (var i = 0; i < 256 ; i++){
    $('body').append('<div class="box"></div>')
  }

  $(document).on("mouseover", ".box", function(){
    $(this).css('background-color', 'white');

  });




});

var gridSize = function(){
  $('div').remove();
  var numberOfBoxesPerSide = prompt("How many boxes do you want per side?");
  var bodyWidth = $('body').width();
  var boxWidth = Math.floor(bodyWidth/numberOfBoxesPerSide);


  // $('.box').css({'height':boxWidth , 'width':boxWidth});
  // $('.box').css('height', 1);

  for (var i=0; i < Math.pow(numberOfBoxesPerSide, 2); i++){
    $('body').append('<div class="box"></div>')
  }

  $('.box').css({'height':boxWidth , 'width':boxWidth});

}
