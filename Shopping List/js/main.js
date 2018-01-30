$(document).ready (function()  {
  $(button).click (function()  {
  var item = $('input[name=checkListItem]').val();
  var n = item.length;
  if (n == 0) {}
  else {
  $('ol').append('<li>' + item + '</li>');
}
  });




$(remove).click (function()  {
  $('ol').empty();
  });



});
