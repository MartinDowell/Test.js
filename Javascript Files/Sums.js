var howManyCupsT;
var howManyCupsC;
var costTea = 2;
var costCoffee = 2.5;

function costTea () {
  return howManyCupsT * costTea;
}

function costCoffee () {
  return howManyCupsC * costCoffee;
}

costTea(howManyCupsT = 2);
costCoffee(howManyCupsC = 2);

console.log('Sub-total of cups of tea: '+ costTea);
console.log('Sub-total of cups of coffee: '+ costCoffee);
console.log('Total cost of items: ' + (costTea + costCoffee));
