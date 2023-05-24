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