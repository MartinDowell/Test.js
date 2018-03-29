$('.title-data').click(function()  {
  $('.title-data').toggleClass('titleSelect');
});

$('.title-charts').click(function()  {
  $('.title-charts').toggleClass('titleSelect');
  $('.title-data').toggleClass('titleSelect');
});

var ledger = [];
var tId = 100;

function Transaction(date, type, comments, amount, tId)  {
  this.date = date;
  this.type = type;
  this.comments = comments;
  this.amount = amount;
  this.tId = tId;
  ledger.push(this);
  if (this.type == 'Outgoing')  {
    this.amount = -Math.abs(this.amount);
  };
  sumAmount(ledger);
}

function sumAmount()  {
  balance = 0;
  for (i = 0; i < ledger.length; i++)  {
    balance += parseFloat(ledger[i].amount);
    ledger[i].balance = balance.toString();
  }
};

function deleteRow(tId) {
  // alert(tId);
  ledger.splice((tId - 100), 1);
  sumAmount(ledger);
  genTable(ledger);
};

function genTable()  {
  $('tbody').remove();


  for (i = 0; i < ledger.length; i++)  {

    $('#myTable').append('<tbody>' + '<tr>' +
        '<td>' + ledger[i].date + '</td>' +
        '<td>' + ledger[i].type + '</td>' +
        '<td>' + ledger[i].comments + '</td>' +
        '<td>' + parseFloat(ledger[i].amount).toFixed(2) + '</td>' +
        '<td>' + parseFloat(ledger[i].balance).toFixed(2) + '</td>' +
        // '<td>' + ledger[i].tId + '</td>' +
        '<td>' + '<button id="' + (i+100) + '" onclick="deleteRow('+ (i+100) + ')"><img src = "icons/70 Basic Icons-all-06.svg"></button>' + '</td>' +
    '</tr>' + '</tbody>');
    }
};

$('.transact').click (function()  {
  var dateVal = $('input[name = date]').val();
  // var typeVal = $('input[name = value]').val();
  var typeVal = $('select').val();
  var commentsVal = $('input[name = comments]').val();
  var amountVal = $('input[name = amount]').val();
  var transaction = new Transaction(dateVal, typeVal, commentsVal, amountVal, tId);
  genTable(ledger, tId);
  tId +=1;

});
