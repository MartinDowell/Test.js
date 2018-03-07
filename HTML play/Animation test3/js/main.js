$(document).ready(function() {


$('.animate').click(function()  {
  $('.strip1').animate({left: '+500px', opacity: 1}, 'slow',
    function() {$('.strip2').animate({left: '+500px', opacity: 1}, 'slow',
      function() {$('.strip3').animate({left: '+500px', opacity: 1}, 'slow',
        function() {$('.strip4').animate({left: '+500px', opacity: 1}, 'slow',
          function() {$('.strip5').animate({left: '+500px', opacity: 1}, 'slow')})})})});
});










});
