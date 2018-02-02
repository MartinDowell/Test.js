//Vector constructor
var Vector = function (x, y)  {
  this.x = x;
  this.y = y;
}

var a = new Vector(3, 4);
console.log(a);
Vector.prototype.plus = function(b)  {
  return new Vector((this.x + b.x), (this.y + b.y));
}

Vector.prototype.minus = function(b)  {
  return new Vector((this.x - b.x), (this.y - b.y));
}

Vector.prototype.length = function()  {
  return (Math.sqrt((Math.pow(this.x, 2) + Math.pow(this.y, 2))));
}

var b = new Vector(7, 24);
console.log(b);

var vec = b.length();
console.log(vec);
