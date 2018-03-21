$(document).ready(function() {

$('.title-data').click(function()  {
  $('.title-data').toggleClass('titleSelect');
});

$('.title-charts').click(function()  {
  $('.title-charts').toggleClass('titleSelect');
});

var ledger = [];
var id = 100;

function Transaction(date, type, comments, amount, id)  {
  this.date = date;
  this.type = type;
  this.comments = comments;
  this.amount = amount;
  this.id = id;
  ledger.push(this);
  sumAmount(ledger);
}

function sumAmount(ledger)  {
  balance = 0;
  for (i = 0; i < ledger.length; i++)  {
    balance += parseInt(ledger[i].amount);
  }
  balanceVal = balance.toString();
  return balanceVal;
};

function deleteRow(r) {
  alert('splat');
    var i = r.parentNode.parentNode.rowIndex;
    document.getElementById('myTable').deleteRow(i);
};

function addRow(dateVal, typeVal, commentsVal, amountVal)  {
  $('#myTable').append('<tr id='+ id + '>' + '<td>' + dateVal + '</td>' +
                            '<td>' + typeVal + '</td>' +
                            '<td>' + commentsVal + '</td>' +
                            '<td>' + '£' + amountVal + '</td>' +
                            '<td>' + '£' + balanceVal + '</td>' +
                            '<td>' + '<input type="button" value="Del" onclick=deleteRow()/>' + '</td>' +
                            '<td>' + id + '</td>' +
                    '</tr>');
};


$('button').click (function()  {
  var dateVal = $('input[name = date]').val();
  var typeVal = $('input[name = type]').val();
  var commentsVal = $('input[name = comments]').val();
  var amountVal = $('input[name = amount]').val();
  var transaction = new Transaction(dateVal, typeVal, commentsVal, amountVal, id);
  addRow(dateVal, typeVal, commentsVal, amountVal);
  id +=1;
});








});  //end of document
