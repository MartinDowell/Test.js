var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

console.log('Odd numbers:');
for(i=0; i<=numbers.length; i = i + 2)  {
  console.log(numbers[i]);
}

console.log('Even numbers:');
for(i=1; i<numbers.length; i = i + 2)  {
  console.log(numbers[i]);
}

var original = 10;
console.log('Increasing size of array to 20...');

for (i=original; i<=original + 10; i++)  {
  console.log(i);
  numbers.push(i);
  }

console.log('New size of array: ' + numbers.length);

console.log('Odd numbers:');
for(i=0; i<=numbers.length; i = i + 2)  {
  console.log(numbers[i]);
}

console.log('Even numbers:');
for(i=1; i<numbers.length; i = i + 2)  {
  console.log(numbers[i]);
}

console.log('At 14th position, we have...' + numbers[14] + '!');
