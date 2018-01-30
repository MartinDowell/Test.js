var width = 8;
var height = 8;
var w = 4;
var row1 = 'W B ';
var row2 = 'B W ';
var h = 2;

while (h <= height)  {
  while (w <= width)  {
    row1 = row1 + 'W B ';
    w += 2;
  }
  console.log(row1);

  var w = 4;
    while (w <= width)  {
      row2 = row2 + 'B W ';
      w += 2;
    }
  console.log(row2);

var w = 4;
var row1 = 'W B ';
var row2 = 'B W ';
h += 2;
}
