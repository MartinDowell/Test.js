var ancestry = require('./Ancestry.js');
var motherAges = [];
var byName = {};
ancestry.forEach(function(p)  {
  byName[p.name] = p;
})

function name(p)  { return p.name; };

function age(p)  { return p.died - p.born; }

function mother(p)  { return p.mother; }

function motherAge(p)  { return p.born - byName[p.mother].born; }

function average(array)  {
  function plus (a,b)  { return a + b; }
  return array.reduce(plus) / array.length;
}

var hasKnownMother = function(p)  {
  return p.mother in byName;
}
var splat = ancestry.filter(hasKnownMother).map(motherAge);
console.log(average(splat));
