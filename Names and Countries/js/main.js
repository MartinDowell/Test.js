$(document).ready  (function() {



  $('button').click  (function()  {

    var firstName = $('input[name=firstName]').val();
    //$(names).append('<td>' + firstName + '</td>');
    var lastName = $('input[name=lastName]').val();
    //$(names).append('<td>' + lastName + '</td>');
    var country = $('input[name=country]').val();
    //$(names).append('<td>' + country + '</td>');


    var tableRef = document.getElementById('names').getElementsByTagName('tbody')[0];

    // Insert a row in the table at the last row
    var newRow   = tableRef.insertRow(tableRef.rows.length);

    // Insert a cell in the row at index 0,1,2
    var Cell0  = newRow.insertCell(0);
    var Cell1  = newRow.insertCell(1);
    var Cell2  = newRow.insertCell(2);

    Cell0.innerHTML = firstName;
    Cell1.innerHTML = lastName;
    Cell2.innerHTML = country;


    });



});
