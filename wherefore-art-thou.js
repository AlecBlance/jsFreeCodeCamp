function whatIsInAName(collection, source) {
  let sourceKeys = Object.keys(source);
  return collection.filter(object => (sourceKeys.every(keys => object.hasOwnProperty(keys) && object[keys] == source[keys])))
}

console.log(whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" }));