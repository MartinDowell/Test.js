$(document).ready(function() {

$('.title-data').click(function()  {
  $('.title-data').toggleClass('titleSelect');
});

$('.title-charts').click(function()  {
  $('.title-charts').toggleClass('titleSelect');
});

var total = [];
var id = 100;

function sumArray()  {
  balance = 0;
  for (i = 0; i < total.length; i++)  {
    balance += parseInt(total[i]);
  }
  balanceVal = balance.toString();
  return balanceVal;
}

function deleteRow(id){
  alert('splat!');
   // $('#' + id).remove();
}

function addRow(dateVal, typeVal, commentsVal, amountVal)  {

  $('table').append('<tr id='+ id + '>' + '<td>' + dateVal + '</td>' +
                            '<td>' + typeVal + '</td>' +
                            '<td>' + commentsVal + '</td>' +
                            '<td>' + '£' + amountVal + '</td>' +
                            '<td>' + '£' + balanceVal + '</td>' +
                            '<td>' + '<input type="button" value="Del" onclick="deleteRow('+id+')"/>' + '</td>' +
                            '<td>' + id + '</td>' +
                    '</tr>');
                    alert(id);
  id +=1;
  return id;
}


$('button').click (function()  {
  var dateVal = $('input[name = date]').val();
  var typeVal = $('input[name = type]').val();
  var commentsVal = $('input[name = comments]').val();
  var amountVal = $('input[name = amount]').val();
  total.push(amountVal);
  sumArray();
  addRow(dateVal, typeVal, commentsVal, amountVal);

});








});  //end of document
