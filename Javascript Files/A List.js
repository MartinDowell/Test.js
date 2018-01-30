function arrayToList(myArray)  {
  var list = {};
  for (i = (myArray.length - 1); i >= 0; i--)  {
    list = {value: myArray[i], rest: list}
  }

  return list;
}

console.log(arrayToList([1,2,3]));
