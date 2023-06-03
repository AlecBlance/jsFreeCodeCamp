function uniteUnique(...arr) {
  const arrn = arr.reduce((accu, each) => {
    return [...accu, ...each]
  }, []);
  return [...new Set(arrn)];
}

console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]));