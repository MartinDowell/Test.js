var myArray = [1,2,3,4,5,6,7,8,9,10,11];


console.log(myArray);

function reverseArray(myArray)  {
  var rev = [];
  for (i = (myArray.length - 1); i >= 0; i--)  {
    rev.push(myArray[i]);
  }
  return rev;
}

function reverseArrayInPlace(myArray)  {
  var temp;
  for (i = (myArray.length - 1); i >= 0; i--)  {
    temp = myArray[i];
    myArray.push(temp);
  }
  for (i = ((myArray.length / 2) - 1); i >= 0; i--)  {
    myArray.shift();
  }
  return myArray;
}


console.log(reverseArray(myArray));
console.log(reverseArrayInPlace(myArray));
