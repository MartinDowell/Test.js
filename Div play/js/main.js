$(document).ready(function()  {

  $('.bang').click(function()  {

    var txt = '';
 var xmlhttp = new XMLHttpRequest();
 xmlhttp.onreadystatechange = function(){
   if(xmlhttp.status == 200 && xmlhttp.readyState == 4){
     txt = xmlhttp.responseText;
     getWeather(this);
   }
 };
 xmlhttp.open("GET","file:///C:/Users/Martin/Documents/Atom%20Files/Div%20play/xml/Books.xml",true);
 xmlhttp.send();

 function getWeather(xml) {
   var xmlDoc = xml.responseXML;
    //var xmlDoc = src('file:///C:/Users/Martin/Documents/Atom%20Files/Div%20play/xml/Books.xml');
    //xmlDoc = gash.open;
  alert(txt);
  document.getElementById("demo").innerHTML =
    xmlDoc.getElementsByTagName("title")[0].childNodes[0].nodeValue;
    };
  });




});
