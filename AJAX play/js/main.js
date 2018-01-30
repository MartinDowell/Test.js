$(document).ready(function() {

  $('#get_cd').click(function()  {

    var xhttp = new XMLHttpRequest();
    var url = "http://api.apixu.com/v1/forecast.xml?key=ee63afa5ce654c989c6120300172106&q=birmingham&days=5";
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        getCDs(this);
      }

    };
    xhttp.open("GET", url, true);
    xhttp.send();

  function getCDs(xml) {
    var i;
    var xmlDoc = xml.responseXML;
    var table="<tr><th>Date</th><th>Max temperature</th></tr>";
    var x = xmlDoc.getElementsByTagName("forecastday");

    for (i = 0; i <x.length; i++) {
      table += "<tr><td>" +
      x[i].getElementsByTagName("date")[0].childNodes[0].nodeValue +
      "</td><td>" +
      x[i].getElementsByTagName("maxtemp_c")[0].childNodes[0].nodeValue +
      "</td></tr>";
    }

    document.getElementById("demo").innerHTML = table;
  }
});
});
