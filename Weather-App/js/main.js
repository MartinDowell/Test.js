$(document).ready(function() {

   //$("button-current").click(function()  {

    var xhttp = new XMLHttpRequest();
    var url = "http://api.apixu.com/v1/current.json?key=ee63afa5ce654c989c6120300172106&q=cv37";

    xhttp.onreadystatechange = function()  {
      if (this.readyState == 4 && this.status == 200)  {
        getWeather(this);
      }
    };
    xhttp.open("GET", url, false);
    xhttp.send();
  //})

  // function getWeather(jsonRet)  {
  //   var jsonDoc = JSON.parse(jsonRet.responseText);
  //   document.getElementById("current").innerHTML = jsonDoc.current.condition.text;
  //   document.getElementById("temp").innerHTML = jsonDoc.current.temp_c;
  //   document.getElementById("windspeed").innerHTML = jsonDoc.current.wind_mph;

}







});
