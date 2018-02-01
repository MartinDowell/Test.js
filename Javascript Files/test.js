var arr = [];
var Person = function(name, born, died)  {
  this.name = name;
  this.born = born;
  this.died = died;
}

Person.prototype.age = function()  {
  return (this.died - this.born);
};

function ages(p)  {
  return p.age();
}

function birth(p)  {
  return p.born;
}

function average(arr)  {
  function plus(a,b)  { return a + b }
  return arr.reduce(plus) / arr.length
}

var thomas = new Person('Thomas', 1810, 1873);
var william = new Person('William', 1753, 1811);
var joseph = new Person('Joseph', 1725, 1761);
var james = new Person('James', 1888, 1951);
var richard = new Person('Richard', 1866, 1922);

thomas.birthplace = 'Mancetter';

arr.push(thomas);
arr.push(william);
arr.push(joseph);
arr.push(james);
arr.push(richard);

var splat = arr.map(ages);
var splat2 = arr.map(birth);

console.log('The ages are: ' + splat);
console.log('The average age is: ' + average(splat));
console.log('The years of brth are: ' + splat2);
console.log('The average birth year is: ' + average(splat2));
