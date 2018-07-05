for (x = 1; x <= 100; x++)  {

  if (x % 3 == 0)  {
    if (x % 5 == 0)  {
      console.log('FizzBuzz');
    }
    else console.log('Fizz');
  }

  else if (x % 5 == 0)  {
    console.log('Buzz');
  }
  else console.log(x);
}
