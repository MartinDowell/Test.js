var num;
var array = [];
var table = document.getElementById('numbers');
var totalRows = 10;
var cellsInRow = 10;

function genArray(num)  {
  for (i = 1; i <= 100; i++)  {

    if (i % 3 == 0)  {
      if (i % 5 == 0)  {
        num = 'FooBar';
      }
      else num = 'Foo';
    }

    else if (i % 5 == 0)  {
      num = 'Bar';
    }
    else num = i;

    array.push(num);
  };
};

function genTable() {
  // get the reference for the body
  var divN = document.getElementById('numbers');
  // creates a <table> element
  var tbl = document.createElement('table');
  // creating rows
  for (var r = 0; r < totalRows; r++) {
      var row = document.createElement('tr');
 // create cells in row
       for (var c = 0; c < cellsInRow; c++) {
          var cell = document.createElement('td');
          genArray(array);
          var result = document.createTextNode(array[c + (r * 10)]);
          cell.appendChild(result);
          row.appendChild(cell);
          };
        tbl.appendChild(row); // add the row to the end of the table body
      };
  divN.appendChild(tbl); // appends <table> into <divN>
}

window.onload = genTable;
