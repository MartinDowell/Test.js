var pageCharts;
var pageCharts2;

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

function resetPages()  {
  $('.homePage').removeClass('visible');
  $('.transactionsPage').removeClass('visible');
  $('#chartsPage').css('display', 'none');
  $('.settingsPage').removeClass('visible');
  $('.aboutPage').css('display', 'none');
};

$('.homeLink, .titleHome').click(function()  {
  resetSelection();
  $('.titleHome').toggleClass('titleSelect');
  resetNav();
  $('.homeLink').toggleClass('navSelect');
  resetPages();
  $('.homePage').toggleClass('visible');
  $('.xtra').css('display', 'none');
});

$('.transactionsLink, .titleTransactions').click(function()  {
  resetSelection();
  $('.titleTransactions').toggleClass('titleSelect');
  resetNav();
  $('.transactionsLink').toggleClass('navSelect');
  resetPages();
  // $('.transactionsPage').toggleClass('visible');
  $('.xtra').css('display', 'none');
});

$('.chartsLink, .titleCharts').click(function()  {
  resetSelection();
  $('.titleCharts').toggleClass('titleSelect');
  resetNav();
  $('#chartsPage').empty();
  $('.chartsLink').toggleClass('navSelect');
  resetPages();
  $('#chartsPage').css('display', 'block');
  if (typeof pageCharts !== 'undefined')  {
    pageCharts.destroy();
  };
  if (typeof pageCharts2 !== 'undefined')  {
    pageCharts2.destroy();
  };
  genCharts();
  $('.xtra').css('display', 'block');
});

$('.settingsLink, .titleSettings').click(function()  {
  resetSelection();
  $('.titleSettings').toggleClass('titleSelect');
  resetNav();
  $('.settingsLink').toggleClass('navSelect');
  resetPages();
  $('.settingsPage').toggleClass('visible');
  $('.xtra').css('display', 'none');
  if ($('checkmark').prop('checked'))  {
    alert('its checked');
  }  else  {
    alert('not checked');
  };
});

$('.aboutLink, .titleAbout').click(function()  {
  resetSelection();
  $('.titleAbout').toggleClass('titleSelect');
  resetNav();
  $('.aboutLink').toggleClass('navSelect');
  resetPages();
  $('.aboutPage').css('display', 'block');
  $('.xtra').css('display', 'none');
});

$('.chart2').click(function()  {
    if (typeof pageCharts2 !== 'undefined')  {
      pageCharts.destroy();
      pageCharts2.destroy();
    };
  genChart2();
});

$('.chart1').click(function()  {
    if (typeof pageCharts !== 'undefined')  {
      pageCharts.destroy();
      pageCharts2.destroy();
    };
  genCharts();
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
        '<td>' + '<button id="' + (i+100) + '" onclick="deleteRow('+ (i+100) + ')"><img src = "icons/70 Basic Icons-all-06.svg" width=20 height=20></button>' + '</td>' +
    '</tr>' + '</tbody>');
    }
};

$('.transact').click (function()  {
  var dateVal = $('input[name = date]').val();
  var typeVal = $('select').val();
  var commentsVal = $('input[name = comments]').val();
  var amountVal = $('input[name = amount]').val();
  var transaction = new Transaction(dateVal, typeVal, commentsVal, amountVal, tId);
  genTable(ledger, tId);
  tId +=1;

});


// Chart Generation

function genDate()  {
  ledger.sort(dynamicSort("date"));
  var dates = [];
  for (i = 0; i < ledger.length; i++)  {
    dates.push(ledger[i].date);
  }
  sumAmount();
  genTable();
  return dates;
};

function genBalance()  {
  var balances = [];
  for (i = 0; i < ledger.length; i++)  {
    balances.push(parseFloat(ledger[i].balance).toFixed(2));
  }
  return balances;
};

function dynamicSort(property)  {
  var sortOrder = 1;
  if(property[0] === "-") {
        sortOrder = -1;
        property = property.substr(1);
    }
    return function (a,b) {
        var result = (a[property] < b[property]) ? -1 : (a[property] > b[property]) ? 1 : 0;
        return result * sortOrder;
    }
};

function genAmount()  {
  var amounts = [];
  for (i = 0; i < ledger.length; i++)  {
    amounts.push(parseFloat(ledger[i].amount).toFixed(2));
  }
  return amounts;
};

function genCharts()  {
  var ctx = document.getElementById('chartsPage').getContext('2d');
  pageCharts = new Chart(ctx, {
    type: 'line',
    data: {
        labels: genDate(),
        datasets: [{
            label: 'Balance(£)',
            data: genBalance(),
            fill: false,
            backgroundColor: ['rgba(222, 77, 77, 1)'],
            borderColor: ['rgba(222, 77, 77, 1)'],
            borderWidth: 3,
            lineTension: 0
            }]
  },
  options:{
    scales: {
          yAxes: [{
              ticks: {
                  beginAtZero:false
              }
          }]
      },
    title:{
      display: true,
      text: 'Balance Chart',
      fontSize: 25,
      fontColor: '#000'
    },
    legend:{
      display: true,
      position: 'right',
      labels:{
        fontSize: 20,
        fontColor: '#000'
      }
    },
    layout:{
      padding:{
        left:50,
        right:0,
        bottom:0,
        top:0
      }
    },
    tooltips:{
      enabled:true
    }

  }
    });
};

function genChart2()  {
  var ctx = document.getElementById('chartsPage').getContext('2d');
  pageCharts2 = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: genDate(),
        datasets: [{
            label: 'Incoming/Outgoing(£)',
            data: genAmount(),
            backgroundColor: 'rgba(222, 77, 77, 1)',
            borderColor: 'rgba(77, 77, 77, 1)',
            borderWidth: 3
            }]
  },
  options:{
    scales: {
          yAxes: [{
              ticks: {
                  beginAtZero:true
              }
          }]
      },
    title:{
      display: true,
      text: 'Incoming/Outgoing',
      fontSize: 25,
      fontColor: '#000'
    },
    legend:{
      display: true,
      position: 'right',
      labels:{
        fontSize: 20,
        fontColor: '#000'
      }
    },
    layout:{
      padding:{
        left:50,
        right:0,
        bottom:0,
        top:0
      }
    },
    tooltips:{
      enabled:true
    }

  }
    });
};
