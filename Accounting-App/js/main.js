$(document).ready(function() {

$('.title-data').click(function()  {
  $('.title-data').toggleClass('titleSelect');
});

$('.title-charts').click(function()  {
  $('.title-charts').toggleClass('titleSelect');
});
var balanceVal = '0';
$('button').click (function()  {
  var newTotal = '0';
  var dateVal = $('input[name = date]').val();
  var typeVal = $('input[name = type]').val();
  var commentsVal = $('input[name = comments]').val();
  var amountVal = $('input[name = amount]').val();
  var newTotal = (parseInt(amountVal) + parseInt(newTotal) + parseInt(balanceVal)).toString();
  $('table').append('<tr>' + '<td>' + dateVal + '</td>' +
                            '<td>' + typeVal + '</td>' +
                            '<td>' + commentsVal + '</td>' +
                            '<td>' + '£' + amountVal + '</td>' +
                            '<td>' + '£' + newTotal + '</td>' +
                    '</tr>');

});








});  //end of document
