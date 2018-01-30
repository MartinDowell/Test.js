

function range(start, end, step)  {
  var myArray = [];
  if (step > 0)  {
    for (i = start; i <= end; i += step)  {
      myArray.push(i);
    }
  }
  else
    for (i = start; i >= end; i +=step)  {
      myArray.push(i);
    }
  return myArray;
}

function sum(myArray)  {
  var total = 0;
  for (i = 0; i < myArray.length; i++)  {
    total += myArray[i];
  }
  return total;
}

console.log(range(10,1,-1));
console.log(sum(range(10,1,-1)));
