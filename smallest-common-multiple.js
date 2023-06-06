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