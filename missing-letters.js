// Find the missing letter in the passed letter range and return it.

// If all letters are present in the range, return undefined.

function fearNotLetter(str) {
  let start = str.charCodeAt(0);
  for(let i = 1; i < str.length; i++) {
    const charCode = str.charCodeAt(i);
    if ((charCode - start) == 1) {
      start = charCode;
    } else {
      return String.fromCharCode(start + 1);
    }
  }
}

console.log(fearNotLetter("abce"));
