$(document).ready(function() {

    var xhttp = new XMLHttpRequest();
    var url = "http://api.apixu.com/v1/forecast.json?key=ee63afa5ce654c989c6120300172106&q=cv37&days=6";
    xhttp.onreadystatechange = function()  {
      if (this.readyState == 4 && this.status == 200)  {
        getWeather(this);
      }
    };
    xhttp.open("GET", url, false);
    xhttp.send();


  function getWeather(jsonRet)  {
    var jsonDoc = JSON.parse(jsonRet.responseText);

    var ctx = document.getElementById("myChart").getContext('2d');
    var myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
            datasets: [{
                label: '# of Votes',
                data: [12, 19, 3, 5, 14, 10],
                backgroundColor: [
                  'rgba(255, 99, 132, 0.3)',
                  'rgba(54, 162, 235, 0.3)',
                  'rgba(255, 206, 86, 0.3)',
                  'rgba(75, 192, 192, 0.3)',
                  'rgba(153, 102, 255, 0.3)',
                  'rgba(255, 159, 64, 0.3)'
              ],
              borderColor: [
                  'rgba(255,99,132,1)',
                  'rgba(54, 162, 235, 1)',
                  'rgba(255, 206, 86, 1)',
                  'rgba(75, 192, 192, 1)',
                  'rgba(153, 102, 255, 1)',
                  'rgba(255, 159, 64, 1)'
              ],
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
          text:'Nations Favourite Colours',
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
