var mountains = require('./Mountains.js');

function names(m)  {
  return m.name;
}

function height(m)  {
  return m.height;
}

function maxHt(ht)  {
  return Math.max(...ht);
}

function average(ht)  {
  function plus(a,b)  {
    return a + b;
  }
  return Math.round(ht.reduce(plus) / ht.length);
}

function h2n(m)  {
  if (m.height == maxHt(mountains.map(height)))
  console.log(m.name);
  return m.name;
}

console.log('Average height of mountains: ' + average(mountains.map(height)));
console.log('Highest mountain is: ' + maxHt(mountains.map(height)) + ' which is ' + mountains.reduce(h2n));
