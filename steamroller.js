// Flatten a nested array. You must account for varying levels of nesting.



function steamrollArray(arr) {
  let answer = [];
  function flat(miniArr) {
    miniArr.forEach(element => {
      if (Array.isArray(element)) flat(element);
      else answer.push(element);
    })
  }
  flat(arr)
  return answer;
}

console.log(steamrollArray([1, [2], [3, [[4]]]]));