$(document).ready(function() {

$('.title-data').click(function()  {
  $('.title-data').toggleClass('titleSelect');
});

$('.title-charts').click(function()  {
  $('.title-charts').toggleClass('titleSelect');
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
  sumAmount(ledger);
}

function sumAmount(ledger)  {
  balance = 0;
  for (i = 0; i < ledger.length; i++)  {
    balance += parseInt(ledger[i].amount);
    ledger[i].balance = balance.toString();
  }
};

function deleteRow(tId) {
  // var tId = this.tId;
  alert(tId);
  ledger.splice((tId - 100), 1);
    // var parent = this.parentNode.parentNode;
    // while(parent.hasChildNodes())  {
    //   parent.removeChild(parent.firstChild);
    // }
  sumAmount(ledger);
  genTable(ledger);
};

function genTable(ledger, tId)  {
  $('tbody').remove();


  for (i = 0; i < ledger.length; i++)  {
    // var delButton = document.createElement('button');
    // var textButton = document.createTextNode('Del');
    // delButton.appendChild(textButton);
    // delButton.onclick = deleteRow(tId);

    $('#myTable').append('<tbody>' + '<tr>' +
        '<td>' + ledger[i].date + '</td>' +
        '<td>' + ledger[i].type + '</td>' +
        '<td>' + ledger[i].comments + '</td>' +
        '<td>' + ledger[i].amount + '</td>' +
        '<td>' + ledger[i].balance + '</td>' +
        '<td>' + ledger[i].tId + '</td>' +
        '<td>' + '<button id="' + (i+100) + '" onclick="deleteRow('+ (i+100) + ')">Del</button>' + '</td>' +
    '</tr>' + '</tbody>');
    // var delCell = document.getElementById('myTable').rows[i + 1].cells[5];
    // delCell.appendChild(delButton);
    // document.getElementById('myTable').rows[i + 1].cells[5].setAttribute('id', tId);
    // <button id="x" onclick = "deleteRow(x)">Del</button>
   // '<td>' + '<button id="' + tId +'" onclick="deleteRow('+ (i+100) + ')">Del</button>' + '</td>' +

    }
};

// delCell.onclick = deleteRow(this.id);

// $('#100').click(function()  {
//   // var db = document.getElementById(100);
//   // var dId = db.id;
//   alert('100');
//   ledger.splice(tId, 1);
//   genTable(ledger);
// });

$('.transact').click (function()  {
  var dateVal = $('input[name = date]').val();
  var typeVal = $('input[name = type]').val();
  var commentsVal = $('input[name = comments]').val();
  var amountVal = $('input[name = amount]').val();
  var transaction = new Transaction(dateVal, typeVal, commentsVal, amountVal, tId);
  genTable(ledger, tId);
  tId +=1;

});




});  //end of document
