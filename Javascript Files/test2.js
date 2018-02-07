var fruit = [];
for (i = 0; i < 6; i++)  {
  fruit[i] = {};
}
fruit[0].name = 'lemon';
fruit[0].colour = 'yellow';
fruit[1].name = 'plum';
fruit[1].colour = 'purple';
fruit[2].name = 'apple';
fruit[2].colour = 'green';
fruit[3].name = 'blueberry';
fruit[3].colour = 'blue';
fruit[4].name = 'strawberry';
fruit[4].colour = 'red';
fruit[5].name = 'banana';
fruit[5].colour = 'yellow';

function names(f)  {
  return f.name;
}

console.log(fruit.map(names));
