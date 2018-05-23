$(document).ready(function() {

  if (sessionStorage.getItem('altLoc'))  {
    var locData2 = sessionStorage.getItem('altLoc');
  }  else  {
    var locData2 = 'stratford upon avon';
  };


    var xhttp = new XMLHttpRequest();
    var url = "http://api.apixu.com/v1/forecast.json?key=ee63afa5ce654c989c6120300172106&q=" + locData2 + ",uk&days=6";
    xhttp.onreadystatechange = function()  {
      if (this.readyState == 4 && this.status == 200)  {
        getWeather(this);
      }
    };
    xhttp.open("GET", url, false);
    xhttp.send();


function getWeather(jsonRet)  {
  var jsonDoc = JSON.parse(jsonRet.responseText);
  var loc = jsonDoc.location.name;
  var reg = jsonDoc.location.region;
  document.getElementById('locName').innerHTML = loc + ', ' + reg;

function genMaxTemp()  {
  var maxTemp = [];
  for (i = 0; i <= 5; i++)  {
    maxTemp.push(jsonDoc.forecast.forecastday[i].day.maxtemp_c);
    }
  return maxTemp;
}

function genMinTemp()  {
  var minTemp = [];
  for (i = 0; i <= 5; i++)  {
    minTemp.push(jsonDoc.forecast.forecastday[i].day.mintemp_c);
    }
  return minTemp;
}

function genDayName()  {
  var d = new Date();
  var n = d.getDay();
  var nameDay = [];
  nameDay[0] = 'Today';
  var days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  for (i = 1; i <=5 ; i++)  {
    nameDay.push(days[n + i])
  }
  return nameDay;
}


    var ctx = document.getElementById("temp-chart").getContext('2d');
    var tempChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: genDayName(),
            datasets: [{
                label: 'Max Temp(ºc)',
                data: genMaxTemp(),
                fill: false,
                backgroundColor: ['rgba(222, 77, 77, 0.25)'],
                borderColor: ['rgba(222, 77, 77, 1)'],
                borderWidth: 3
                },{
                label: 'Min Temp(ºc)',
                data: genMinTemp(),
                fill: false,
                backgroundColor: ['rgba(77, 77, 222,0.25)'],
                borderColor: ['rgba(77, 77, 222, 1)'],
                borderWidth: 3
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
          text: 'Daily Temperatures',
          fontSize: 25
        },
        legend:{
          display: true,
          position: 'right',
          labels:{
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

        function genPrecip()  {
          var precip = [];
          for (i = 0; i <= 5; i++)  {
            precip.push(jsonDoc.forecast.forecastday[i].day.totalprecip_mm);
            }
          return precip;
        }

        var ctx = document.getElementById("rain-chart").getContext('2d');
        var rainChart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: genDayName(),
                datasets: [{
                    label: 'Precipitation(mm)',
                    data: genPrecip(),
                    fill: true,
                    backgroundColor: ['rgba(77, 111, 222, 0.25)',
                                      'rgba(77, 111, 222, 0.25)',
                                      'rgba(77, 111, 222, 0.25)',
                                      'rgba(77, 111, 222, 0.25)',
                                      'rgba(77, 111, 222, 0.25)',
                                      'rgba(77, 111, 222, 0.25)'],
                    borderColor: ['rgba(77, 111, 222, 1)',
                                  'rgba(77, 111, 222, 1)',
                                  'rgba(77, 111, 222, 1)',
                                  'rgba(77, 111, 222, 1)',
                                  'rgba(77, 111, 222, 1)',
                                  'rgba(77, 111, 222, 1)'],
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
              display:true,
              text:'Daily Precipitation',
              fontSize:25
            },
            legend:{
              display:true,
              position:'right',
              labels:{
                fontColor:'#000'
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


  }

});
