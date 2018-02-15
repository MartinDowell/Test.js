$(document).ready(function() {

    var xhttp = new XMLHttpRequest();
    var url = "http://api.apixu.com/v1/current.json?key=ee63afa5ce654c989c6120300172106&q=cv37";

    xhttp.onreadystatechange = function()  {
      if (this.readyState == 4 && this.status == 200)  {
        getWeather(this);
      }
    };
    xhttp.open("GET", url, false);
    xhttp.send();


  function getWeather(jsonRet)  {
    var jsonDoc = JSON.parse(jsonRet.responseText);
    document.getElementById('current').innerHTML = jsonDoc.current.temp_c +'&#8451';
    document.getElementById('location').innerHTML = jsonDoc.location.name;

    var dateTime = jsonDoc.location.localtime;
    var date = dateTime.split(' ');
    var time = date[1];
    var dateSep = date[0].split('-');
    var year = dateSep[0];
    var month = dateSep[1];
    var day = dateSep[2];

    document.getElementById('datetime').innerHTML = time +"<br>"+ day +"<br>"+ month;

  }


});
