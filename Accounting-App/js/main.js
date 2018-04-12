function resetSelection()  {
  $('.titleHome').removeClass('titleSelect');
  $('.titleTransactions').removeClass('titleSelect');
  $('.titleCharts').removeClass('titleSelect');
  $('.titleSettings').removeClass('titleSelect');
  $('.titleAbout').removeClass('titleSelect');
};

function resetNav()  {
  $('.homeLink').removeClass('navSelect');
  $('.transactionsLink').removeClass('navSelect');
  $('.chartsLink').removeClass('navSelect');
  $('.settingsLink').removeClass('navSelect');
  $('.aboutLink').removeClass('navSelect');
};

$('.homeLink').click(function()  {
  resetSelection();
  $('.titleHome').toggleClass('titleSelect');
  resetNav();
  $('.homeLink').toggleClass('navSelect');
});

$('.transactionsLink').click(function()  {
  resetSelection();
  $('.titleTransactions').toggleClass('titleSelect');
  resetNav();
  $('.transactionsLink').toggleClass('navSelect');
});

$('.chartsLink').click(function()  {
  resetSelection();
  $('.titleCharts').toggleClass('titleSelect');
  resetNav();
  $('.chartsLink').toggleClass('navSelect');
});

$('.settingsLink').click(function()  {
  resetSelection();
  $('.titleSettings').toggleClass('titleSelect');
  resetNav();
  $('.settingsLink').toggleClass('navSelect');
});

$('.aboutLink').click(function()  {
  resetSelection();
  $('.titleAbout').toggleClass('titleSelect');
  resetNav();
  $('.aboutLink').toggleClass('navSelect');
  $('.about').toggleClass('visible');
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
        '<td>' + '<button id="' + (i+100) + '" onclick="deleteRow('+ (i+100) + ')"><img src = "icons/70 Basic Icons-all-06.svg" width=24 height=24></button>' + '</td>' +
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
