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
  if (m.height == maxHt(mountains.map(height)))  {
    return m.name;
  }
}

function empty(n)  {
  return n != undefined;
}

console.log('Average height of mountains: ' + average(mountains.map(height)) + 'm');
console.log('Highest mountain is at: ' + maxHt(mountains.map(height)) + 'm' + ' which is ' + (mountains.map(h2n)).filter(empty));
