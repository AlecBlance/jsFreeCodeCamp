// Find the smallest common multiple of the provided parameters that can be evenly divided by both, as well as by all sequential numbers in the range between these parameters.

// The range will be an array of two numbers that will not necessarily be in numerical order.

// For example, if given 1 and 3, find the smallest common multiple of both 1 and 3 that is also evenly divisible by all numbers between 1 and 3. The answer here would be 6.

function smallestCommons(arr) {
  arr.sort((a,b) => a-b);
  let lcm = arr[0];
  for (let i = arr[0]; i < arr[1]; i++) {
    console.log("lcm====", lcm)
    lcm = (lcm * (i + 1)) / gcd(lcm, i+1);
  }
  return lcm;
}

function gcd(a,b) {
  while (b !== 0) {
    let temp = b;
    b = a % b;
    a = temp;
  }
  console.log(a);
  return a;
}


function lcm(a, b, gcd) {
  return (a * b) / gcd;
}


console.log(smallestCommons([23,18]));
