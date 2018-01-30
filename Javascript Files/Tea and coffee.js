


function costTea (howManyCupsT, costTea) {
  console.log('Sub-total of cups of tea: £'+ (howManyCupsT * costTea));
  return howManyCupsT * costTea;
}

function costCoffee (howManyCupsC, costCoffee) {
  console.log('Sub-total of cups of coffee: £'+ (howManyCupsC * costCoffee));
  return howManyCupsC * costCoffee;
}

function subTotal ()  {
  return CT + CC;
}

function addVAT ()  {
  return ST * 1.2;
}

var CT = costTea(3, 2);
var CC = costCoffee(2, 3.5);
var ST = subTotal(CT, CC);

console.log('Sub-total cost of items: £' + subTotal(CT, CC));
console.log('Total (with VAT added): £' + addVAT(ST, 1.2));
