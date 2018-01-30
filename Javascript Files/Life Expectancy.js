var ancestry = require('./Ancestry.js');

function average(array)  {
  function plus (a,b)  { return a + b; }
  return array.reduce(plus) / array.length;
}

var perC = {};
ancestry.forEach(function(p)  {
  var cent = String(Math.ceil(p.died/100));
  if (!(cent in perC))  {
    perC[cent] = [];
  }
  perC[cent].push(p.died - p.born);
});
for (cent in perC)  {
  console.log('In the ' + cent + 'th century, average life expectancy was: ' + (average(perC[cent])))
};
