
$(document).ready(function(){
  for (var i = 0; i < 256 ; i++){
    $('body').append('<div class="box"></div>')    // Add in the boxes one by one using jQuery
  }

  $(document).on("mouseover", ".box", function(){
    $(this).css('background-color', 'white');    // Turn the boxes to white when a mouse hovers over them
  });




});

var gridSize = function(){
  $('div').remove();  // Remove the original grid
  var numberOfBoxesPerSide = prompt("How many boxes do you want per side?");
  var bodyWidthBorder = ($('body').width())-((numberOfBoxesPerSide)*3);  // Since a 3px right margin is present after every box, I minus it off to account for the space it takes in the body
  var boxWidth = Math.floor(bodyWidthBorder/numberOfBoxesPerSide);



  for (var i=0; i < Math.pow(numberOfBoxesPerSide, 2); i++){
    $('body').append('<div class="box"></div>')
  }

  $('.box').css({'height':boxWidth , 'width':boxWidth}); //Readjust the height and width of the boxes as necessary

}
