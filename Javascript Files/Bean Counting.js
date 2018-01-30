

function countChar(a, ch)  {
  var count = 0;
  for (n = 0; n < a.length; n++)  {
    if (a.charAt(n) == ch)  {
      count += 1;
    }

  }
    return count;
}

//console.log(countBs('Abcdef'));
console.log(countChar('kakerlak', 'K'));
