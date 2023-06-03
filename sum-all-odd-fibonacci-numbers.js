function sumFibs(num) {
  let prev = 0
  let after = 1;
  let sum = 0;
  let sumFib = 0
  while (sum <= num) {
    sum = prev + after; 
    // console.log(`${prev} + ${after} = ${sum}`);
    prev = after; 
    after = sum; 
    if (sum % 2 == 1 && sum <= num) sumFib += sum;
  } 
  return sumFib + 1;
}

console.log(sumFibs(4));