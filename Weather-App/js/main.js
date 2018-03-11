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
    document.getElementById('current').innerHTML =
      jsonDoc.current.temp_c +'&#8451' + '<br>' +
      jsonDoc.current.condition.text;
    var loc = jsonDoc.location.name;
    var reg = jsonDoc.location.region;
    document.getElementById('location').innerHTML = loc + "<br>" + reg
// Retrieve the local time info and seperate into date and time
    var dateTime = jsonDoc.location.localtime;
    var date = dateTime.split(' ');
    var time = date[1];
    var dateSep = date[0].split('-');
    var year = dateSep[0];  var month = dateSep[1];  var day = dateSep[2];
// Turn month number into name
    var months = ['Jan','Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    var monthN = months[month - 1];
    document.getElementById('datetime').innerHTML = time +"<br>"+ day +"<br>"+ monthN;
// Get today's overview
    var todayDay = 'TODAY';
    var todayMaxT = jsonDoc.forecast.forecastday[0].day.maxtemp_c;
    var todayMinT = jsonDoc.forecast.forecastday[0].day.mintemp_c;
    var todayCond = jsonDoc.forecast.forecastday[0].day.condition.text;
    document.getElementsByClassName('day0')[0].innerHTML = todayDay + "<br>" +
      todayCond + "<br>" +
      "Max:   " + todayMaxT + "<br>" +
      "Min:   " + todayMinT;

// Get next 5 days forecastday
    var d = new Date();
    var n = d.getDay();
    var days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    for (i = 1; i <= 5; i++)  {
      document.getElementsByClassName('day'+i)[0].innerHTML
        = days[n + i] + "<br>"
        + jsonDoc.forecast.forecastday[i].day.condition.text + "<br>"
        + 'Max:   ' + jsonDoc.forecast.forecastday[i].day.maxtemp_c + "<br>"
        + 'Min:   ' + jsonDoc.forecast.forecastday[i].day.mintemp_c;
      }

function resetStats()  {
  $('#sunrise').animate({left: '+0px', opacity: 0}, 0, 'linear',
    function() {$('#sunset').animate({left: '+0px', opacity: 0}, 0, 'linear',
      function() {$('#windspeed').animate({left: '+0px', opacity: 0}, 0, 'linear',
        function() {$('#visibility').animate({left: '+0px', opacity: 0}, 0, 'linear',
          function() {$('#humidity').animate({left: '+0px', opacity: 0}, 0, 'linear')})})})});
}

function resetBorder()  {
  for (i=0; i<=5; i++)  {
    $('.day'+i).removeClass('selected');
  };
}

// Get stats for each day

$('.day0').on('click', function()  {
  resetBorder();
  resetStats();
  var d = 0;
  $('.day0').toggleClass('selected');
  getStats(d);
})

$('.day1').on('click', function()  {
  resetBorder();
  resetStats();
  var d = 1;
  $('.day1').toggleClass('selected');
  getStats(d);
})

$('.day2').on('click', function()  {
  resetBorder();
  resetStats();
  var d = 2;
  $('.day2').addClass('selected');
  getStats(d);
})

$('.day3').on('click', function()  {
  resetBorder();
  resetStats();
  var d = 3;
  $('.day3').addClass('selected');
  getStats(d);
})

$('.day4').on('click', function()  {
  resetBorder();
  resetStats();
  var d = 4;
  $('.day4').addClass('selected');
  getStats(d);
})

$('.day5').on('click', function()  {
  resetBorder();
  resetStats();
  var d = 5;
  $('.day5').addClass('selected');
  getStats(d);
})


function getStats(d)  {
  document.getElementById('sunrise').innerHTML
    = 'Sunrise: ' + jsonDoc.forecast.forecastday[d].astro.sunrise;
  document.getElementById('sunset').innerHTML
    = 'Sunset: ' + jsonDoc.forecast.forecastday[d].astro.sunset;
  document.getElementById('windspeed').innerHTML
    = 'Windspeed: ' + jsonDoc.forecast.forecastday[d].day.maxwind_mph + 'mph';
  document.getElementById('visibility').innerHTML
    = 'Visibility: ' + jsonDoc.forecast.forecastday[d].day.avgvis_miles + ' miles';
  document.getElementById('humidity').innerHTML
    = 'Humidity: ' + jsonDoc.forecast.forecastday[d].day.avghumidity + '%';

  $('#sunrise').animate({left: '+525px', opacity: 1}, 250, 'linear',
    function() {$('#sunset').animate({left: '+525px', opacity: 1}, 250, 'linear',
      function() {$('#windspeed').animate({left: '+525px', opacity: 1}, 250, 'linear',
        function() {$('#visibility').animate({left: '+525px', opacity: 1}, 250, 'linear',
          function() {$('#humidity').animate({left: '+525px', opacity: 1}, 250, 'linear')})})})});

  };  //end of getStats



  };  //end of getWeather function
});   //end of document ready method
