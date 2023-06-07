function convertToRoman(num) {
  const roman = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1
  };
  return Object.entries(roman).reduce((accu, [key,value]) => {
    if (num >= value) {
      const convert = num.toString().split("");
      const repeat = convert.shift(); 
      for (let i = 0; i < repeat && num >= value; i++) {
        num -= value;
        accu += key;
      }
    }
    return accu
  },'')
}

console.log(convertToRoman(36));