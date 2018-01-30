var qwerty = [];
var stuff;
//var name;
//var colour;
var fruits = [{name:'apple', colour:'green'},
              {name:'orange', colour:'orange'},
              {name:'strawberry', colour:'red'},
              {name:'banana', colour:'yellow'},
              {name:'blueberry', colour:'blue'}
            ]

function entry(stuff)  {
  console.log(stuff);
  if (stuff == 'name')  {
    for (i = 0; i < fruits.length; i++)  {
      qwerty[i] = fruits[i].name;
    }
  }
  else if (stuff == 'colour')  {
    for (i = 0; i < fruits.length; i++)  {
      qwerty[i] = fruits[i].colour;
    }
  }
  return (qwerty);
}

console.log(entry('name'));
console.log(fruits.reduce(entry))
