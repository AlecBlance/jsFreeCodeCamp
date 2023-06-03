// Given a positive integer num, return the sum of all odd Fibonacci numbers that are less than or equal to num.

// The first two numbers in the Fibonacci sequence are 0 and 1. Every additional number in the sequence is the sum of the two previous numbers. The first seven numbers of the Fibonacci sequence are 0, 1, 1, 2, 3, 5 and 8.

// For example, sumFibs(10) should return 10 because all odd Fibonacci numbers less than or equal to 10 are 1, 1, 3, and 5.

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
