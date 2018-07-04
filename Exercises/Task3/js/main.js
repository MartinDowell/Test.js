var box = document.getElementById('numbers');
array = [];

  for (var i = 1; i <= 100; i++)  {

    if (i % 3 == 0)  {
      if (i % 5 == 0)  {
        num = 'FooBar';
      }
      else num = 'Foo';
    }

    else if (i % 5 == 0)  {
      num = 'Bar';
    }
    else num = i;

    array.push(num);
  }

box.innerHTML = array.join(',  ');
