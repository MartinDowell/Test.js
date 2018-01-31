var arr = [];
var Person = function(name, born, died)  {
  this.name = name;
  this.born = born;
  this.died = died;
}

Person.prototype.age = function()  {
  return (this.died - this.born);
};

function birth(p)  {
  return p.age();
}

function average(arr)  {
  function plus(a,b)  { return a + b }
  return arr.reduce(plus) / arr.length
}

var thomas = new Person('Thomas', 1810, 1873);
var william = new Person('William', 1753, 1811);
var joseph = new Person('Joseph', 1725, 1761);
thomas.birthplace = 'Mancetter';

arr.push(thomas);
arr.push(william);
arr.push(joseph);
var splat = arr.map(birth);
console.log(splat);
console.log(average(splat));
