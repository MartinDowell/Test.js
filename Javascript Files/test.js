var people = [
  {firstname : 'John', lastname : 'Smith', age : 35},
  {firstname : 'Dave', lastname : 'Silver', age : 52},
  {firstname : 'Peter', lastname : 'Johnson', age : 42},
  {firstname : 'Will', lastname : 'Tam', age : 28},
  {firstname : 'Steve', lastname : 'Sage', age : 31, kit : ['PC', 'iPad', 'iPhone']}

]

var pl = people.length;

var last = 'Johnson';
function nameSearch(p)  {
  if (p.lastname == last)  {
    return p
  }
}

var totalAge = 0
var i = 0;
function average(p)  {
  function plus(a,b)  { return a + b; }
  return p.reduce(plus) / pl;
}

var splat = people.filter(nameSearch)[0].age;
//console.log(splat);

console.log(people.map(average));
