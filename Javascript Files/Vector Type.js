//Vector constructor
var Vector = function (x, y)  {
  this.x = x;
  this.y = y;
}

var a = new Vector(6, 8);
console.log(a);
Vector.prototype.plus = function(b)  {
  return new Vector((this.x + b.x), (this.y + b.y));
}

//Vector.prototype.minus = function()  {

//}

var b = new Vector(5, 6);
console.log(b);

var vec = a.plus(b);
console.log(vec);
